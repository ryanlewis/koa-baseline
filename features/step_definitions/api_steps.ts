import { binding, given, when, then, before, after } from 'cucumber-tsflow'

import * as http from 'http'
import * as server from '../../src/server'
import * as fetch from 'isomorphic-fetch'

@binding()
class ApiSteps {
  private server: http.Server
  private uri: string
  private baseUri: string
  private method: string
  private headers: Headers

  @before()
  public beforeAllScenarios (): void {
    this.uri = ''
  }

  @given(/I am running (?:the|a) server/)
  public runningTheServer (): void {
    this.server = server.app.listen(3002)
    this.baseUri = 'http://localhost:3002'
  }

  @given(/I have the header (?:'|")(.*)(?:'|") (?:equal|set) to/)
  public header (name: string, value: string) {
    this.headers.set(name, value)
  }

  @when(/I (GET|POST|PUT|DELETE) (.+)/)
  public get (method: string, url: string): void {
    this.uri = url
    this.method = method
  }

  @then(/I should receive (?:'|")(.*)(?:'|")/)
  public async receiveSomething (expected) {
    const opts: RequestInit = {
      method: this.method,
      headers: this.headers
    }

    const response = await fetch(this.baseUri + this.uri, opts)
    const body = await response.text()

    if (body !== expected) throw new Error(`Expected '${expected}', received '${body}'`)
  }
}

export = ApiSteps
