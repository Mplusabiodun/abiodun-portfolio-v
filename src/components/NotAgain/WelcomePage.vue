<template>
  <div class="container">
    <div class="container1">
      <p class="welcome">WELCOME &#x1F942;</p>
      <h2 class="myname">M. ABIODUN <span class="fatai">FATAI</span></h2>
      <div class="nickname">
        <hr />
        <p>mplusAbiodun</p>
      </div>
      <p class="frontend">FRONT-END WEB DEVELOPER</p>
      <div class="explore_cont">
        <router-link to="/about">LET'S EXPLORE</router-link>
        <i @click="explore" class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
      <div class="lines">
        <hr class="first_line" />
        <hr class="second_line" />
        <hr class="third_line" />
      </div>
      <div class="footer">
        <p>SELECTED WORKS</p>
        <p>2022 - 2024</p>
      </div>
    </div>
    <div class="container2">
      <div class="tablecontainer">
        <div class="deco"></div>
        <h2>TABLE <span class="of">OF</span> CONTENTS</h2>
      </div>
      <div class="twotwo firsttwo">
        <div class="firstdiv">
          <router-link to="/about">
            <h3>04</h3>
            <p>ABOUT ME</p>
          </router-link>
          <!-- <router-link to="#">ABOUT ME</router-link> -->
        </div>
        <div>
          <router-link to="#">
            <h3>06</h3>
            <p>MY RESUME</p>
          </router-link>
        </div>
      </div>
      <div class="twotwo secondtwo">
        <div class="firstdiv">
          <router-link to="#">
            <h3>08</h3>
            <p>PROJECTS</p>
          </router-link>
        </div>
        <div>
          <router-link to="#">
            <h3>10</h3>
            <p>ABOUT ME</p>
          </router-link>
        </div>
      </div>
      <div class="twotwo thirdtwo">
        <div class="firstdiv">
          <a href="#">
            <h3>12</h3>
            <p>CONTACT ME</p>
          </a>
        </div>
        <div>
          <a href="#">
            <h3>14</h3>
            <p>SOCIAL ACCOUNTS</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <home-page></home-page>
</template>
<script>
import HomePage from "./HomePage2.vue";
export default {
  components: {
    HomePage,
  },
  methods: {
    explore() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 3.5rem 14rem;
  margin: 0 auto;
  background-image: url("@/assets/backg4.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.container1 {
  width: 64%;
  padding: 3rem 0;
  background: black;
  color: #fff;
  border-radius: 10px;
  border: 1.5px solid #fff;
  border-right: none;
}
.welcome {
  /* display: none; */
  color: #daa520;
  font-size: 15px;
  letter-spacing: 0.9px;
  margin: -1rem 0 2.5rem 2rem;
  /* margin-top: -1rem; */
  opacity: 18%;
}
.myname {
  margin: 2rem 0 0 3rem;
  width: 19rem;
  font-size: 45px;
  text-align: right;
  letter-spacing: 1px;
  font-weight: bold;
}
.nickname {
  display: flex;
  margin: -5px 0 0 8.5rem;
}
.nickname hr {
  width: 5rem;
  height: 1px;
  margin: 8px 8px 0 0;
  border: 1px solid #a4790b;
}
.nickname p {
  font-size: 12px;
  letter-spacing: 4.3px;
  opacity: 70%;
  color: #daa520;
}
.frontend {
  margin: 4rem auto 1rem;
  width: 20rem;
  font-size: 35px;
  text-align: center;
  letter-spacing: 1px;
  opacity: 50%;
}
.explore_cont {
  display: flex;
  justify-content: center;
  width: 15rem;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  padding: 1rem;
  margin: 0 auto;
}
.explore_cont a {
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  color: #fff;
}
.fa-solid {
  margin-left: 8px;
}
.lines {
  display: flex;
  margin-top: 12rem;
  opacity: 80%;
}
.first_line {
  width: 8rem;
  height: 1px;
  margin-right: 0.5rem;
  border: 1px solid#fff;
}
.second_line {
  width: 1.5rem;
  height: 1px;
  margin: -0.6rem 0.5rem 0rem 0;
  transform: skewY(-40deg);
  border: 1px solid#fff;
}
.third_line {
  width: 2rem;
  height: 1px;
  border: 1px solid#fff;
}
.footer {
  margin: 3rem 0 0 3rem;
  font-size: 12px;
  line-height: 20px;
  opacity: 70%;
}
.container2 {
  background: #fff;
  border: 2px solid black;
  border-left: none;
  width: 36%;
  height: 48rem;
  border-radius: 10px;
  padding: 0.5rem;
}
.tablecontainer {
  display: flex;
  margin: 9rem 0 0 2rem;
}
.deco {
  width: 1.4rem;
  height: 8px;
  margin: 0.5rem 1rem 0 0;
  background: black;
}
.tablecontainer h2 {
  width: 8rem;
  line-height: 28px;
  letter-spacing: 1px;
}
.of {
  opacity: 30%;
  font-weight: bold;
  border-radius: 3px solid black;
}
.twotwo {
  display: flex;
  margin: 3rem 0 3.5rem 0.8rem;
  /* justify-content: space-between; */
}
.twotwo h3 {
  font-size: 30px;
  opacity: 30%;
}
.twotwo p {
  font-size: 15px;
  letter-spacing: 0.7px;
  font-weight: 500;
}
.twotwo a {
  font-size: 15px;
  letter-spacing: 0.7px;
  text-decoration: none;
  color: black;
  font-weight: 500;
}
.firsttwo,
.thirdtwo {
  margin-left: 3.5rem;
}
.firstdiv {
  margin-right: 2rem;
}
.twotwo div {
  text-align: center;
}
/* .container2 h2 {
  transform: rotate(270deg);
  letter-spacing: 1.7rem;
  width: 50rem;
  font-size: 4rem;
  margin: 14rem 0 0rem -18.5rem;
} */
</style>
