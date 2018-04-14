
const fs = require('fs');
const Koa = require('koa');
const router = require('./routes/routes');
const app = new Koa();

const index = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(router.get('/', main))
app.use(router.get('/index', about))

app.listen(3000);