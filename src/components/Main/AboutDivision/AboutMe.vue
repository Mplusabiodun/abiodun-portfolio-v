<template>
  <section class="container">
    <h2 class="greetngs">
      <span class="good">Good morning!</span>I'm Fatai, an enthusiasm frontend
      developer.
    </h2>
    <div></div>

    <favorite-quotes></favorite-quotes>
  </section>
</template>
<script>
import FavoriteQuotes from "@/components/UI/FavoriteQuotes.vue";

export default {
  components: {
    FavoriteQuotes,
  },
};
</script>
<style scoped>
.container {
  background: #020617;
  padding: 7rem 9rem;
  color: #fff;
}
.greetngs {
  font-size: 3.1rem;
  width: 40rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 3.5rem;
  text-align: center;
  margin: 0 auto;
}
.good {
  display: block;
}
</style>
