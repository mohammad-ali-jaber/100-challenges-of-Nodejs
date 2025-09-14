const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`type Query { hello: String }`;

const resolvers = {
  Query: {
    hello: () => "Hello"
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3000).then(({ url }) => console.log(`Server ready at ${url}`));

// in powerahell
// Invoke-RestMethod -Uri http://localhost:3000/ -Method POST -ContentType "application/json" -Body '{"query":"{ hello }"}'

// or in postman 