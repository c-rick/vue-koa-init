const ObjectId = require('mongodb').ObjectId;

exports.get = async (ctx) => {
  try {
    const Todos = ctx.db.collection('todos')
    const todoList = await Todos.find({}).toArray()
    if (!todoList) { ctx.api({ code: 500 }) }
    ctx.api({ code: 200, data: todoList })
  } catch (e) {
    ctx.api({ code: 500 })
  }
}

exports.add = async (ctx) => {
  try {
    const { content } = ctx.request.body
    const Todos = ctx.db.collection('todos')
    const result = await Todos.insert({ content, state: 'undo' })
    if (result.result && result.result.n === 1) { return ctx.api({ code: 101, data: result.insertedIds[0] }) }
    ctx.api({ code: 500 })
  } catch (e) {
    ctx.api({ code: 500 })
  }
}

exports.update = async (ctx) => {
  try {
    const { _id } = ctx.request.body
    const Todos = ctx.db.collection('todos')
    const { result } = await Todos.update({ _id: ObjectId(_id) }, { $set: { state: 'complete' } })
    if (result && result.n === 1) { return ctx.api({ code: 102 }) }
    ctx.api({ code: 500 })
  } catch (e) {
    ctx.api({ code: 500 })
  }
}

exports.delete = async (ctx) => {
  try {
    const { _id } = ctx.request.body
    const Todos = ctx.db.collection('todos')
    const { result } = await Todos.remove({ _id: ObjectId(_id) })
    if (result && result.n === 1) { return ctx.api({ code: 103 }) }
    ctx.api({ code: 500 })
  } catch (e) {
    ctx.api({ code: 500 })
  }
}
