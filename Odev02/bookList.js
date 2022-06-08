// Patika Link: https://app.patika.dev/courses/nodejs/odev2

const books = [
  { title: "Harry Potter", author: "J. K. Rowling" },
  { title: "Silmarillion", author: "J. R. R. Tolkien" },
  { title: "Dune", author: "Frank Herbert" },
];

const addBook = (newBook) => {
  return new Promise((resolve, reject) => {
    console.log("New book has been adding...");
    if (newBook) {
      books.push(newBook);
      resolve("New book successfully added!");
    } else {
      reject("Adding failed!");
    }
  });
};

const listBooks = (data) => {
  return new Promise((resolve, reject) => {
    console.log("Books has been listing...");
    if (data) {
      console.log(data);
      resolve("Books has successfully listed!");
    } else {
      reject("Listing failed!");
    }
  });
};

async function showBooks() {
  try {
    const adding = await addBook({ title: "Dracula", author: "Bram Stoker" });
    console.log(adding);
    const listing = await listBooks(books);
    console.log(listing);
  } catch (err) {
    console.log(err);
  }
}

showBooks();
