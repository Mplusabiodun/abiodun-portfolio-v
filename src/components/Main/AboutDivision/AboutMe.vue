<template>
  <section class="container">
    <h2 class="greetings">
      <span class="good">{{ greeting }},</span> I'm so glad you stopped by!,
      feel free to explore.
    </h2>
    <!-- container 2 -->
    <div class="container2">
      <div class="left_cont">
        <p class="forresponsive">
          <em>
            Welcome! Let me quickly tell you about myself and what I enjoy
            doing.
          </em>
        </p>
        <img class="fatai" src="@/assets/mypics/fataisnap.jpg" alt="Fatai" />
        <h3 class="started">
          I Started my creativity journey years back and I can proudly say I
          learned from the best, always on the lookout for my next adventure.
        </h3>
        <div class="pargraphpadding">
          <p v-for="journey in myJourney" :key="journey">
            {{ journey }}
          </p>
        </div>
      </div>

      <!-- START OF RIGHT SIDE -->
      <div class="right_cont">
        <p class="heythere">
          <em>
            Let me quickly tell you about myself and what I enjoy doing.
          </em>
        </p>
        <img class="fatai" src="@/assets/mypics/fatai2.jpg" alt="Fatai" />
        <h3 class="started">The leap over to web development.</h3>
        <div class="pargraphpadding">
          <p v-for="learning in myLearning" :key="learning">
            {{ learning }}
          </p>
        </div>
      </div>
    </div>

    <!-- CONTAINER 3 -->
    <div class="container3">
      <div class="left_cont">
        <img
          class="fatai flower"
          src="@/assets/mypics/flower1.jpg"
          alt="Fatai"
        />
      </div>
      <div class="right_cont">
        <h3 class="started value_inlife">What I truly value in life.</h3>
        <div class="pargraphpadding">
          <p>
            I believe in the quite popular phrase that
            <em
              >EXPECTATIONS HURT, we need to stop living with entitlement
              mentality</em
            >. Hardwork pays, its better to wait than to regret.
          </p>
          <p>
            I valued family maybe because am blessed with beautiful ones, great
            sisters and people around me. And of course definitely looking
            forward to have mine someday, in the years to come.
          </p>
        </div>
      </div>
    </div>

    <!-- CONTAINER 4 -->
    <div class="container4">
      <div class="left_cont">
        <h3 class="started doingnow">What I'm doing now.</h3>
        <div class="pargraphpadding">
          <p v-for="currently in currentlyOn" :key="currently">
            {{ currently }}
          </p>
          <p>
            Thanks for checking out my corner of the web. <span>&#127863;</span>
          </p>
        </div>
      </div>
      <!-- START OF RIGHT SIDE -->
      <div class="right_cont">
        <img
          class="fatai onlylaptop"
          src="@/assets/mypics/flower2.jpg"
          alt="Fatai"
        />
      </div>
    </div>
    <!-- EXPERIENCE -->
    <div class="experience_section">
      <h4 class="experience">EXPERIENCE</h4>
      <h2 class="experience_note">
        My work history and accomplishments timeline.
      </h2>
      <ul>
        <li v-for="experience in experiences" :key="experience.title">
          <h2>{{ experience.title }}</h2>
          <div class="experience_details pargraphpadding">
            <h3>{{ experience.role }}</h3>
            <p>{{ experience.year }}</p>
            <p>
              {{ experience.about }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- CERTIFICATES -->
    <ul class="cert">
      <li v-for="accomplishment in accomplishments" :key="accomplishment.from">
        <img
          id="certificates"
          :src="accomplishment.certificate"
          :alt="accomplishment.from"
        />
        <p>{{ accomplishment.from }}</p>
      </li>
    </ul>
    <favorite-quotes></favorite-quotes>
  </section>
</template>
<script>
import FavoriteQuotes from "@/components/UI/FavoriteQuotes.vue";
import responsiveness from "@/assets/certificates/responsiveness.png";
import softwareCareer from "@/assets/certificates/software_career.png";

export default {
  components: {
    FavoriteQuotes,
  },
  data() {
    return {
      myJourney: [
        "In a world full of possibilities, I believe in the magic of kindness and have always strive to bring a sprinkle of joy to everything I do and everyone around.",
        "A student at Altschool Africa class '23, Creating designs that inspire positive and building applications that made life more easier have been my ultimate goal.",
        "A fans of nature and I have always love to spend my leisure time enjoying my peaceful thoughts without distraction. I'm always thrilled to meet fellow dreamers, explorers, the journey ahead and stories waiting to be told. Feel free to reach out, and let's create our own fairytale!.",
      ],
      myLearning: [
        "I decided to explore web development before too long. Given my inclination towards visual expression and design, I naturally gravitated towards frontend development.",
      ],
      currentlyOn: [
        "Currently, am nearing the completion of my degree in Engineering, which have been years of roller coater for me.",
        "In my free time, I enjoy creative coding, watching or playing football, watching movies, playing games with friends and spending time with my family.",
      ],
      experiences: [
        {
          title: "AltSchool Africa",
          role: "Student -  Frontend Developer",
          year: "2021 - 2023",
          about:
            "Trained to be a Frontend developer with several skills - Communication, Contributing to open source projects et cetra. Gradauted with class '23.",
        },
      ],
      accomplishments: [
        { certificate: responsiveness, from: "FreeCodeCamp" },
        { certificate: softwareCareer, from: "Udemy" },
      ],
      greetings: "",
    };
  },
  methods: {
    updateGreeting() {
      const currentHour = new Date().getHours();
      if (5 <= currentHour && currentHour < 12) {
        this.greeting = "Good Morning";
      } else if (12 <= currentHour && currentHour < 18) {
        this.greeting = "Good Afternoon";
      } else {
        this.greeting = "Good Evening";
      }
      // console.log(currentHour);
      // console.log(new Date());
    },
  },
  created() {
    this.updateGreeting();
  },
};
</script>
<style scoped>
.container {
  background: #020617;
  padding: 9rem 9rem;
  color: #fff;
}
.greetings {
  width: 48rem;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 3.5rem;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 1.3px;
}
.good {
  display: block;
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
.left_cont {
  margin: 0 6rem 0 0;
}
.forresponsive {
  display: none;
}
.fatai {
  width: 22rem;
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
  opacity: 0.5;
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
  margin: 5.7rem 0 0 0;
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
.experience_section ul {
  margin: 3rem 0;
}
.experience_section li {
  list-style-type: none;
  margin: 4rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  opacity: 80%;
  letter-spacing: 0.9px;
}
.experience_section p {
  font-size: 1.1rem;
}
.cert {
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 0;
}
.cert li {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
#certificates {
  width: 26.5rem;
  height: 18rem;
  border: 2px solid rgb(82, 118, 191);
  border-radius: 20px;
}
.cert p {
  margin: 0 auto;
  text-align: center;
}
/* iPad */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 14rem 5rem 5rem;
  }
  .greetings {
    font-size: 2.9rem;
    width: 40rem;
    line-height: 3.6rem;
    margin: 0 0 0 -1rem;
  }
  /* container 2   */
  .container2,
  .container3,
  .container4 {
    flex-direction: column;
    width: 100%;
  }
  .left_cont {
    margin: 0 0rem 0 0;
  }
  .forresponsive {
    display: flex;
    font-size: 1.8rem;
    margin: 0.8rem auto 0rem;
    line-height: 2.3rem;
    font-weight: 300;
    letter-spacing: 1.5px;
    text-align: left;
    opacity: 80%;
  }
  .fatai {
    width: 33rem;
    height: 48rem;
    margin: 3rem 0rem 4rem 2.3rem;
  }
  p {
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.7rem;
    letter-spacing: 2px;
  }
  .started {
    width: 100%;
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 2px;
  }
  .flower {
    margin: 4rem 0 0 1.5rem;
  }
  .doingnow {
    margin-top: 5rem;
  }
  .onlylaptop {
    margin-top: 0rem;
    display: none;
  }

  /* RIGHT CONT */
  .right_cont {
    margin: 2rem 0 0 0;
  }
  .heythere {
    display: none;
  }
  .value_inlife {
    margin-top: 2rem;
  }
  .experience_section li {
    list-style-type: none;
    margin: 4rem -3rem 0 -4rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    opacity: 80%;
    letter-spacing: 0.9px;
  }
  .experience_details {
    width: 60%;
    margin: 0 -0.5rem 0 0rem;
  }
  .cert {
    margin: 7rem 0;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
  .cert li {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  #certificates {
    width: 37rem;
    height: 25rem;
  }
  .cert p {
    margin: 1.5rem auto;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding: 7.5rem 2rem 5rem;
  }
  .greetings {
    font-size: 1.7rem;
    width: 22rem;
    line-height: 2rem;
    margin: 0 auto 0;
  }
  .good {
    display: inline;
  }
  /* container 2   */
  .container2,
  .container3,
  .container4 {
    flex-direction: column;
    width: 100%;
  }
  .left_cont {
    margin: 0 0rem 0 0;
  }
  .forresponsive {
    font-size: 1.2rem;
    margin: 0rem auto 0rem;
    line-height: 1.5rem;
  }
  .fatai {
    width: 88%;
    height: 30rem;
    margin: 1.5rem 0rem 2rem 1.3rem;
  }
  .pargraphpadding {
    padding: 0 0.5rem 0 0.7rem;
  }
  p {
    width: 100%;
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 2px;
    /* margin: 0.8rem 0rem 0rem 0rem; */
  }
  .started {
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 1.8px;
  }
  .flower {
    margin: 3rem 0 0 1rem;
  }
  .experience {
    font-size: 0.9rem;
  }
  .experience_note {
    width: 100%;
    font-size: 1.3rem;
    margin: 0.5rem auto 2rem;
    line-height: 1.6rem;
  }
  .experience_section li {
    margin: 3rem 0rem 0 -2.5rem;
    flex-direction: column;
    font-size: 1rem;
  }
  .experience_details {
    width: 100%;
  }
  .experience_details h3 {
    font-size: 1rem;
    margin: 2rem 0;
    opacity: 80%;
  }
  .cert {
    gap: 2rem;
  }
  .cert li {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  #certificates {
    width: 100%;
    height: 15rem;
  }
  .cert p {
    margin: 1.2rem auto;
  }
}
</style>
