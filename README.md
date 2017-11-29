# Training

## Hello world
```
node hello-world/server.js
```
## Hello world express graphql server
```
node hello-world-express-graphql-server/server.js
```
## Hello world express graphql server
```
node hello-world-express-graphql-server/server.js
```
Open in browser: *http://localhost:4000/graphql*

The query:
```
{
  hello
}
```

**Clients:**

Paste this into a terminal:
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql
```

From the browser dev console:
```
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
xhr.send(JSON.stringify({query: "{ hello }"}));
```

## Client browser variable test
```
node client-browser-variable-test/server.js
```
The query:
```
{
  rollDice(numDice: 2, numSides: 5)
}
```
From the browser dev console:
```
var dice = 3;
var sides = 6;
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
xhr.send(JSON.stringify({
  query: query,
  variables: { dice: dice, sides: sides },
}));
```
## Basic types scalar
```
node basic-types-scalar/server.js
```
The query:
```
  {
    randomSword,
    random,
    threeRandomList
  }
```

### Object types
```
node object-types/server.js
```
The query:
```
{
  getRandomList(seed: 6) {
  	generateRandom
  	generate(numRandoms: 3)
  }
}
```

### Mutations and input types
```
node object-types/server.js
```
The query:
```
mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}
```

### Authentication and Express Middleware
```
node authentication-and-express-middleware/server.js
```
The query:
```
{
    ip
}
```

### Constructing types graphql schema
```
node constructing-types-graphql-schema/server.js
```
The query:
```
{
  user(id: "a") {
    id
    name
  }
}
```