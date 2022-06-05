new Vue({
  el: "#vue-app",
  data: {
    isActive: true,
    hasError: false,
    error: null,
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal",
      };
    },
  },
});

new Vue({
  el: "#vue-app2",
  data: {
    activeColor: "red",
    fontSize: 30,
    styleObject: {
      color: "red",
      fontSize: "35px",
    },
  },
});

new Vue({
  el: "#vue-app3",
  data: {
    type: "D",
    ok: true,
  },
});

var example1 = new Vue({
  el: "#example-1",
  data: {
    items: [{ message: "Foo" }, { message: "Bar" }],
  },
});

new Vue({
  el: "#v-for-object",
  data: {
    object: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10",
    },
  },
});

new Vue({
  el: "#vue-app4",
  data: {
    todos: [
      { id: 1, name: "Get up", isComplete: false },
      { id: 2, name: "Make coffee", isComplete: false },
      { id: 3, name: "Eat breakfast", isComplete: false },
      { id: 4, name: "Go shopping", isComplete: true },
      { id: 5, name: "Go to work", isComplete: true },
      { id: 6, name: "Eat lunch", isComplete: true },
    ],
    age: 22,
  },
  methods: {
    handleClick: function () {
      this.age += 1;
    },
  },
});

new Vue({
  el: "#vue-app5",
  data: {
    message: "",
    checked: false,
    selected: "",
  },
});
