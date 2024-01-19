const booksRoute = require("express").Router();
const Books = require("./models/Books");

// require(".env/config")

booksRoute.get("/books", (req, res) => {
  res.send("we are in books route method: GET");
});

booksRoute.post("/", async (req, res) => {
  const { title, author, price, description, image, edition, year } = req.body;

  // Assuming you have a Books model and you want to save a new book entry
  const newBook = new Books({
    title,
    author,
    price,
    description,
    image,
    edition,
    year,
  });

  try {
    const savedBook = await newBook.save();
    res.send(savedBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

booksRoute.patch("/books", (req, res) => {
  // Handle updating book entries
});

booksRoute.delete("/books", (req, res) => {
  // Handle deleting book entries
});

module.exports = booksRoute;
