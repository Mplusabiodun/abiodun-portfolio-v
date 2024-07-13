<template>
  <div class="container_header">
    <the-header class="header"></the-header>
  </div>
  <router-view></router-view>
  <div class="container_footer">
    <the-footer class="footer"></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import TheFooter from "./components/UI/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
  /* font-family: Lora, "Arial Narrow Bold", sans-serif; */
  font-family: Manrope, sans-serif;
}

body {
  --token-1170bfc8-607b-4b81-950b-9b5d20e62214: rgb(2, 6, 23);
  --token-a2487c6a-fcb0-4c82-a4d4-9e441490a6e2: rgb(189, 197, 209);
  --token-ae816849-3c94-47ab-ac08-dd65b7215b22: rgb(52, 211, 153);
  --token-ab4f91f1-8b85-4b37-a1f1-c1cc024c302e: rgb(23, 31, 44);
  --token-cf9eabfa-d313-4c94-941c-19c2f5bf1c6c: rgb(29, 39, 56);
  --token-2d3bb9c5-1148-4a96-bc8e-e426804e3b72: rgb(53, 69, 95);
  --token-f7facec8-133b-463b-99a9-2e45678a6e39: rgb(82, 118, 191);
  --token-336e93e7-cde2-4c01-83d6-e02347dc7815: rgb(52, 211, 153);
  --token-ff16434d-45d3-4adc-a4b4-fb86763211e0: rgb(129, 140, 248);
  --token-3ef3d5ab-6fce-4d90-ba14-b03d18301902: rgb(251, 191, 36);
  --token-b9d1ebef-7193-4802-8efb-4bde9a9c342b: rgb(255, 84, 166);
}
.container_header {
  background: rgb(2, 6, 23);
  padding: 1rem 7rem 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  margin-bottom: 4rem;
}
.container_footer {
  background: rgb(2, 6, 23);
  /* margin-top: 15rem; */
  padding: 1rem 4rem 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
