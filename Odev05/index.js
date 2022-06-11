const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to Home page</h2>");
  } else if (url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to About page</h2>");
  } else if (url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to Contact page</h2>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h2>404 Page not found</h2>");
  }
  console.log("Request sent");
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server running on port: ${port}"`);
});
