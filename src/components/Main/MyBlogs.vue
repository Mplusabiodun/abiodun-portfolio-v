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
      <li v-for="blog in blogs" :key="blog.blogName" class="grid_element">
        <!-- <div class="medium_second"> -->
        <a :href="blog.blogLink" target="blank">{{ blog.blogName }}</a>
        <p>{{ blog.blogWord }}</p>
        <!-- </div> -->
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
  data() {
    return {
      blogs: [
        {
          blogName: "IMPOSTER SYNDROME",
          blogLink:
            "https://medium.com/gitconnected/why-do-most-programmers-face-imposter-syndrome-001a97f433c7",
          blogWord: "Everybody faces it, yet everyone fears it.",
        },
        {
          blogName: "EAT THE FROG",
          blogLink: "https://unito.io/blog/eat-the-frog/",
          blogWord: "Get Your Most Difficult Work Done First.",
        },
        {
          blogName: "THE POMODORO® TECHNIQUE",
          blogLink:
            "https://www.pomodorotechnique.com/what-is-the-pomodoro-technique.php",
          blogWord:
            "Transforming both work and home life and make us far more productive.",
        },
        {
          blogName: "PRODUCTIVITY HACKS",
          blogLink: "https://www.project.co/productivity-hacks/",
          blogWord: "15 of the Best Productivity Hacks for 2024.",
        },
      ],
    };
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
  padding: 6rem 1rem 1rem;
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
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.7rem;
  padding: 0;
}
.grid_element {
  margin: 2rem 0 0;
  border-radius: 2rem;
  overflow: hidden;
  background: linear-gradient(
    rgb(18, 48, 107),
    rgb(18, 48, 107),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(23, 31, 44),
    rgb(23, 31, 44)
  );
  /* background: url("@/assets/imposter_syndrome.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* color: rgb(2, 6, 23); */
  padding: 0 2rem 1.5rem;
  height: 14rem;
  align-content: flex-end;
}
.grid_element a {
  font-weight: 800;
  font-size: 1.4rem;
  text-decoration: none;
  letter-spacing: 1px;
}
.grid_element p {
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 1rem;
}
/* iPad */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 15rem 3rem 5rem;
  }
  .collection {
    font-size: 2.5rem;
    width: 35rem;
    margin: 0 auto 4rem;
  }
  .blog_m {
    padding: 0.5rem;
  }
  .medium_first {
    padding: 6rem 0rem 0.5rem;
  }
  .custom_div {
    width: 31rem;
    padding: 0rem 0rem 0 2rem;
  }
  .custom_div h3 {
    font-weight: bold;
  }
  .custom_div p {
    line-height: 23px;
  }
  .conterhookblog {
    width: 29rem;
    height: 12rem;
    margin: -4rem 2rem -2rem;
    opacity: 80%;
  }
  .blog_grid {
    margin: 1rem auto 3rem;
  }
  .grid_element p {
    opacity: 70%;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
}
</style>
