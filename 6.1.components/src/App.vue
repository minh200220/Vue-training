<template>
  <div>
    <app-header
      v-bind:title="title"
      v-on:changeTitle="updateTitle($event)"
    ></app-header>
    <app-todos v-bind:todos="todos"></app-todos>
    <!-- <ul>
      <li v-for="todo in todos">{{ todo.name }}</li>
    </ul> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// Imports
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Todos from "./components/Todos.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-todos": Todos,
  },
  data() {
    return {
      todos: [
        { name: "Get up", time: "6h", show: true },
        { name: "Make coffee", time: "6h30", show: true },
        { name: "Have breakfast", time: "7h", show: true },
        { name: "Go to work", time: "8h", show: true },
        { name: "Have lunch", time: "12h", show: true },
        { name: "Go home", time: "18h", show: true },
      ],
      title: "Vue JS Traning",
    };
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
