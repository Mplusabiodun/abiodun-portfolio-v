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
          rows="3"
          placeholder="Leave a message or comment for Fatai."
        ></textarea>
        <button>send</button>
      </div>
    </div>
    <div class="skill_div">
      <h3 class="skills">Skills</h3>
      <ul>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/html.png"
            alt="html_logo"
          />HTML
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/css.png"
            alt="css_logo"
          />CSS
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/tailwind.png"
            alt="tailwind_logo"
          />TAILWIND
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/javascript.png"
            alt="javascript_logo"
          />
          JAVASCRIPT
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/vue.png"
            alt="vue_logo"
          />
          VUE
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/html.png"
            alt="git_vc"
          />
          GIT VC
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/skills_social/react.png"
            alt="react_logo"
          />
          REACT
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
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
    };
  },
  methods: {
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
  text-align: left;
  font-size: 1rem;
  margin: 2rem auto 3rem;
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
  padding: 0.8rem 1.4rem;
  margin: 2rem 0 0 1rem;
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
  padding: 0.4rem 0.7rem;
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
</style>
