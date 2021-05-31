const {Sequelize} = require('sequelize');

module.exports.createStore = () => {
  const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
  })

  const users = db.define('user', {
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    email: Sequelize.STRING,
  })

  const posts = db.define('post', {
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    user_email: Sequelize.STRING,
    postData:  Sequelize.STRING,
  })

  return { db, users, posts }
}
