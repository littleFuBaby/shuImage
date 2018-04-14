

const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
	console.log("one begin");
	next();
	console.log("one end");
}
const two = (ctx, next) => {
	console.log("two begin");
	next();
	console.log("two end");	
};

const main = ctx => {
	ctx.response.body = "Hello World";
}

app.use(one);
app.use(two);
app.use(main);

app.listen(80);