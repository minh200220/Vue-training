<template>
  <footer>
    <p>Copyright 2017 {{ title }}</p>
  </footer>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
