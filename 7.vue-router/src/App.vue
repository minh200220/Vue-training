<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <button v-on:click="prev()">Prev</button>
    <button v-on:click="next()">Next</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "My Vue.js App !!!"
    };
  },
  methods: {
    greeting: function() {
      return "Learning Vue Router!";
    },
    prev: function() {
      this.$router.go(-1);
    },
    next: function() {
      this.$router.go(1);
    }
  }
};
</script>

<style></style>
