const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query { hello: String }
  type Mutation { add(a: Int, b: Int): Int }
`;

const resolvers = {
  Query: { hello: () => 'Hello' },
  Mutation: { add: (_, {a,b}) => a + b }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3000).then(({ url }) => console.log(`Server ready at ${url}`));

// in powershell
// Invoke-RestMethod -Uri http://localhost:3000/ -Method POST -ContentType "application/json" -Body '{"query":"mutation{add(a:2,b:3)}"}'
