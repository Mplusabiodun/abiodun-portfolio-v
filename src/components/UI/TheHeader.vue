<template>
  <div class="container">
    <div>
      <img @click="toHome" id="logo" src="@/assets/mpluslogo.png" alt="" />
    </div>
    <nav>
      <ul>
        <li @click="$emit('scroll-to-target')" class="about">ABOUT</li>
        <li @click="$emit('scroll-to-blog')">BLOG</li>
        <li @click="$emit('scroll-to-projects')">PROJECTS</li>
        <li @click="$emit('scroll-to-contact')">CONTACT</li>
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
    <i @click="hamburgerDisplay" class="fa-sharp fa-solid fa-xmark"></i>
    <ul>
      <li @click="toHome">Home</li>
      <li @click="toAbout">About</li>
      <li @click="toBlogs">Blogs</li>
      <li @click="toProjects">Projects</li>
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
      this.hamburger = false;
    },
    toAbout() {
      this.$emit("scroll-to-target");
      this.hamburger = !this.hamburger;
    },
    toBlogs() {
      this.$emit("scroll-to-blog");
      this.hamburger = !this.hamburger;
    },
    toProjects() {
      this.$emit("scroll-to-projects");
      this.hamburger = !this.hamburger;
    },
    toContacts() {},
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  color: #fff;
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
    padding: 1.2rem 7rem;
    border-bottom: 1.2px dashed #ffffff6f;
  }
  #logo {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1.6px solid #fff;
  }
  #Hamburger {
    display: flex;
    width: 2rem;
    height: 2rem;
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
    z-index: 50;
  }
  .hamburger {
    position: absolute;
    top: 20%;
    left: 73%;
    transform: translate(-50%, 0%);
    width: 50%;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    border: none;
    padding: 15px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    z-index: 60;
    font-weight: bold;
    border-radius: 8px;
  }
  .fa-xmark {
    font-size: 3rem;
  }
  .hamburger li {
    list-style-type: none;
    font-size: 2.5rem;
    text-align: right;
    padding-right: 2rem;
    margin: 1rem 0 1rem -1rem;
    letter-spacing: 1px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    width: 100%;
    padding: 0.7rem 2.2rem 0.7rem;
    border-bottom: 1px dashed #ffffff6f;
  }
  #logo {
    width: 2.8rem;
    height: 2.8rem;
  }
  #Hamburger {
    width: 1.6rem;
    height: 1.6rem;
  }
  .hamburger {
    top: 15%;
    left: 76%;
    width: 40%;
    padding: 15px 0;
  }
  .fa-xmark {
    font-size: 1.8rem;
  }
  .hamburger li {
    list-style-type: none;
    font-size: 1.6rem;
    margin: 1rem 0 1rem -1rem;
  }
}
</style>
