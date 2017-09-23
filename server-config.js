const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const session = require('koa-session');

// const config = require('./config.js'); //uncomment when ready to connect to db
const app = new Koa();
const router = new Router();
const port = 3000;


// Authentication
app.keys = ['praise the sun'];
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false
};
// app.use(session(CONFIG, app));
app.use( session(app) ); //using default CONFIG above


app.use( bodyParser() );

router
  .get('/', (ctx) => {
    // load all pins from db.pins
    // render all pins
    // ctx.body = "hello world!";
    ctx.body = "Hello World";
  })
  .get('/login', (ctx) => {

    // req.body with username, password
    // check username in db.users
    // bcrypt.compare password against db.users.password
    // grant session
    // send db.users.id
  })
  .post('/signup', (ctx) => {
    // req.body with username, password
    // check username in db.users
    // bcrypt.hash password and save in db.users.password
    // grant session
    // send db.users.id
  })
  .get('/pin', (ctx) => {
    // req.body with pin_id
    // check pin_id in db.pins.id
    //
  })
  .post('/pin', (ctx) => {
    // pin title
    // pin description
    // long, lat
    // host_id
  });

app.use( router.routes() );
  // .use( router.allowedMethods(
  //
  // ));

module.exports = app;
