<template>
  <div>
    <input type="text"  @keyup.enter="addfilter" @blur="addfilter" />
    <ul v-if="todos.length">
      <p v-for="(item,index) in todos">
        <span>{{item.id}}</span>
        <span>{{item.content}}</span>
        <span :class="item.state">{{item.state}}</span>
        <button v-if="item.state !== 'complete'" @click="completeTodo(index)">完成</button>
        <button @click="deleteTodo(index)">x</button>
      </p>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      todoList: []
    }
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: Object.assign({
    addfilter (e) {
      const content = e.target.value
      if (content !== '') {
        this.$store.dispatch('addTodo', content)
        e.target.value = ''
      }
    }
  }, mapActions(['addTodo', 'completeTodo', 'deleteTodo']))
}
</script>
<style>
.undo{
  color:red;
}
.complate{
  color:green;
}
</style>


