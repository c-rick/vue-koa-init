const Koa = require('koa')
const path = require('path')
const app = new Koa()
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const MongoClient = require('mongodb').MongoClient
const config = require('./server/config')

// middleware
const render = require('./server/middleware/render')
const api = require('./server/middleware/api')
const requinfo = require('./server/middleware/requinfo')
// router
const router = require('koa-router')()
const indexRouter = require('./server/routers')
const apiRouter = require('./server/routers/api')

app.use(bodyParser())
app.use(render(path.join(__dirname, '')))
app.use(serve(path.join(__dirname, 'dist')))
app.use(api())
app.use(requinfo())

router.use('/', indexRouter.routes(), indexRouter.allowedMethods())
router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())
app.use(router.routes(), router.allowedMethods())
app.use(ctx => {
  ctx.render('index.html')
})

MongoClient.connect(config.mongoUrl, (err, instance) => {
  if (err) { throw err }
  app.context.db = instance;
  app.listen(8077, () => {
    console.log('server is running in 8077')
  })
})

