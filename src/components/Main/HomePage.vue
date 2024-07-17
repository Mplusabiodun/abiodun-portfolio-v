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
          <p>Learn more about me</p>
        </div>
        <div class="aboutme bookacall">
          <div>
            <h4 class="acall">Book a call with me</h4>
            <p class="love_to">I'd love to chat even if there's no agenda!</p>
          </div>
          <div class="calendar"></div>
        </div>
        <div class="aboutme xaccount">
          <img
            id="xaccount_img"
            src="@/assets/fatai2.jpg"
            alt="twitter_profile_pics"
          />
          <h3>@Mplus51610027</h3>
          <button>Follow</button>
        </div>
        <div class="aboutme toolbox">
          <h4 class="toolboxheading">Toolbox</h4>
          <p class="toolbox_checkout">
            Checkout some of my favorite tools and spots around the web.
          </p>
          <div class="circle1">
            <img id="mdnlogo" src="@/assets/mpluslogo.png" alt="mdnlogo" />
            <img id="vsclogo" src="@/assets/mpluslogo.png" alt="vsclogo" />
            <img id="netlify" src="@/assets/mpluslogo.png" alt="netlify" />
            <div class="circle2">
              <img id="codecamp" src="@/assets/mpluslogo.png" alt="codecamp" />
              <img
                id="youtubelogo"
                src="@/assets/mpluslogo.png"
                alt="youtubelogo"
              />
              <img
                id="chatgptlogo"
                src="@/assets/mpluslogo.png"
                alt="chatgptlogo"
              />
              <div class="circle3">
                <img
                  id="mpluslogo"
                  src="@/assets/mpluslogo.png"
                  alt="mpluslogo"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="aboutme connections">
          <h4 class="connection_head">Connections</h4>
          <p class="ever_evolvig">
            An ever-evolvng list of people I have met and wish to meet.
          </p>
          <div class="tomeet">
            <img
              id="adeyemi_ruqoyah"
              src="@/assets/mpluslogo.png"
              alt="damolabadmus"
            />
            <img
              id="max_schumuller"
              src="@/assets/mpluslogo.png"
              alt="damolabadmus"
            />
            <img
              id="colt_steele"
              src="@/assets/mpluslogo.png"
              alt="damolabadmus"
            />
            <img
              id="damola_badmus"
              src="@/assets/mpluslogo.png"
              alt="damolabadmus"
            />
            <img id="jaystar" src="@/assets/mpluslogo.png" alt="jaystar" />

            <img
              id="adeyemiyusuff"
              src="@/assets/mpluslogo.png"
              alt="damolabadmus"
            />
            <img
              id="braydon_coyer"
              src="@/assets/mpluslogo.png"
              alt="damolabadmus"
            />
          </div>
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
        I take pride in providing the best, in my career path and phases I find
        myself.
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
/* @import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"); */
.container {
  background: #020617;
  padding: 12rem 9rem;
  color: #fff;
}
.myname {
  /* font-family: Lora, "Arial Narrow Bold", sans-serif; */
  font-size: 3.7rem;
  font-weight: 750;
  line-height: 4.3rem;
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
  width: 34rem;
}
.unique_list {
  display: grid;
  height: 36rem;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 1.7rem;
}
.aboutme {
  background: linear-gradient(
    rgb(18, 48, 107),
    rgb(18, 48, 107),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(23, 31, 44),
    rgb(23, 31, 44)
  );
  /* background: rgb(25, 60, 129); */
  /* background: rgb(14, 35, 78); */
  border-radius: 20px;
  border: 0.8px solid rgb(82, 118, 191);
  padding: 1rem;
}
/* LEARNMORE START */
.learnmore {
  grid-row: 1/3;
  background: url("@/assets/messi.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-content: flex-end;
  cursor: pointer;
}
.learnmore p {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 1px;
  width: 8rem;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
}
/* LEARNMORE STOP */

/* BOOKACALL START */
.bookacall {
  grid-column: 2/5;
  display: flex;
  overflow: hidden;
}
.acall {
  font-size: 1.2rem;
  letter-spacing: 1px;
  opacity: 90%;
}
.love_to {
  width: 14rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
  opacity: 50%;
}
.calendar {
  background: url("@/assets/bookacall.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 23rem;
  height: 5rem;
  margin: 1rem 0 -2rem 4rem;
  border-radius: 5px;
}
/* BOOKACALL STOP */

/* XACCOUNT START */
.xaccount {
  justify-content: center;
  justify-items: center;
  padding-top: 1.5rem;
  text-align: center;
  cursor: pointer;
}
.xaccount:hover {
  opacity: 90%;
}
#xaccount_img {
  width: 4rem;
  height: 4.2rem;
  border-radius: 50%;
}
.xaccount h3 {
  letter-spacing: 1px;
  margin: 0.6rem 0;
}
.xaccount button {
  margin-bottom: -1rem;
  padding: 0.8rem 1.4rem;
  color: #020617;
  background: #fff;
  border: 1px solid #ffffff5b;
  border-radius: 1.3rem;
  font-weight: 600;
}
/* XACCOUNT STOP */

/* TOOLBOX START*/
.toolbox {
  grid-column: 3/5;
  grid-row: 2/4;
  text-align: center;
  padding: 1rem 0 0 0;
}
.toolboxheading {
  font-size: 1.2rem;
  letter-spacing: 1px;
}
.toolbox_checkout {
  width: 18rem;
  font-size: 0.9rem;
  letter-spacing: 0.8px;
  text-align: center;
  margin: 5px auto;
  opacity: 50%;
}
.circle1 {
  background: inherit;
  border: 0.8px solid rgb(82, 118, 191);
  width: 19rem;
  height: 19rem;
  margin: 2rem auto 0rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
}
#mdnlogo,
#vsclogo,
#netlify,
#codecamp,
#youtubelogo,
#chatgptlogo {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
#mdnlogo {
  margin: -0.3rem 0rem 0 5rem;
}
#vsclogo {
  margin: 10rem 0rem 0 -0.3rem;
}
#netlify {
  margin: -6rem 0rem 0 17.8rem;
}
.circle2 {
  background: inherit;
  border: 0.8px solid rgb(82, 118, 191);
  width: 13rem;
  height: 13rem;
  margin: -6.8rem auto 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
}
#codecamp {
  margin: 3rem 0rem 0 -0.5rem;
}
#youtubelogo {
  margin: -4.5rem 0rem 0 9rem;
}
#chatgptlogo {
  margin: 9rem 0rem 0 7rem;
}
.circle3 {
  background: inherit;
  border: 0.8px solid rgb(82, 118, 191);
  width: 7rem;
  height: 7rem;
  margin: -10.5rem auto 0;
  border-radius: 50%;
}
#mpluslogo {
  width: 3.3rem;
  height: 3.5rem;
  border-radius: 50%;
  margin: 1.6rem auto;
}
/* TOOLBOX STOP */

/* CONNECTIONS START */
.connections {
  grid-column: 1/3;
}
.connection_head {
  font-size: 1.2rem;
  letter-spacing: 1px;
}
.ever_evolvig {
  font-size: 0.9rem;
  letter-spacing: 0.8px;
  margin: 0px 0 7px;
  opacity: 50%;
}
.tomeet {
  display: flex;
  flex-direction: column;
  /* margin: 0; */
}
#adeyemi_ruqoyah,
#max_schumuller,
#colt_steele,
#damola_badmus,
#jaystar,
#adeyemiyusuff,
#braydon_coyer {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
}
#adeyemi_ruqoyah {
  margin: 0 0 0 1rem;
}
#max_schumuller {
  margin: -1rem 0 0 6rem;
}
#colt_steele {
  margin: -2.5rem 0 0 13rem;
}
#damola_badmus {
  width: 2.6rem;
  height: 2.6rem;
  margin: 0rem 0 0 9rem;
}
#jaystar {
  width: 2.6rem;
  height: 2.6rem;
  margin: -2.5rem 0 0 16rem;
}
#adeyemiyusuff {
  margin: -3.6rem 0 0 20.5rem;
}
#braydon_coyer {
  margin: -2.6rem 0 -4rem 25rem;
}
/* CONNECTIONS STOP */
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
}
.project_grid {
  display: grid;
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
