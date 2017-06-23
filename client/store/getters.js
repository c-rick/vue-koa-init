export const todos = state => {
  return state.todoList.map(todo => {
    return {
      id: `(${todo.id + 1})`,
      content: `内容：${todo.content}`,
      state: todo.state
    }
  })
}
