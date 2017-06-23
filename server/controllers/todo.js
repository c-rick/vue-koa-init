exports.get = async (ctx) => {
  try {
    const Todos = ctx.db.collection('todos')
    const todoList = await Todos.find({}).toArray()
    if (!todoList) ctx.api({ code: 500 })
    ctx.api({ code: 200, data: todoList })
  } catch (e) {
    console.log(e)
    ctx.api({ code: 500 })
  }
}
