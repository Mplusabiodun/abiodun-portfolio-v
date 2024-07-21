<template>
  <section class="fav_cont">
    <div class="quotes">
      <h3 class="will_you">
        Will you like to read some of my favourite quotes?
      </h3>
      <p class="myquotes">
        Other people liking you is a bonus, you liking yourself is the real
        price.
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
          <img class="logo" src="@/assets/html.png" alt="html_logo" />HTML
        </li>
        <li><img class="logo" src="@/assets/css.png" alt="css_logo" />CSS</li>
        <li>
          <img
            class="logo"
            src="@/assets/tailwind.png"
            alt="tailwind_logo"
          />TAILWIND
        </li>
        <li>
          <img
            class="logo"
            src="@/assets/javascript.png"
            alt="javascript_logo"
          />
          JAVASCRIPT
        </li>
        <li>
          <img class="logo" src="@/assets/vue.png" alt="vue_logo" />
          VUE
        </li>
        <li>
          <img class="logo" src="@/assets/html.png" alt="git_vc" />
          GIT VC
        </li>
        <li>
          <img class="logo" src="@/assets/react.png" alt="react_logo" />
          REACT
        </li>
      </ul>
    </div>
  </section>
</template>
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
  letter-spacing: 1px;
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
  /* margin: 0 1rem 0 -1rem; */
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
  /* background: grey; */
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
