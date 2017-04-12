export default () => {
  const server = require('../../src/server')
  return server.app.listen()
}
