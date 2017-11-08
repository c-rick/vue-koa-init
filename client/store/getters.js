export const todos = (state) => state.todoList.map(function (todo, index) {
  return {
    id: `(${index + 1})`,
    _id: todo._id,
    content: `内容：${todo.content}`,
    state: todo.state
  }
})


