<template>
  <div class="container">
    <ul class="quicklinks">
      <li><router-link to="/home">HOME</router-link></li>
      <li @click="$emit('to-about')">ABOUT</li>
      <li @click="resume">RESUME</li>
      <li @click="$emit('to-Projects')">PROJECTS</li>
    </ul>
    <div class="inner_cont">
      <div class="get_cont">
        <p class="get_intouch">GET IN TOUCH</p>
      </div>
      <div class="horizontal"></div>
      <div class="second_inner_cont">
        <div class="email_cont">
          <i class="fa-solid fa-envelope"></i>
          <label class="label">Email</label>
          <p class="email">fataimonsuru2020@gmail.com</p>
        </div>
        <ul class="accounts">
          <li @click="github">
            <i class="fa-brands fa-github"></i>
          </li>
          <li @click="linkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </li>
          <li @click="twitter">
            <i class="fa-brands fa-square-x-twitter"></i>
          </li>
        </ul>
        <div class="phone_cont">
          <i class="fa-solid fa-phone"></i>
          <label class="label">Phone</label>
          <p class="phone">09063268232</p>
        </div>
      </div>
    </div>
    <p class="copyright">
      All rights reserved <span class="copy">&copy;</span> M. Abiodun Fatai -
      2024.
    </p>
  </div>
  <!-- SECOND FOOTER -->
  <div class="container2">
    <div class="footer_aboutdiv">
      <img id="logo" src="@/assets/mpluslogo.png" alt="" />
      <p>
        I'm Fatai - an enthusiasm frontend developer, lover of nature, football
        and . Thanks for checking out mymy site!
      </p>
      <ul class="accounts">
        <li @click="github">
          <i class="fa-brands fa-github"></i>
        </li>
        <li @click="linkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </li>
        <li @click="twitter">
          <i class="fa-brands fa-square-x-twitter"></i>
        </li>
      </ul>
      <p id="rightreserved">
        <span class="copy">&copy;</span>2024 Abiodun Fatai
      </p>
    </div>
    <div class="general_extra">
      <div class="general_cont">
        <h3>GENERAL</h3>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li @click="$emit('to-about')">About</li>
          <li @click="resume">Resume</li>
          <li @click="$emit('to-Projects')">Projects</li>
          <li @click="$emit('to-blogs')">Blogs</li>
        </ul>
      </div>
      <div class="general_cont">
        <h3>EXTRA</h3>
        <ul>
          <li @click="connections">Connections</li>
          <li @click="resume">Resume</li>
          <li @click="toolbox">Toolbox</li>
          <li @click="$emit('to-skills')">Skills</li>
          <!-- <li>Comments</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    github() {
      window.open("https://github.com/Mplusabiodun", "_blank");
    },
    linkedIn() {
      window.open(
        "https://www.linkedin.com/in/fatai-m-abiodun-844298255/",
        "_blank"
      );
    },
    twitter() {
      window.open("https://x.com/Mplus51610027", "_blank");
    },
    resume() {
      window.open(
        "https://docs.google.com/document/d/1UCOT7mxYsHYn7b3DxeBBm5SJrXSGscuMce1l2DF7IEg/edit#heading=h.y7d3xdxnr44m",
        "_blank"
      );
    },
    connections() {
      this.$router.push("/connections");
    },
    toolbox() {
      this.$router.push("/toolbox");
    },
    // toolbox() {
    //   this.$route.push("/toolbox");
    // },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  background-color: rgb(23, 31, 44);
  padding: 1rem 4rem;
  color: #fff;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
}
li {
  list-style-type: none;
  cursor: pointer;
}
.quicklinks {
  display: flex;
  justify-content: right;
}
.quicklinks li {
  margin-left: 4.8rem;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 1rem;
}
.quicklinks a {
  text-decoration: none;
}
.inner_cont {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  opacity: 65%;
}
.get_cont {
  width: 17rem;
  height: 4rem;
  border-radius: 10px;
  border: 1px solid #fff;
}
.get_intouch {
  text-align: center;
  margin: 1rem 0;
  font-size: 20px;
  letter-spacing: 1px;
}
.horizontal {
  width: 1px;
  height: 9rem;
  background: #fff;
  margin: 0 6rem;
}
.accounts .fa-brands {
  padding: 6px;
  border: 1px solid #fff;
  border-radius: 10px;
}
.email_cont,
.phone_cont {
  text-align: center;
}
.label {
  margin-left: 0.6rem;
  font-size: 11px;
}
.email,
.phone {
  font-size: 12px;
  margin: 0.2rem 0 0rem;
  letter-spacing: 0.9px;
}
.accounts {
  display: flex;
}
.accounts li {
  margin: 1.5rem 3rem 0 0;
}
a {
  color: #fff;
}
.phone_cont {
  margin-top: 1.5rem;
}
.copyright {
  text-align: center;
  letter-spacing: 1px;
  font-size: 11px;
}
.copy {
  font-size: 12px;
}
.container2 {
  display: none;
}

/* iPad */
@media only screen and (max-width: 1024px) {
  .container {
    display: none;
  }
  .container2 {
    display: inline;
    width: 100%;
    background-color: rgb(23, 31, 44);
    color: #fff;
    margin: 0;
  }
  #logo {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1.6px solid #fff;
    margin-bottom: 1.5rem;
  }
  .footer_aboutdiv p {
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 300;
    opacity: 93%;
  }
  #rightreserved {
    margin-top: 2rem;
    letter-spacing: 1px;
  }
  #rightreserved .copy {
    font-size: 1.5rem;
    margin-right: 3px;
  }
  .general_extra {
    display: flex;
    margin-top: 2rem;
  }
  .general_cont,
  .general_cont {
    text-align: left;
    font-size: 1.3rem;
    margin-right: 17rem;
  }
  .general_cont ul,
  .general_cont ul {
    margin: 0;
    padding: 0;
    opacity: 70%;
  }
  .accounts .fa-brands {
    font-size: 1.5rem;
    opacity: 90%;
  }
  .general_cont h3,
  .general_cont h3 {
    font-size: 1.3rem;
    opacity: 90%;
  }
  .general_cont li,
  .general_cont li {
    margin-top: 1rem;
    font-size: 1.1rem;
    opacity: 70%;
  }
  a {
    text-decoration: none;
    color: white;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container2 {
    display: inline;
    width: 100%;
    background-color: rgb(23, 31, 44);
    color: #fff;
    margin: 0;
  }
  #logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  .footer_aboutdiv p {
    font-size: 1rem;
    letter-spacing: 1.5px;
    opacity: 80%;
  }
  .accounts li {
    margin: 1.5rem 1.5rem 0 0;
  }
  #rightreserved {
    font-size: 1rem;
    margin-top: 1.5rem;
    opacity: 50%;
  }
  #rightreserved .copy {
    font-size: 1.2rem;
  }
  .general_cont,
  .general_cont {
    text-align: left;
    font-size: 1.3rem;
    margin-right: 9rem;
  }
  .general_cont h3,
  .general_cont h3 {
    font-size: 1.3rem;
  }
  .general_cont li,
  .general_cont li {
    margin-top: 1rem;
    font-size: 1.1rem;
    opacity: 70%;
  }
}
</style>
