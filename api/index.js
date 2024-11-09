// server.js
import express from 'express';
import schema from './graphql/schema.js';
import { graphqlHTTP } from 'express-graphql';
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});