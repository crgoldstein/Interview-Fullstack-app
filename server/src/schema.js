const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Post]
  }

  type Mutation {
    postMessage(message: String , email: String): PostResponse
    login(email: String): User
  }

  type Post {
      user_email: String!
      postData: String
      createdAt: String
  }
  
  type User {
      id: ID!
      email: String!
      token: String
  }

  type PostResponse {
    success: Boolean!
    message: String
    posts: [Post]
  }

`;

module.exports = typeDefs;
