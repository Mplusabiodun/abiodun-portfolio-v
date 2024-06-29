<template>
  <!-- <welcome-page></welcome-page> -->
  <router-view></router-view>
</template>

<script>
// import WelcomePage from "./components/WelcomePage.vue";
export default {
  components: {
    // WelcomePage,
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
