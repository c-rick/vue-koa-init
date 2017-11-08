const Router = require('koa-router')
const apiRouter = Router()
const todo = require('../controllers/todo')

apiRouter.get('/todos', todo.get)
apiRouter.post('/addtodo', todo.add)
apiRouter.put('/updatetodo', todo.update)
apiRouter.delete('/deletetodo', todo.delete)

module.exports = apiRouter
