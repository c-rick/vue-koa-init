import * as types from './mutation-types'
export default {
  [types.GET_TODOS] (state, { data }) {
    state.todoList = data
  },

  [types.ADD_TODO] (state, { content, _id }) {
    state.todoList.push({ _id, content, state: 'undo' })
  },

  [types.COMPLETE_TODO] (state, { index }) {
    state.todoList[index].state = 'complete'
  },

  [types.DELETE_TODO] (state, { index }) {
    state.todoList.splice(index, 1)
  }
}
