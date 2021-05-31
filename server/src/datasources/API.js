const isEmail = require('isemail');
const { DataSource } = require('apollo-datasource');
const { Op } = require("sequelize");

class API extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }
  initialize(config) {
    this.context = config.context;
  }

  async findOrCreateUser({ email: emailArg } = {}) {
    const email = this.context && this.context.user ? this.context.user.email : emailArg;
    if (!email || !isEmail.validate(email)) return null;

    const users = await this.store.users.findOrCreate({ where: { email } });
    return users && users[0] ? users[0] : null;
  }

  async getPosts() { 
    const res = await this.store.posts.findAll({
      attributes: { exclude: ['id', 'updatedAt'] },
      where: {
        user_email: {
          [Op.ne]: null
        }
      },
      order: [['createdAt', 'ASC'] ], 
    });
    
    const allPosts = res && res.length ? res.map(el =>  el.get()) : []
    return allPosts
  }

  async postMessage (postData , email ) { 
    const users = await this.store.users.findAll({ where: { email } })
    if(users && users[0] ){ 
      const res = await this.store.posts.create({ user_email: email, postData });
      return res && res._options.isNewRecord? res.get() : false;
    }
    return false
  }

}

module.exports = API;
