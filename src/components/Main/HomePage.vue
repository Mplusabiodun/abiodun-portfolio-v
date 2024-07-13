<template>
  <div class="container">
    <h2 class="myname">
      Hey, I'm Fatai! <br />Welcome, and am glad <br />
      you're here!
    </h2>
    <div class="images">
      <img class="myphotos photo1" src="@/assets/try2.jpg" alt="" />
      <img class="myphotos photo2" src="@/assets/fatai2.jpg" alt="" />
      <img class="myphotos photo3" src="@/assets/new2.jpg" alt="" />
      <img class="myphotos photo4" src="@/assets/westernsun.jpg" alt="" />
    </div>
    <p class="brief_about">
      A National Diploma Distinction holder and currently Civil Engineering
      student at Federal University of Technology Minna, Niger State. A
      FRONT-END DEVELOPER with great enthusiasm for building user centric
      software products. I started this journey to explore my passion for
      writing codes and solving complex software problems. Trust me, it was
      indeed amazing writing my first HTML code ("Hello World") and being able
      to display on the screen.
    </p>
    <div>
      <h4>ABOUT</h4>
      <h2>Here's what sets me apart and makes me unique</h2>
      <div class="unique_list">
        <div><p>learn more about me</p></div>
        <div>
          <h4>Book a call with me</h4>
          <p>I'd love to chat even f there's no agenda!</p>
        </div>
        <div>
          <h3>@Mplus51610027</h3>
          <button>Follow</button>
        </div>
        <div>
          <h4>Connections</h4>
          <p>An ever-evolvng list of people I have met and wish to meet.</p>
        </div>
        <div>
          <h4>Toolbox</h4>
          <p>Checkout my favorite tools and spots around the web.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background: #020617;
  padding: 12rem 9rem;
  color: #fff;
}
.myname {
  font-size: 3.7rem;
  font-weight: 800;
  line-height: 4.1rem;
  text-align: center;
  margin: 0 auto;
  position: relative;
}
.images {
  display: flex;
  margin: 4rem auto;
}
.myphotos {
  width: 13rem;
  height: 22rem;
  border-radius: 1.7rem;
  margin: 0 0.5rem 0 0;
}
.photo1 {
  transform: rotate(-7deg);
  margin-left: 4rem;
}
.photo2 {
  transform: rotate(8deg);
}
.photo3 {
  transform: rotate(-3deg);
}
.photo4 {
  transform: rotate(-11deg);
}
.brief_about {
  font-size: 2rem;
  line-height: 4rem;
  letter-spacing: 1px;
  text-align: center;
  margin: 10rem 0;
  opacity: 50%;
}
</style>
