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
      <img
        id="Hamburger"
        src="@\assets\Hamburger.png"
        alt="Hamburger"
        @click="hamburgerDisplay"
      />
    </nav>
  </div>
  <div v-if="hamburger" @click="hamburgerDisplay" class="backdrop"></div>
  <dialog open v-if="hamburger" class="hamburger">
    <ul>
      <li @click="toHome">Home</li>
      <li @click="$emit('scroll-to-target')">About</li>
      <li @click="$emit('scroll-to-blog')">Blogs</li>
      <li @click="$emit('scroll-to-projects')">Projects</li>
      <!-- <li @click="$emit('scroll-to-contact')">Contact</li> -->
    </ul>
  </dialog>
</template>
<script>
export default {
  data() {
    return {
      hamburger: false,
    };
  },
  methods: {
    hamburgerDisplay() {
      this.hamburger = !this.hamburger;
    },
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  color: #fff;
  /* padding: 1rem 7rem 1rem; */
  padding-bottom: 1rem;
  border-bottom: 1px dashed #ffffff6f;
}
#logo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1.6px solid #fff;
}
.container nav {
  background: inherit;
  border-radius: 20px;
}
.container ul {
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-right: 2.5rem;
}
.container li {
  list-style-type: none;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin: 0 0 0 2.5rem;
  padding: 0.9rem 0;
  opacity: 50%;
}
#Hamburger {
  display: none;
  width: 1rem;
  height: 1rem;
}
li:hover {
  opacity: 100%;
  cursor: pointer;
}
li:active {
  color: #fff;
}
.about {
  margin-left: 10px;
}

/* iPad */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 2rem 7rem;
    border-bottom: 1.5px dashed #ffffff6f;
  }
  #logo {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 1.6px solid #fff;
  }
  #Hamburger {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 1rem;
  }
  .container ul {
    display: none;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(1px);
    /* cursor: pointer; */
    z-index: 50;
  }
  .hamburger {
    position: absolute;
    top: 80%;
    left: 60%;
    transform: translate(-50%, 0%);
    width: 50%;
    /* height: 15rem; */
    background-color: inherit;
    /* background-color: #fff; */
    color: #fff;
    /* border: 2px solid #ccc; */
    border: none;
    padding: 15px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    z-index: 60;
    font-weight: bold;
    border-radius: 8px;
  }
  .hamburger li {
    list-style-type: none;
    /* color: #fff; */
    /* display: inline; */
    font-size: 18px;
    margin: 1rem 0 1rem -1rem;
    letter-spacing: 1px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    width: 100%;
    padding: 1.2rem 2rem 1.2rem;
    border-bottom: 1.5px dashed #ffffff6f;
  }
  #logo {
    width: 3.5rem;
    height: 3.5rem;
  }
  #Hamburger {
    width: 2.1rem;
    height: 2.1rem;
  }
  .hamburger {
    top: 75%;
    left: 19%;
    width: 40%;
    padding: 15px 0;
  }
  .hamburger li {
    list-style-type: none;
    font-size: 15px;
    margin: 1rem 0 1rem -1rem;
  }
}
</style>
