/* tslint:disable:no-console */

import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as helmet from 'koa-helmet'
import * as Router from 'koa-router'

const app = new Koa()

app.use(helmet())
app.use(bodyParser())

const router = new Router()
router.get('/hello-world', (ctx: Koa.Context) => {
  ctx.body = 'hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())

export interface IServerOptions {
  port: number
}

export default (opts?: IServerOptions) => {
  const port = (opts && opts.port) || 3000
  app.listen(port)
  console.log(`🌍  Server listening on port ${port}`)
}

export {
  app
}
