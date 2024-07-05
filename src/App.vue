<template>
  <!-- <welcome-page></welcome-page> -->
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
  font-family: Lora, "Arial Narrow Bold", sans-serif;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
