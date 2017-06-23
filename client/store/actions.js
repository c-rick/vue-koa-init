import * as types from './mutation-types'

export const addTodo = ({ commit }, content) => {
  commit(types.ADD_TODO, { content })
}

export const completeTodo = ({ commit }, index) => {
  commit(types.COMPLETE_TODO, { index })
}

export const deleteTodo = ({ commit }, id) => {
  commit(types.DELETE_TODO, { id })
}
