// api/graphql.js
import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema.js"; // Import your GraphQL schema

const app = express();

app.use(
  "/api/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL UI for testing
  })
);
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}/api/graphql`);
// });

export default app;
