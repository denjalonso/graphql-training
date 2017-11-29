const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

var fakeDatabase = {
    'a': {
        id: 'a',
        name: 'pepa',
    },
    'b': {
        id: 'b',
        name: 'paco',
    },
};

// To look at it
// const schema = buildSchema(`
//     type User {
//         id: String,
//         name: String
//     }
//
//     type Query {
//         user(id: String): User
//     }
// `);

const userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    },
});

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: userType,
            args: {
                id: { type: graphql.GraphQLString }
            },
            resolve: (_, {id}) => {
                return fakeDatabase[id];
            },
        }
    },
});

const schema = new graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');