import Vue from "vue";
import App from "./App.vue";
import VueRecord from "@codekraft-studio/vue-record";

Vue.use(VueRecord);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
