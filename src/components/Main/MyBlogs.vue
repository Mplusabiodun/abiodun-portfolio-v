<template>
  <div class="container">
    <h3 class="collection">
      Insightful and helpful content you may find interesting.
    </h3>
    <div class="blog_m medium_first">
      <div class="custom_div">
        <h3>MY CUSTOM COUNTER HOOK</h3>
        <p>
          Started being a technical writer on this day Jan 6, 2023 and Published
          my first article edition on
          <a
            href="https://medium.com/@fataimonsuru2020/custom-counter-hook-with-increment-decrement-reset-and-set-value-function-ba53d9e56a56"
            target="_blank"
            rel="noopener noreferrer"
            >Medium</a
          >.
        </p>
      </div>
      <div class="conterhookblog"></div>
    </div>
    <ul class="blog_grid">
      <li class="grid_element">
        <div class="blog_m medium_second">
          <a
            href="https://medium.com/gitconnected/why-do-most-programmers-face-imposter-syndrome-001a97f433c7"
            target="blank"
            >IMPOST<span class="syndrome">ER SYNDROME</span></a
          >.
          <p>
            Everybody f<span class="imposterword"
              >aces it, yet everyone fears i</span
            >t.
          </p>
        </div>
      </li>
      <!-- TESTING -->
      <li class="grid_element">
        <div class="blog_m medium_second">
          <a
            href="https://medium.com/gitconnected/why-do-most-programmers-face-imposter-syndrome-001a97f433c7"
            target="blank"
            >IMPOST<span class="syndrome">ER SYNDROME</span></a
          >.
          <p>
            Everybody f<span class="imposterword"
              >aces it, yet everyone fears i</span
            >t.
          </p>
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
  font-size: 3rem;
  width: 45rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 3.3rem;
  text-align: center;
  margin: 0 auto 2rem;
}
li {
  list-style-type: none;
  margin: 4rem 0;
}
.blog_m {
  background: linear-gradient(
    rgb(18, 48, 107),
    rgb(18, 48, 107),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(23, 31, 44),
    rgb(23, 31, 44)
  );
  border-radius: 20px;
  border: 0.8px solid rgb(82, 118, 191);
  padding: 1rem;
}
.medium_first {
  display: flex;
  overflow: hidden;
  padding-top: 6rem;
}
.custom_div {
  width: 30rem;
  letter-spacing: 1px;
  align-content: flex-end;
  padding: 0rem 2rem 0;
}
.custom_div h3 {
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 90%;
  margin-bottom: 1rem;
  margin-top: -2rem;
}
.custom_div p {
  font-size: 0.9rem;
  opacity: 70%;
  line-height: 25px;
}
.custom_div a {
  font-size: 0.9rem;
  opacity: 100%;
  font-weight: bold;
}
.conterhookblog {
  background: url("@/assets/counterhook.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25rem;
  height: 14rem;
  margin: -4rem 2rem -2rem;
  align-self: flex-end;
  border-radius: 15px;
}
.blog_grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 25rem;
  column-gap: 1.7rem;
}
.grid_element {
  height: 25rem;
}
.medium_second {
  grid-column: 1/2;
  background: url("@/assets/imposter_syndrome.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: rgb(2, 6, 23);
  padding-left: 2rem;
  align-content: center;
  font-weight: 800;
}
.medium_second h3 {
  width: 15rem;
}
.medium_second a {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}
</style>
