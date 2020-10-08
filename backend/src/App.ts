import express from 'express'
import cors from 'cors'

import routes from './routes'

export class App {

  public server: express.Application

  constructor () {
    this.server = express()

    this.middlewares()
    this.route()
  }

  private middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  private route () {
    this.server.use(routes)
  }
}
