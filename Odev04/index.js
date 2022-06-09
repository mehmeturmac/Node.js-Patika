// Patika Link: https://app.patika.dev/courses/nodejs/odev4

const fs = require("fs");

const createFile = () => {
  fs.writeFile(
    "employees.json",
    '{ name: "Employee 1 Name", salary: 2000 }',
    "utf8",
    (err) => {
      if (err) console.log(err);
      console.log("File created with successfully!");
    }
  );
};

const readFile = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("File read with successfully!");
  });
};

const appendFile = () => {
  fs.appendFile(
    "employees.json",
    ',\n{"name": "Employee 2 Name", "salary": 2001}',
    "utf8",
    (err) => {
      if (err) console.log(err);
      console.log("File updated with successfully!");
    }
  );
};

const deleteFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("File deleted with successfully!");
  });
};

// createFile();
// readFile();
// appendFile();
deleteFile();
