const express = require("express");

const app = express();

// for the json support
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

///// create the connection to the database
const connectDb = require("./server/connection/connection");
connectDb();

const port = process.env.PORT || 8000;

/// require the questios routes file
/// For Employee Actions
app.use("/", require("./server/routes/questionRoutes"));

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
