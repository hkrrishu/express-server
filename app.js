const express = require("express");

const app = express();

const booksRouter = require("./routes/books");

// To read JSON data sent in the request
app.use(express.json());

// Connect the books router
app.use("/books", booksRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
