<template>
  <div class="container">
    <ul>
      <h3 class="collection">A collection of my favorite works</h3>
      <li>
        <div class="pics_cont"><img id="project_pics" src="#" alt="" /></div>
        <div class="project_details">
          <h3 class="project_name">Audiophile</h3>
          <p class="about_project">
            Audiophile is an online premier store for high quality headphones,
            earphones and speakers. An all in one stop to fulfillyour audio
            needs. For music lovers and sound specialists devoted to help them
            get their audio needs.
          </p>
          <a href="https://gadgets-ecommerce-vue3.netlify.app/" target="blank"
            >audiophile-ecommerce</a
          >
        </div>
      </li>
    </ul>
    <favorite-quotes></favorite-quotes>
  </div>
</template>
<script>
import FavoriteQuotes from "../UI/FavoriteQuotes.vue";

export default {
  components: {
    FavoriteQuotes,
  },
};
</script>
<style scoped>
.container {
  background: #020617;
  padding: 9rem 9rem;
  color: #fff;
}
.collection {
  font-size: 3.5rem;
  width: 35rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 3.5rem;
  text-align: center;
  margin: 0 auto;
}
li {
  list-style-type: none;
  margin: 4rem 0;
}
.pics_cont {
  overflow: hidden;
  width: 100%;
  height: 28rem;
  background: red;
  border-radius: 1.2rem;
  margin-bottom: 1rem;
}
#project_pics {
  width: 100%;
  height: 28.5rem;
}
.project_name {
  font-size: 2rem;
  letter-spacing: 1px;
}
.about_project {
  font-size: 1.1rem;
  letter-spacing: 1px;
  line-height: 28px;
  opacity: 70%;
  margin: 1rem 0;
}
.project_details a {
  font-size: 1.2rem;
}
</style>
