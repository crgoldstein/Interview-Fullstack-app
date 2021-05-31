module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) => dataSources.API.getPosts(),
  },
  Mutation: {
    postMessage: async (_, { message , email}, { dataSources }) => {
      const results = await dataSources.API.postMessage(message, email)
      const posts= await  dataSources.API.getPosts()
      return {
        success: results ? true : false,
        message: results ? 'Posted successfully'
            : `the following message couldn't be sent`,
        posts
      };
    },
    login: async (_, { email }, { dataSources }) => {
      const user = await dataSources.API.findOrCreateUser({ email });
      if (user) {
        user.token = Buffer.from(email).toString('base64');
        return user;
      }
    }
  },
  
};
