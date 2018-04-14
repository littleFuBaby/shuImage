const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./template/template.html', 'utf8');
  console.log("two");
  await next();
};

const one = ctx => {
	console.log("one");
}

app.use(main);
app.use(one);

app.listen(80);