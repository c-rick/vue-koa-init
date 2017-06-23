const Router = require('koa-router')
const apiRouter = Router()
const todo = require('../controllers/todo')

apiRouter.get('/todos', todo.get)

module.exports = apiRouter
