const Koa = require('koa')
const helmet = require('koa-helmet')
const bodyParser = require('koa-bodyparser')
const _ = require('koa-route')

const app = new Koa()

app.use(helmet())
app.use(bodyParser())

app.use(_.get('/hello-world', ctx => {
  ctx.body = 'hello world'
}))

module.exports = (opts) => {
  const port = (opts && opts.port) || 3000
  app.listen(port)
  console.log(`🌍  Server listening on port ${port}`)
}

module.exports.app = app
