const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    randomSword: String
    random: Float!
    threeRandomList: [Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    randomSword: () => {
        return Math.random() < 0.5 ? 'link sword' : 'luke sword';
    },
    random: () => {
        return Math.random();
    },
    threeRandomList: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');