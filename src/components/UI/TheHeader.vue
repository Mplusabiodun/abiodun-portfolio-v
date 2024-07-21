<template>
  <div class="container">
    <div>
      <img @click="toHome" id="logo" src="@/assets/mpluslogo.png" alt="" />
    </div>
    <nav>
      <ul>
        <li @click="scrollToTarget" class="about">ABOUT</li>
        <li @click="scrollToBlog">BLOG</li>
        <li @click="scrollToProjects">PROJECTS</li>
        <li @click="scrollToContact">CONTACT</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    scrollToTarget() {
      this.$emit("scroll-to-target");
    },
    scrollToBlog() {
      this.$emit("scroll-to-blog");
    },
    scrollToProjects() {
      this.$emit("scroll-to-projects");
    },
    scrollToContact() {
      this.$emit("scroll-to-contact");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #ffffff6f;
}
#logo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1.6px solid #fff;
}
nav {
  background: inherit;
  /* background: rgb(4, 24, 80); */
  /* background: rgb(129, 140, 248); */
  border-radius: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-right: 2.5rem;
}
li {
  list-style-type: none;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin: 0 0 0 2.5rem;
  padding: 0.9rem 0;
  opacity: 50%;
}
li:hover {
  opacity: 100%;
  cursor: pointer;
}
.about {
  margin-left: 10px;
}
</style>
