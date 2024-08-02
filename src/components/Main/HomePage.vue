<template>
  <div class="container">
    <h2 class="myname">
      Hey, I'm Fatai! <br />Welcome, and am glad <br />
      you're here!
    </h2>
    <div class="images">
      <img
        class="myphotos photo1"
        src="@/assets/mypics/try2.jpg"
        alt="fataipics1"
      />
      <img
        class="myphotos photo2"
        src="@/assets/mypics/fatai2.jpg"
        alt="fataipics2"
      />
      <img
        class="myphotos photo3"
        src="@/assets/mypics/new2.jpg"
        alt="fataipics3"
      />
      <img
        class="myphotos photo4"
        src="@/assets/mypics/westernsun.jpg"
        alt="fatai@westernsun"
      />
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
    <!-- class="target-component" -->
    <section id="target" class="about_section target-component">
      <h4 class="about">ABOUT</h4>
      <h2 class="heres">Here's what sets me apart and makes me unique</h2>
      <div class="unique_list">
        <div @click="about" class="aboutme learnmore">
          <p>Learn more about me</p>
        </div>
        <div @click="bookacall" class="aboutme bookacall">
          <div>
            <h4 class="acall">Book a call with me</h4>
            <p class="love_to">I'd love to chat even if there's no agenda!</p>
          </div>
          <div class="calendar"></div>
        </div>
        <div @click="twitter" class="aboutme xaccount">
          <img
            id="xaccount_img"
            src="@/assets/mypics/fatai2.jpg"
            alt="twitter_profile_pics"
          />
          <h3>@Mplus51610027</h3>
          <button>Follow</button>
        </div>
        <div @click="toolbox" class="aboutme toolbox">
          <h4 class="toolboxheading">Toolbox</h4>
          <p class="toolbox_checkout">
            Checkout some of my favorite tools and spots around the web.
          </p>
          <div class="circle1">
            <img
              id="mdnlogo"
              src="@/assets/toolboxpics/mdn.png"
              alt="mdnlogo"
            />
            <img
              id="vsclogo"
              src="@/assets/toolboxpics/vscode.png"
              alt="vsclogo"
            />
            <img
              id="netlify"
              src="@/assets/toolboxpics/netlify.png"
              alt="netlify"
            />
            <div class="circle2">
              <img
                id="codecamp"
                src="@/assets/toolboxpics/codecamp.png"
                alt="codecamp"
              />
              <img
                id="youtubelogo"
                src="@/assets/toolboxpics/youtube.png"
                alt="youtubelogo"
              />
              <img
                id="chatgptlogo"
                src="@/assets/toolboxpics/github.png"
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
        <div @click="connections" class="aboutme connections">
          <h4 class="connection_head">Connections</h4>
          <p class="ever_evolvig">
            An ever-evolvng list of people I have met and wish to meet.
          </p>
          <div class="tomeet">
            <img
              id="adeyemi_ruqoyah"
              src="@/assets/connections/ruqoyah.jpg"
              alt="ruqoyah"
            />
            <img
              id="max_schumuller"
              src="@/assets/connections/max.png"
              alt="max_schumuller"
            />
            <img
              id="colt_steele"
              src="@/assets/connections/colt_steele.png"
              alt="colt_steele"
            />
            <img
              id="damola_badmus"
              src="@/assets/connections/damolabadmus.png"
              alt="damolabadmus"
            />
            <img
              id="jaystar"
              src="@/assets/connections/jaystar.png"
              alt="jaystar"
            />

            <img
              id="adeyemiyusuff"
              src="@/assets/connections/yusuff.jpg"
              alt="yusuff"
            />
            <img
              id="braydon_coyer"
              src="@/assets/connections/braydon.png"
              alt="braydon"
            />
          </div>
        </div>
      </div>
      <button @click="about" class="learn_more">Learn more</button>
    </section>
    <section class="blog_section">
      <h4 class="blog">BLOG</h4>
      <h2 class="blog_like">
        I like sharing my experiments and knowledge with others
      </h2>
      <div class="blog_grid">
        <div class="blog_m medium_first">
          <div class="custom_div">
            <h3>MY CUSTOM COUNTER HOOK</h3>
            <p>
              Started being a technical writer on this day Jan 6, 2023 and
              Published my first article edition on
              <a
                href="https://medium.com/@fataimonsuru2020/custom-counter-hook-with-increment-decrement-reset-and-set-value-function-ba53d9e56a56"
                target="_blank"
                rel="noopener noreferrer"
                >Medium</a
              >.
            </p>
          </div>
          <div class="conterhookblog"></div>
        </div>
        <div class="blog_m medium_second">
          <a
            href="https://medium.com/gitconnected/why-do-most-programmers-face-imposter-syndrome-001a97f433c7"
            target="blank"
            >IMPOST<span class="syndrome">ER SYNDROME</span></a
          >.
          <p>
            Everybody f<span class="imposterword"
              >aces it, yet everyone fears i</span
            >t.
          </p>
        </div>
        <div class="blog_m medium_third">
          <h3>
            <a
              href="https://www.geeksforgeeks.org/networking-for-programmers/"
              target="blank"
              >NETWORKING</a
            >
          </h3>
          <p>Connecting, collaborating and Succeeding.</p>
        </div>
      </div>
      <button @click="moreBlogs" class="more_articles">More articles</button>
    </section>

    <!-- Project -->
    <section class="project_section">
      <h4 class="project">PROJECTS</h4>
      <h2 class="project_note">
        I take pride in providing the best, in my career path and phases I find
        myself.
      </h2>
      <ul v-for="project in projects" :key="project.name" class="project_ul">
        <li class="project_li">
          <div class="projects_box">
            <div class="myproject">
              <img
                id="project_image"
                :src="project.image"
                alt="laptop_screen"
              />
            </div>
            <div class="project_details">
              <h3 class="project_Title">{{ project.name }}</h3>
              <p class="about_project">
                {{ project.description }}
              </p>
              <a :href="project.livelink" target="blank">{{
                project.linkName
              }}</a>
            </div>
          </div>
        </li>
      </ul>
      <button @click="moreProjects" class="more_projects">
        Love to see more?
      </button>
    </section>
    <favorite-quotes></favorite-quotes>
  </div>
</template>
<script>
import FavoriteQuotes from "../UI/FavoriteQuotes.vue";
import audiophile from "@/assets/projects/audiophile.png";
import recipePage from "@/assets/projects/recipe.png";
import portfolio from "@/assets/projects/my_portfolio.png";

export default {
  components: {
    FavoriteQuotes,
  },
  data() {
    return {
      projects: [
        {
          image: audiophile,
          name: "AUDIOPHILE",
          description:
            "An online premier store for high quality headphones, earphones and speakers. An all in one stop to fulfillyour audio needs. For music lovers and sound specialists devoted to help them get their audio needs.",
          livelink: "https://gadgets-ecommerce-vue3.netlify.app/",
          linkName: "audiophile-ecommerce",
        },
        {
          image: recipePage,
          name: "RECIPE PAGE",
          description:
            "My solution to the Recipe page challenge on Frontend Mentor. An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese.",
          livelink: "https://a-recipe-page.netlify.app/",
          linkName: "a-recipe-page",
        },
        {
          image: portfolio,
          name: "ABIODUN PORTFOLIO",
          description:
            "My portfolio is a reflection of my dedication, passion for giving a friendly user interface,  describing my skills, creativity, and commitment to excellence. Each project showcases my ability to adapt and excel in different environments and challenges.",
          livelink: "https://a-recipe-page.netlify.app/",
          linkName: "abiodun-portfolio-v",
        },
      ],
      opacity: 0,
    };
  },
  methods: {
    bookacall() {
      const email = "fataimonsuru2020@gmail.com";
      const subject = "Call or chat";
      const body =
        "Dear Fatai, i'll like to have a call or chat with you, thanks";
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    },
    twitter() {
      window.open("https://twitter.com/Mplus51610027", "_blank");
    },
    moreProjects() {
      this.$router.push("/projects");
    },
    moreBlogs() {
      this.$router.push("/blogs");
    },
    toolbox() {
      this.$router.push("/toolbox");
    },
    connections() {
      this.$router.push("/connections");
    },
    about() {
      this.$router.push("/about");
    },
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
  font-weight: 750;
  line-height: 4.3rem;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 1px;
  /* position: relative; */
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
  border: 1.5px solid #ffffffd5;
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
  transition: opacity 0.5s ease-out;
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
  opacity: 70%;
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
.bookacall:hover {
  opacity: 90%;
  cursor: pointer;
}
.acall {
  font-size: 1.2rem;
  letter-spacing: 1px;
  opacity: 80%;
}
.love_to {
  width: 14rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
  opacity: 45%;
}
.calendar {
  background: url("@/assets/bookacall.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25rem;
  height: 6rem;
  margin: 1rem 0 -2rem 4rem;
  border-radius: 5px;
  opacity: 60%;
}
/* BOOKACALL STOP */

/* XACCOUNT START */
.xaccount {
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
  opacity: 80%;
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
.toolbox:hover {
  opacity: 90%;
  cursor: pointer;
}
.toolboxheading {
  font-size: 1.2rem;
  letter-spacing: 1px;
  opacity: 80%;
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
  opacity: 80%;
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
.connections:hover {
  cursor: pointer;
}
.connection_head {
  font-size: 1.2rem;
  letter-spacing: 1px;
  opacity: 80%;
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
  background: linear-gradient(
    rgb(18, 48, 107),
    rgb(18, 48, 107),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(29, 39, 56),
    rgb(23, 31, 44),
    rgb(23, 31, 44)
  );
  border-radius: 20px;
  border: 0.8px solid rgb(82, 118, 191);
  padding: 1rem;
}
.medium_first {
  grid-column: 1/3;
  display: flex;
  overflow: hidden;
}
.custom_div {
  width: 30rem;
  letter-spacing: 1px;
  align-content: flex-end;
  padding: 0rem 2rem 0;
}
.custom_div h3 {
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 90%;
  margin-bottom: 1rem;
  margin-top: -2rem;
}
.custom_div p {
  font-size: 0.9rem;
  opacity: 70%;
  line-height: 25px;
}
.custom_div a {
  font-size: 0.9rem;
  opacity: 100%;
  font-weight: bold;
}
.conterhookblog {
  background: url("@/assets/projects/counterhook.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25rem;
  height: 14rem;
  margin: -4rem 2rem -2rem;
  align-self: flex-end;
  border-radius: 15px;
}
.medium_second {
  grid-column: 1/2;
  background: url("@/assets/imposter_syndrome.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: rgb(2, 6, 23);
  padding-left: 2rem;
  align-content: center;
  font-weight: 800;
}
.medium_second h3 {
  width: 15rem;
}
.medium_second a {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}
.syndrome {
  color: #fff;
}
.imposterword {
  color: #fff;
}
.medium_third {
  grid-column: 2/3;
  background: url("@/assets/networking.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-weight: 800;
}
.medium_third a {
  color: #fff;
  font-weight: 900;
  text-decoration: none;
}
.medium_third p {
  opacity: 60%;
  font-weight: 900;
  text-decoration: none;
}

/* PROJECT START */
.project_ul {
  margin-bottom: 3rem;
}
.project_li {
  list-style-type: none;
  margin: 5rem 0 0 1rem;
}
.projects_box {
  display: flex;
  margin-top: 0.6rem;
  text-align: left;
}
.myproject {
  width: 26rem;
  height: 18rem;
  overflow: hidden;
  border: 2px solid rgb(82, 118, 191);
  border-radius: 20px;
  margin: 0 4rem 0 0;
}
#project_image {
  width: 26.5rem;
  height: 18rem;
}
.project_details {
  margin: 1.7rem 0 0 0;
}
.project_Title {
  width: 26rem;
  font-size: 2.1rem;
  line-height: 40px;
  letter-spacing: 1px;
}
.about_project {
  width: 27rem;
  margin: 1.5rem 0 1rem 0rem;
  opacity: 60%;
  font-size: 0.9rem;
  line-height: 25px;
  letter-spacing: 1px;
}
.project_li a {
  font-size: 1rem;
  letter-spacing: 1px;
  text-decoration: none;
}
/* .project_section a  */
.more_projects {
  display: flex;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  font-size: 0.8rem;
  text-decoration: none;
  margin: 0 auto;
  letter-spacing: 0.8px;
  color: #fff;
  background: inherit;
  border: 1px solid #ffffff5b;
  border-radius: 1.3rem;
  font-weight: 600;
}
.more_projects:hover {
  color: #020617;
  background: #ffffffd5;
}

/* iPad */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    padding: 17rem 3rem 3rem;
  }
  .myname {
    font-size: 2.8rem;
    width: 39rem;
    letter-spacing: 1.5px;
    margin: 0 auto;
  }
  .images {
    margin: 8rem auto;
  }
  .myphotos {
    width: 10rem;
    height: 18rem;
    border-radius: 1rem;
  }
  .photo1 {
    margin-left: 0rem;
  }
  .about,
  .blog,
  .project {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
  .heres,
  .blog_like,
  .project_note {
    width: 26rem;
    font-size: 1.8rem;
  }
  .blog_like,
  .project_note {
    width: 32rem;
  }
  .unique_list {
    gap: 1rem;
    margin: 0 -1rem;
  }
  /* LEARNMORE START */
  .learnmore p {
    font-size: 1.2rem;
  }
  /* LEARNMORE STOP */
  /* BOOKACALL START */
  .acall {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .love_to {
    font-size: 0.8rem;
  }
  .calendar {
    width: 26rem;
    margin: 1rem 0 -4rem 1rem;
    border-radius: 7px;
  }
  /* BOOKACALL STOP */
  /* XACCOUNT START */
  .xaccount h3 {
    font-size: 1rem;
  }
  .xaccount button {
    padding: 0.6rem 1rem;
  }
  /* XACCOUNT STOP */
  /* TOOLBOX START*/
  .toolboxheading {
    font-size: 1rem;
  }
  .circle1 {
    width: 17rem;
    height: 17rem;
  }
  #mdnlogo,
  #vsclogo,
  #netlify,
  #codecamp,
  #youtubelogo,
  #chatgptlogo {
    width: 1.6rem;
    height: 1.6rem;
  }
  #mdnlogo {
    margin: -0.3rem 0rem 0 5rem;
  }
  #vsclogo {
    margin: 10rem 0rem 0;
  }
  #netlify {
    margin: -6rem 0rem 0 16rem;
  }
  .circle2 {
    width: 11.5rem;
    height: 11.5rem;
    margin: -5.8rem auto 0;
  }
  #codecamp {
    margin: 3rem 0rem 0 -0.3rem;
  }
  #youtubelogo {
    margin: -4.5rem 0rem 0 7.9rem;
  }
  #chatgptlogo {
    margin: 8.5rem 0rem 0 7rem;
  }
  .circle3 {
    width: 5.5rem;
    height: 5.5rem;
    margin: -8.8rem auto 0;
  }
  #mpluslogo {
    width: 2rem;
    height: 2rem;
  }
  /* TOOLBOX STOP */

  /* CONNECTIONS START */
  .connection_head {
    font-size: 1rem;
  }
  .ever_evolvig {
    font-size: 0.8rem;
    margin: 3px 0 7px;
  }
  #adeyemi_ruqoyah,
  #max_schumuller,
  #colt_steele,
  #damola_badmus,
  #jaystar,
  #adeyemiyusuff,
  #braydon_coyer {
    width: 1.5rem;
    height: 1.5rem;
  }
  #adeyemi_ruqoyah {
    margin: 0 0 0 0rem;
  }
  #max_schumuller {
    margin: -0.5rem 0 0 4rem;
  }
  #colt_steele {
    margin: -2.5rem 0 0 10rem;
  }
  #damola_badmus {
    width: 2.3rem;
    height: 2.3rem;
    margin: 0rem 0 0 7rem;
  }
  #jaystar {
    width: 2.3rem;
    height: 2.3rem;
    margin: -2.4rem 0 0 12.5rem;
  }
  #adeyemiyusuff {
    margin: -3rem 0 0 15.5rem;
  }
  #braydon_coyer {
    margin: -2.6rem 0 -4rem 19rem;
  }
  /* CONNECTIONS STOP */
  .blog_grid {
    gap: 1rem;
  }
  .blog_m {
    padding: 0.7rem;
  }
  /* .medium_first {
    grid-column: 1/3;
    display: flex;
    overflow: hidden;
  } */
  .custom_div {
    /* width: 30rem;
    letter-spacing: 1px;
    align-content: flex-end; */
    padding: 0rem 1rem 0;
  }
  .custom_div h3 {
    font-size: 1.3rem;
    margin: -4rem 0 0.8rem;
  }
  .custom_div p {
    line-height: 23px;
  }
  .conterhookblog {
    width: 27rem;
    height: 10rem;
    margin: -6rem 1rem -2rem;
  }
  .medium_second {
    padding-left: 1rem;
    font-weight: bold;
  }
  .medium_second h3 {
    color: rgb(2, 6, 23);
  }
  .syndrome {
    color: rgb(2, 6, 23);
  }
  .imposterword {
    color: rgb(2, 6, 23);
  }
  /* PROJECT START */
  .project_ul {
    margin-bottom: 3rem;
  }
  .project_li {
    margin: 4rem -1rem 0 -3rem;
  }
  .myproject {
    width: 24rem;
    margin: 0 1rem 0 0;
  }
  #project_image {
    width: 24.5rem;
  }
  .project_details {
    margin: 1.5rem -6rem 0 0rem;
  }
  .project_Title {
    width: 19rem;
    font-size: 1.8rem;
    line-height: 30px;
  }
  .about_project {
    width: 19rem;
    opacity: 70%;
    margin: 1rem 0 0.7rem 0rem;
    line-height: 22px;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  /* .container_footer {
    padding: 3rem 2rem;
  } */
}
</style>
