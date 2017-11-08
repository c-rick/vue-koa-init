<template>
  <div>
    <input type="text"  @keyup.enter="addfilter" @blur="addfilter" />
    <ul v-if="todos.length">
      <p v-for="(item, index) in todos" :key="item._id">
        <span>{{item.id}}</span>
        <span>{{item.content}}</span>
        <span :class="item.state">{{item.state}}</span>
        <button v-if="item.state !== 'complete'" @click="completeTodo({ _id: item._id, index })">完成</button>
        <button @click="deleteTodo({ _id: item._id, index })">x</button>
      </p>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('getTodos')
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
  }, mapActions(['getTodos', 'addTodo', 'completeTodo', 'deleteTodo']))
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


