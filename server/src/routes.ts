import express from 'express'
import knex from './database/connection'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()
// Retorna os items

routes.get('/items', itemsController.index)

// Cria os pontos de coleta
routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes;