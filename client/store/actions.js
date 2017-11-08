import * as types from './mutation-types'
import axios from 'axios'

export const getTodos = ({ commit }) => {
  axios.get('/api/todos').then((res) => {
    const { data, code } = res.data
    if (code === 200) {
      commit(types.GET_TODOS, { data })
    }
  })
}
export const addTodo = ({ commit }, content) => {
  axios.post('/api/addtodo', { content }).then((res) => {
    const { data, code } = res.data
    if (code === 101) {
      commit(types.ADD_TODO, { content, _id: data })
    }
  })
}

export const completeTodo = ({ commit }, { _id, index }) => {
  axios.put('/api/updatetodo', { _id }).then((res) => {
    const { code } = res.data
    if (code === 102) {
      commit(types.COMPLETE_TODO, { index })
    }
  })
}

export const deleteTodo = ({ commit }, { _id, index }) => {
  axios('/api/deletetodo', {
    method: 'delete',
    data: { _id }
  }).then((res) => {
    const { code } = res.data
    if (code === 103) {
      commit(types.DELETE_TODO, { index })
    }
  })
}
