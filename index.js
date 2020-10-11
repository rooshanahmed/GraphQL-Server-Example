const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    id: 1,
    name: "Ali",
    email: "ali@gmail.com",
    age: 21,
  },
  {
    id: 2,
    name: "Alam",
    email: "alam@gmail.com",
    age: 28,
  },
  {
    id: 3,
    name: "Anas",
    email: "anas@gmail.com",
    age: 25,
  },
];

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent: (_, { input }) => {
      console.log(input);
      return input;
    },
  },
};

const typeDefs = gql`
  type Student {
    id: Int  
    name: String
    email: String
    age: Int
  }
  input StdInput {
    id: Int
    name: String
    email: String
    age: Int
  }
  type Query {
    students: [Student]
  }
  type Mutation {
    addStudent(input: StdInput): Student
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
