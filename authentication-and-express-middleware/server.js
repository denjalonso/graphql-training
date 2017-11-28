const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    ip: String
  }
`);

const loggingMiddleware = (req, res, next) => {
    console.log('ip:', req.ip);
    next();
}

var root = {
    ip: (args, { ip }) => {
        return ip;
    }
};

var app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');