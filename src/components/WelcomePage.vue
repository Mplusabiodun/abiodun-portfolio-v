<template>
  <div class="container">
    <div class="container1">
      <p class="welcome">Welcome, am glad you're here &#x1F942;</p>
      <h2 class="myname">M. ABIODUN <span class="fatai">FATAI</span></h2>
      <div class="nickname">
        <hr />
        <p>mplusAbiodun</p>
      </div>
      <p class="frontend">FRONT-END WEB DEVELOPER</p>
      <div class="explore_cont">
        <p>LET'S EXPLORE</p>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
      <!-- <h2> -->
      <!-- <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>0</span> -->
      <!-- <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>2</span>
          <span></span>
          <span>-</span>
          <span></span>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>4</span> -->
      <!-- </h2> -->
      <h2>2022 - 2024</h2>
    </div>
  </div>
</template>
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
  width: 70%;
  padding: 3rem 0;
  background: black;
  color: #fff;
  border-radius: 10px;
  border: 1.5px solid #fff;
  border-right: none;
}
.welcome {
  display: none;
  color: #daa520;
  font-size: 12px;
  letter-spacing: 0.9px;
  margin-left: 4rem;
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
.explore_cont p {
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
}
.fa-solid {
  margin-left: 5px;
}
.lines {
  display: flex;
  margin-top: 12rem;
  opacity: 80%;
}
.first_line {
  width: 8rem;
  height: 1px;
  margin-right: 0.7rem;
  border: 1px solid#fff;
}
.second_line {
  width: 2rem;
  height: 1px;
  margin: -0.7rem 0.5rem 0rem 0;
  transform: skewY(-40deg);
  border: 1px solid#fff;
}
.third_line {
  width: 3rem;
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
  width: 30%;
  height: 48rem;
  border-radius: 10px;
  padding: 1rem;
}
.container2 h2 {
  display: block;
  transform: skewY(-50deg);
  margin-top: 0;
}
</style>
