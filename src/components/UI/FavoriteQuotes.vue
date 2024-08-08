<template>
  <section class="fav_cont">
    <div class="quotes">
      <h3 class="will_you">
        Will you like to read some of my favourite quotes?
      </h3>
      <p class="myquotes">
        {{ displayedQuote }}
      </p>
      <div class="input_div">
        <textarea
          name="message"
          id="message"
          cols="35"
          rows="5"
          placeholder="Leave a message or comment for Fatai."
          v-model.trim="message"
        ></textarea>
        <button @click="sendMessage">SEND</button>
      </div>
    </div>
    <div class="skill_div">
      <h3 class="skills">SKILLS</h3>
      <ul>
        <li v-for="skill in skills" :key="skill.skillName">
          <img class="logo" :src="skill.image" alt="html_logo" />{{
            skill.skillName
          }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import html from "@/assets/skills_social/html.png";
import css from "@/assets/skills_social/css.png";
import tailwind from "@/assets/skills_social/tailwind.png";
import javascript from "@/assets/skills_social/javascript.png";
import vue from "@/assets/skills_social/vue.png";
import git from "@/assets/skills_social/html.png";
import react from "@/assets/skills_social/react.png";
export default {
  data() {
    return {
      myFavQuotes: [
        "Background could only make things not easy, not impossible. Tell me how uneasy it was I'll listen but not why you couldn't.",
        "Other people liking you is bonus, you liking you is the REAL price.",
        "Well, Hope is never something you should rely on. While waiting for the best, prepare for the worst Champ.",
        "A man has to do what he has to do, whatever it takes.",
        "If it's meant for everyone, it would have been easy, keep your head champ.",
        "Coding: where imagination meets innovation!.",
        "Coding: the art of turning ideas into reality, one line at a time!.",
        "Life is code, and code is life. It's all about the loops!.",
        "Coding: where magic happens, and bugs My code, my rules, my digital kingdom!.",
        "Doesn't have to be within, yours is to make the puzzle work out.",
        "In life, people will HURT you and go free, don't sit and hope things will happen to them rather put yourself together and strive harder. GOD is for everyone.",
      ],
      displayedQuote: null,
      message: "",
      compliments: [],
      skills: [
        {
          image: html,
          skillName: "HTML",
        },
        { image: css, skillName: "CSS" },
        { image: tailwind, skillName: "TAILWIND" },
        { image: javascript, skillName: "JAVASCRIPT" },
        { image: git, skillName: "GIT" },
        { image: vue, skillName: "VUE" },
        { image: react, skillName: "REACT" },
      ],
    };
  },
  methods: {
    sendMessage() {
      this.compliments.push(this.message);
      this.message = "";
      console.log(this.compliments);
    },
    displayRandomItem() {
      const randomIndex = Math.floor(Math.random() * this.myFavQuotes.length);
      this.displayedQuote = this.myFavQuotes[randomIndex];
    },
  },
  created() {
    this.displayRandomItem();
    setInterval(this.displayRandomItem, 5000);
  },
};
</script>
<style scoped>
.fav_cont {
  display: flex;
  margin: 8rem 0 0;
}
.will_you {
  width: 24rem;
  text-align: center;
  font-size: 1.3rem;
  margin: 0rem auto;
  line-height: 2rem;
  font-weight: 300;
  letter-spacing: 1.2px;
}
.myquotes {
  width: 15rem;
  height: 11rem;
  text-align: left;
  font-size: 1rem;
  margin: 2rem auto 1rem;
  line-height: 1.8rem;
  letter-spacing: 1.2px;
  opacity: 60%;
}
.input_div {
  display: flex;
  justify-content: center;
  margin: 0 0rem 0 3rem;
}
#message {
  width: 100%;
  padding: 0.8rem 1.4rem;
  color: #fff;
  background: inherit;
  border: 1px solid #ffffff5b;
  border-radius: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.8px;
}
.input_div button {
  padding: 0rem 1.4rem;
  height: 4rem;
  margin: 3rem 0 0 1rem;
  color: #020617;
  background: #fff;
  border: 1px solid #ffffff5b;
  border-radius: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.skill_div {
  padding: 0.5rem;
  margin-left: 5rem;
  width: 28rem;
}
.skills {
  letter-spacing: 1px;
  background: rgb(25, 60, 129);
  width: 5rem;
  margin: 0 auto;
  padding: 0.4rem 0.7rem 0.4rem 0.5rem;
  border-radius: 10px;
}

.skill_div ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0rem 0 0 4rem;
}

.skill_div ul li {
  list-style-type: none;
  font-size: 0.9rem;
  margin: 1.1rem 0 0;
  text-align: left;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  opacity: 70%;
}
.logo {
  width: 1.3rem;
  height: 1.3rem;
  margin: -1rem 0.6rem 0 0;
}
/* iPad */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .fav_cont {
    flex-direction: column;
    margin: 6rem 0 0;
  }
  .will_you {
    font-size: 1.5rem;
    line-height: 2.1rem;
  }
  .myquotes {
    width: 22rem;
    font-size: 1.3rem;
  }
  .input_div {
    display: flex;
    justify-content: center;
    margin: 0 0rem 0 1rem;
  }
  #message {
    width: 90%;
    border: 2px solid #ffffff5b;
  }
  .input_div button {
    padding: 0.8rem 1.8rem;
    font-weight: 800;
  }
  .skill_div {
    margin-left: -3rem;
    margin-top: 6rem;
    width: 42rem;
  }
  .skills {
    width: 6rem;
    margin: 0 auto;
    padding: 0.8rem 1rem;
  }
  .skill_div ul {
    margin: 3rem auto 0;
    text-align: left;
  }
  .skill_div ul li {
    margin: 1.3rem auto 0;
  }
  .logo {
    display: none;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .fav_cont {
    flex-direction: column;
    margin: 6rem 0 0;
  }
  .will_you {
    width: 22rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin: 0 0rem 0 -0.5rem;
    letter-spacing: 1.5px;
  }
  .myquotes {
    width: 20rem;
    font-size: 1.3rem;
  }
  #message {
    line-height: 18px;
  }
  .input_div button {
    letter-spacing: 1.8px;
  }
  .skill_div {
    margin-left: -1rem;
    margin-top: 6rem;
    width: 100%;
  }
  .skills {
    width: 6rem;
    text-align: center;
    padding: 0.8rem 1rem;
  }
  .skill_div ul {
    margin: 1rem auto 0;
  }
  .skill_div ul li {
    margin: 1rem auto 0;
  }
}
</style>
