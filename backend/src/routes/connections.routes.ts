import { Router } from 'express'

import { ConnectionsController } from './../controllers/ConnectionsController'

const connectionsController = new ConnectionsController()
const connectionsRoutes = Router()

connectionsRoutes.get('/', connectionsController.index)
connectionsRoutes.post('/', connectionsController.create)

export default connectionsRoutes
