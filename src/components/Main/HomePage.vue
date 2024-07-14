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
    <section class="about_section">
      <h4 class="about">ABOUT</h4>
      <h2 class="heres">Here's what sets me apart and makes me unique</h2>
      <div class="unique_list">
        <div class="aboutme learnmore">
          <p>learn more about me</p>
        </div>
        <div class="aboutme bookacall">
          <h4>Book a call with me</h4>
          <p>I'd love to chat even f there's no agenda!</p>
        </div>
        <div class="aboutme xaccount">
          <h3>@Mplus51610027</h3>
          <button>Follow</button>
        </div>
        <div class="aboutme toolbox">
          <h4>Toolbox</h4>
          <p>Checkout my favorite tools and spots around the web.</p>
          <!-- <ul>
            <li>MY LOGO AT THE CENTER</li>
            <li>vsCode logo</li>
            <li>FreeCodeCamp logo</li>
            <li>Netlify logo</li>
            <li>MDN logo</li>
            <li>Chatgpt logo</li>
            <li>Youtube logo</li>
          </ul> -->
        </div>
        <div class="aboutme connections">
          <h4>Connections</h4>
          <p>An ever-evolvng list of people I have met and wish to meet.</p>
          <!-- <ul>
            <li>Braydon coyer pics</li>
            <li>damola badmus pics</li>
            <li>Jaystar bee pics</li>
            <li>Max schumuller pics</li>
            <li>Colt Steele pics</li>
            <li>Adeyemi Ruqoyah pics</li>
            <li>Adeyemi Yusuff pics</li>
          </ul> -->
        </div>
      </div>
      <button class="learn_more">Learn more</button>
    </section>
    <section class="blog_section">
      <h4 class="blog">BLOG</h4>
      <h2 class="blog_like">
        I like sharing my experiments and knowledge with others
      </h2>
      <div class="blog_grid">
        <div class="blog_m medium_first"></div>
        <div class="blog_m medium_second"></div>
        <div class="blog_m medium_third"></div>
      </div>
      <button class="more_articles">More articles</button>
    </section>
    <section class="project_section">
      <h4 class="project">PROJECTS</h4>
      <h2 class="project_note">
        I take pride in providing the best in my career path and phases I find
        myself
      </h2>
      <ul class="project_ul">
        <li class="project_li">
          <div class="project_grid">
            <div class="myproject p_first"></div>
            <div class="myproject p_second"></div>
            <div class="myproject p_third"></div>
          </div>
        </li>
      </ul>
      <button class="more_projects">Love to see more?</button>
    </section>
    <favorite-quotes></favorite-quotes>
  </div>
</template>
<script>
import FavoriteQuotes from "../UI/FavoriteQuotes.vue";
export default {
  components: {
    FavoriteQuotes,
  },
};
</script>
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
  margin-top: 10rem;
  opacity: 50%;
}
.about_section,
.blog_section,
.project_section {
  margin: 12rem 0 0rem;
}
.about,
.blog,
.project {
  text-align: center;
  letter-spacing: 0.9px;
  color: rgb(82, 118, 191);
}
.heres,
.blog_like,
.project_note {
  width: 28rem;
  text-align: center;
  font-size: 2rem;
  margin: 0.8rem auto 3rem;
  line-height: 2.5rem;
  font-weight: 300;
  letter-spacing: 1px;
}
.blog_like,
.project_note {
  width: 33rem;
}
.unique_list {
  display: grid;
  height: 38rem;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 1.7rem;
}
.aboutme {
  background: rgb(25, 60, 129);
  border-radius: 20px;
  border: 0.8px solid rgb(82, 118, 191);
  padding: 1rem;
}
.learnmore {
  grid-row: 1/3;
}
.bookacall {
  grid-column: 2/5;
}
/* .xaccount {
} */
.toolbox {
  grid-column: 3/5;
  grid-row: 2/4;
}
.connections {
  grid-column: 1/3;
}
.learn_more,
.more_projects {
  display: flex;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  margin: 3rem auto;
  color: #fff;
  background: inherit;
  border: 1px solid #ffffff5b;
  border-radius: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.8px;
}
.learn_more:hover,
.more_projects:hover {
  color: #020617;
  background: #ffffffd5;
}
.more_articles {
  display: flex;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  margin: 2rem auto;
  color: #020617;
  background: #ffffffd5;
  border-radius: 1.3rem;
  font-weight: 600;
}
.more_articles:hover {
  color: #fff;
  background: inherit;
  border: 1px solid #ffffff5b;
}
.blog_grid {
  display: grid;
  height: 25rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.7rem;
}
.blog_m {
  background: rgb(25, 60, 129);
  border-radius: 20px;
  border: 0.8px solid rgb(82, 118, 191);
  padding: 1rem;
}
.medium_first {
  grid-column: 1/3;
}
.medium_second {
  grid-column: 1/2;
}
.medium_third {
  grid-column: 2/3;
}
.project_li {
  list-style-type: none;
  /* margin: 0 auto; */
}
.project_grid {
  display: grid;
  /* justify-content: center; */
  margin-left: 3rem;
  text-align: center;
  height: 20rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.7rem;
}
.myproject {
  background: rgb(25, 60, 129);
  border-radius: 20px;
  border: 0.8px solid rgb(82, 118, 191);
  padding: 1rem;
}
.p_first {
  grid-column: 1/3;
  grid-row: 1/3;
}
.p_second {
  grid-column: 3/5;
  width: 20rem;
  justify-self: center;
  margin-left: -6.5rem;
}
.p_third {
  grid-column: 3/5;
  width: 14rem;
  justify-self: center;
  margin-left: -6rem;
}
.more_projects {
  display: flex;
  justify-content: center;
  padding: 0.7rem 1.2rem;
  margin: 3rem auto;
  color: #fff;
  background: inherit;
  border: 1px solid #ffffff5b;
  border-radius: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.8px;
}
.more_projects:hover {
  color: #020617;
  background: #ffffffd5;
}
</style>
