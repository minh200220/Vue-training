new Vue({
  el: "#vue-app",
  data: {
    name: "Minh",
    age: 22,
  },
  methods: {
    greet: function (time = "morning") {
      return "Good " + time + ", " + this.name;
    },
    handleClick: function () {
      this.age += 1;
    },
  },
});

new Vue({
  el: "#vue-app2",
  data: {
    todos: [
      { id: 1, name: "Get up" },
      { id: 2, name: "Make coffee" },
      { id: 3, name: "Eat breakfast" },
      { id: 4, name: "Go shopping" },
      { id: 5, name: "Go to work" },
      { id: 6, name: "Eat lunch" },
    ],
  },
  methods: {
    deleteTodo: function () {
      this.todos.pop();
    },
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  },
});
