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
      class="footer"
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
  methods: {
    scrollToAbout() {
      window.scrollTo({
        top: 1560,
        left: 0,
        behavior: "smooth",
      });
    },
    scrollToBlog() {
      // this.$router.push({ name: "home" }).then(() => {
      //   window.scrollTo({ top: 2590, behavior: "smooth" });
      // });
      window.scrollTo({
        top: 2590,
        left: 0,
        behavior: "smooth",
      });
    },
    // scrollToProjects() {
    // this.$router.push({ name: "home", query: { scrollTo: "3440" } });
    // },
    scrollToProjects() {
      window.scrollTo({
        top: 3440,
        left: 0,
        behavior: "smooth",
      });
    },
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
  /* margin-bottom: 4rem; */
}
.container_footer {
  background: rgb(2, 6, 23);
  padding: 1rem 4rem 0;
  bottom: 0;
  right: 0;
  left: 0;
}

/* iPad */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
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
    /* margin: 0; */
  }
}
</style>
