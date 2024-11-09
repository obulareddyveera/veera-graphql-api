// api/graphql.js
import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema.js"; // Import your GraphQL schema

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Veera GraphQL Service!");
});

app.get("/api", (req, res) => {
  res.json({ message: "This is the API endpoint!" });
});
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL UI for testing
  })
);

export default app;
