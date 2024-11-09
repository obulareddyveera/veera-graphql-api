// server.js
import express from 'express';
import schema from './graphql/schema.js';
import { graphqlHTTP } from 'express-graphql';
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});