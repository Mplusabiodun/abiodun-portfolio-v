<template>
  <div class="container">
    <h3 class="collection">
      Insightful and helpful content you may find interesting
    </h3>
    <div class="blog_m medium_first">
      <div class="custom_div">
        <h3>CUSTOM COUNTER HOOK</h3>
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
        <a :href="blog.blogLink" target="blank">{{ blog.blogName }}</a>
        <p>{{ blog.blogWord }}</p>
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
  width: 45rem;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 3.5rem;
  text-align: center;
  margin: 1rem auto;
  letter-spacing: 1.3px;
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
  margin-top: 5rem;
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
  color: rgb(54, 106, 208);
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0 2rem 1.5rem;
  height: 14rem;
  align-content: flex-end;
}
.grid_element a {
  color: rgb(54, 106, 208);
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
  .container {
    padding: 7.5rem 2.1rem 3rem;
  }
  .collection {
    font-size: 1.8rem;
    width: 22rem;
    line-height: 2.1rem;
    margin: 0 auto 3rem;
  }
  .blog_m {
    padding: 0.5rem;
  }
  .medium_first {
    padding: 6rem 0rem 0.5rem;
  }
  .custom_div {
    width: 100%;
    height: 6rem;
    padding: 0rem 0rem 0 2rem;
  }
  .custom_div h3 {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .custom_div p {
    display: none;
  }
  .conterhookblog {
    display: none;
  }
  .blog_grid {
    margin: 1rem auto 3rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1.7rem;
    padding: 0;
  }
  .grid_element {
    padding: 0 2rem 2rem;
  }
  .grid_element a {
    color: #fff;
    /* color: rgb(54, 106, 208); */

    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 1px;
    justify-content: center;
  }
  .grid_element p {
    display: none;
  }
}
</style>
