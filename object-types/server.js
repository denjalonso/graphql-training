const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type RandomGenerator {
        seed: Int!
        generateRandom: Int!
        generate(numRandoms: Int!): [Int]
  }
  
  type Query {
    getRandomList(seed: Int): RandomGenerator
  }
`);

class RandomGenerator {
    constructor(seed) {
        this.seed = seed;
    }

    generateRandom() {
        return 1 + Math.floor(Math.random() * this.seed);
    }

    generate({ numRandoms }) {
        var output = [];
        for (var i = 0; i < numRandoms; i++) {
            output.push(this.generateRandom());
        }
        return output;
    }
}

var root = {
    getRandomList: function ({ numRandoms }) {
        return new RandomGenerator(numRandoms || 6);
    }
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');