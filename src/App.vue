<template>
  <div class="container_header">
    <the-header
      @scroll-to-target="scrollToAbout"
      @scroll-to-blog="scrollToBlog"
      @scroll-to-projects="scrollToProjects"
      @scroll-to-contact="scrollToContact"
      class="header"
    ></the-header>
  </div>
  <router-view></router-view>
  <div class="container_footer">
    <the-footer
      @to-about="scrollToAbout"
      @to-blogs="scrollToBlog"
      @to-Projects="scrollToProjects"
      @to-skills="scrollToSkills"
    ></the-footer>
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
  data() {
    return {
      routeParams: "",
    };
  },
  created() {
    this.routeParams = this.$route.params;
  },
  methods: {
    scrollToAbout() {
      if (this.routeParams === "home") {
        window.scrollTo({
          top: 1560,
          left: 0,
          behavior: "smooth",
        });
      } else {
        this.$router.push("/about");
        console.log(this.routeParams);
      }
    },
    scrollToBlog() {
      if (this.routeParams === "home") {
        window.scrollTo({
          top: 2590,
          left: 0,
          behavior: "smooth",
        });
      } else {
        this.$router.push("/blogs");
        console.log(this.routeParams);
      }
    },
    scrollToProjects() {
      if (this.routeParams === "home") {
        window.scrollTo({
          top: 3440,
          left: 0,
          behavior: "smooth",
        });
      } else {
        this.$router.push("/projects");
        console.log(this.routeParams);
      }
    },
    // scrollToProjects() {
    //   window.scrollTo({
    //     top: 3440,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // },
    scrollToContact() {
      window.scrollTo({
        top: 5390,
        left: 0,
        behavior: "smooth",
      });
    },
    scrollToSkills() {
      window.scrollTo({
        top: 5070,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
  font-family: Manrope, sans-serif;
}
.container_header {
  background: rgb(2, 6, 23);
  padding: 1rem 7rem 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
}
.container_footer {
  background: rgb(2, 7, 25);
  /* background: rgb(2, 6, 23); */
  padding: 1rem 4rem 0;
  bottom: 0;
  right: 0;
  left: 0;
}

/* iPad */
@media only screen and (max-width: 1024px) {
  .container_header {
    padding: 1rem 0rem 0;
  }
  .container_footer {
    padding: 2.5rem 2.5rem 2rem;
    margin: 0;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container_header {
    padding: 0rem 0rem 0;
  }
  .container_footer {
    padding: 2.5rem 1.5rem 2rem;
  }
}
</style>
