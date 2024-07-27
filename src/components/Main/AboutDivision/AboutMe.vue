<template>
  <section class="container">
    <h2 class="greetngs">
      <span class="good">Good morning!</span>I'm Fatai, an enthusiasm frontend
      developer.
    </h2>
    <!-- container 2 -->
    <div class="container2">
      <div class="left_cont">
        <p class="forresponsive heythere">
          Hey there! Let me quickly tell you about myself and what I enjoy
          doing.
        </p>
        <img class="fatai" src="@/assets/fataisnap.jpg" alt="Fatai" />
        <h3 class="started">
          I Started my creativity journey years back and I can proudly say I
          learned from the best, always on the lookout for my next adventure.
        </h3>
        <p>
          In a world full of possibilities, I believe in the magic of kindness
          and strive to bring a sprinkle of joy to everything I do and everyone
          around.
        </p>
        <p>
          A student at Altschool Africa, Creating designs that inspire positive
          and building applications that made life more easier have been my
          ultimate goal.
        </p>
        <p>
          A fans of nature and I have always love to spend my leisure time
          enjoying my peaceful thoughts without distraction. I'm always thrilled
          to meet fellow dreamers, explorers, the journey ahead and stories
          waiting to be told. Feel free to reach out, and let's create our own
          fairytale!.
        </p>
      </div>
      <!-- END OF LEFT SIDE -->

      <!-- START OF RIGHT SIDE -->
      <div class="right_cont">
        <p class="heythere">
          Hey there! Let me quickly tell you about myself and what I enjoy
          doing.
        </p>
        <img class="fatai" src="@/assets/fatai2.jpg" alt="Fatai" />
        <h3 class="started">The leap over to web development.</h3>
        <p>
          I decided to explore web development before too long. Given my
          inclination towards visual expression and design, I naturally
          gravitated towards frontend development.
        </p>
        <p>
          So, I started learning HTML, CSS, and JavaScript. In 2023, I got into
          Tailwind, Git and Vue. Embarked on projects including my Portfolio,
          Not long after that I started with React framework.
        </p>
      </div>
    </div>

    <!-- CONTAINER 3 -->
    <div class="container3">
      <div class="left_cont">
        <img class="fatai flower" src="@/assets/fatai2.jpg" alt="Fatai" />
        <!-- <h3 class="started">What I'm doing now.</h3>
        <p>
          Currently, am nearing the completion of my degree in Engineering,
          which have been years of roller coater.
        </p>
        <p>
          In my free time, I enjoy creative coding, watching or playing
          football, watching movies, playing games with friends and spending
          time with my family.
        </p>
        <p>Thanks for checking out my corner of the web.</p> -->
      </div>
      <!-- START OF RIGHT SIDE -->
      <div class="right_cont">
        <h3 class="started value_inlife">What I truly value in life.</h3>
        <p>
          I believe in the quite popular word that <em>EXPECTATIONS HURT</em>.
          Most importantly hardwork pays, valued family maybe because am blessed
          with a beautiful ones, great sisters and people around me.
        </p>
        <p>
          And of course definitely looking forward to have mine, someday
          probably in the years to come.
        </p>
        <!-- <img class="fatai flower" src="@/assets/fatai2.jpg" alt="Fatai" /> -->
      </div>
    </div>
    <!-- container 3  stops here-->

    <!-- CONTAINER 4 -->
    <div class="container4">
      <div class="left_cont">
        <!-- <img class="fatai flower" src="@/assets/fatai2.jpg" alt="Fatai" /> -->
        <h3 class="started">What I'm doing now.</h3>
        <p>
          Currently, am nearing the completion of my degree in Engineering,
          which have been years of roller coater.
        </p>
        <p>
          In my free time, I enjoy creative coding, watching or playing
          football, watching movies, playing games with friends and spending
          time with my family.
        </p>
        <p>Thanks for checking out my corner of the web.</p>
      </div>
      <!-- START OF RIGHT SIDE -->
      <div class="right_cont">
        <!-- <h3 class="started value_inlife">What I truly value in life.</h3>
        <p>
          I believe in the quite popular word that <em>EXPECTATIONS HURT</em>.
          Most importantly hardwork pays, valued family maybe because am blessed
          with a beautiful ones, great sisters and people around me.
        </p>
        <p>
          And of course definitely looking forward to have mine, someday
          probably in the years to come.
        </p> -->
        <img
          class="fatai onlylaptop"
          src="@/assets/fataisnap.jpg"
          alt="Fatai"
        />
      </div>
    </div>

    <div class="experience_section">
      <h4 class="experience">EXPERIENCE</h4>
      <h2 class="experience_note">
        My work history and accomplishments timeline.
      </h2>
      <ul class="project_ul">
        <li class="project_li">
          <h2>AltSchool Africa</h2>
          <div class="project_details">
            <h3 class="project_Title"></h3>
            <p class="about_project"></p>
          </div>
        </li>
      </ul>
    </div>
    <favorite-quotes></favorite-quotes>
  </section>
</template>
<script>
import FavoriteQuotes from "@/components/UI/FavoriteQuotes.vue";

export default {
  components: {
    FavoriteQuotes,
  },
};
</script>
<style scoped>
.container {
  background: #020617;
  padding: 7rem 9rem;
  color: #fff;
}
.greetngs {
  font-size: 3.1rem;
  width: 40rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 3.5rem;
  text-align: center;
  margin: 0 auto;
}
/* container 2   */
.container2,
.container3,
.container4 {
  display: flex;
  width: 90%;
  margin: 4rem auto 0;
}
.container3 {
  margin: 0rem auto 0;
}
.container4 {
  margin: 0rem auto 0;
}
.good {
  display: block;
}
.left_cont {
  margin: 0 6rem 0 0;
}
.forresponsive {
  display: none;
}
.fatai {
  width: 24rem;
  height: 37rem;
  border: 4px solid #ffffff6e;
  border-radius: 1.5rem;
  margin: 1rem 0 2rem;
}
p {
  width: 25rem;
  text-align: left;
  font-size: 1rem;
  margin: 0.8rem auto 0rem;
  line-height: 1.8rem;
  letter-spacing: 0.7px;
  opacity: 60%;
}
.started {
  width: 25rem;
  font-size: 1.3rem;
  margin: 0.8rem auto 1rem;
  line-height: 1.7rem;
  font-weight: 300;
  opacity: 95%;
  letter-spacing: 1px;
}
.flower {
  margin-top: 4rem;
}
.onlylaptop {
  margin-top: -16rem;
}
/* RIGHT CONT */
.right_cont {
  margin: 5rem 0 0 0;
}
.heythere {
  font-size: 1.6rem;
  margin: 0.8rem auto 1rem;
  line-height: 1.8rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: left;
  opacity: 90%;
}
.value_inlife {
  margin-top: 5rem;
}
/* container 2  stops here */

/* EXPERIENCE */
.experience_section {
  margin: 8rem 0 0rem;
}
.experience {
  text-align: center;
  letter-spacing: 0.9px;
  color: rgb(82, 118, 191);
}
.experience_note {
  width: 28rem;
  text-align: center;
  font-size: 2rem;
  margin: 0.8rem auto 3rem;
  line-height: 2.5rem;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
