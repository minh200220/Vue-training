new Vue({
  el: "#vue-app",
  data: {
    name: "Minh",
    rawHtml: "<span style='color: red'>This should be red</span>",
    dynamicId: "dynamicId",
    age: 22,
    attr: "href",
    url: "https://www.google.com",
  },
  methods: {
    handleClick: function () {
      this.age += 1;
    },
    onSubmit: function () {
      alert("Form submit");
    },
  },
});
