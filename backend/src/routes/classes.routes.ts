import { Router } from 'express'

import { ClassesController } from './../controllers/ClassesController'

const classesController = new ClassesController()
const classesRoutes = Router()

classesRoutes.post('/', classesController.create)

export default classesRoutes
