import chai from 'chai'
import request from 'supertest'
import server from '../src/server'
import createServer from './helpers/createServer'

chai.should()

describe('server', () => {
  it('returns a function', () => {
    server.should.be.an.instanceof(Function)
  })

  it('responds to /hello-world', async () => {
    const server = createServer()
    const res = await request(server)
      .get('/hello-world')
      .set('Accept', 'text/plain')

    res.text.should.equal('hello world')
  })
})
