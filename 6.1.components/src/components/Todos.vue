<template>
  <div id="todos">
    <ul>
      <li v-for="todo in todos" v-on:click="todo.show = !todo.show">
        <h2>{{ todo.name }}</h2>
        <h3 v-show="todo.show">{{ todo.time }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteTodo">Delete a Todo</button>
  </div>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteTodo: function () {
      this.todos.pop();
    },
  },
};
</script>
<style scoped>
#todos {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
