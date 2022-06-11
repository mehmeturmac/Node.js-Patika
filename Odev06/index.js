const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const koaRouter = new Router();
const port = 3000;

koaRouter.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Welcome to Home page</h1>";
});

koaRouter.get("/about", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Welcome to About page</h1>";
});

koaRouter.get("/contact", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>Welcome to Contact page</h1>";
});

// koaRouter.get("*", (ctx) => {
//     ctx.status = 404;
//     ctx.body = "<h1>404 Page not found</h1>";
// });

app.use(koaRouter.routes());

app.listen(port, () => {
  console.log(`Server running on port: ${port}"`);
});
