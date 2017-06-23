import * as types from './mutation-types'
export default {
  [types.ADD_TODO] (state, { content }) {
    state.todoList.push({ id: state.todoList.length, content, state: 'undo' })
  },

  [types.COMPLETE_TODO] (state, { index }) {
    state.todoList[index].state = 'complate'
  },

  [types.DELETE_TODO] (state, { id }) {
    state.todoList.splice(id, 1)
  }
}
