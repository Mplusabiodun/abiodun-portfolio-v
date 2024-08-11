<template>
  <section class="container">
    <h2 class="connection">Connections</h2>
    <h3 class="here">
      Here are some remarkable individuals I have met in person.
    </h3>
    <ul class="metindividual">
      <li v-for="person in met_already" :key="person.s_name">
        <img id="app_img" :src="person.image" :alt="person.s_name" />
        <p>{{ person.s_name }}</p>
      </li>
    </ul>
    <!-- LOVE TO MEET -->
    <div class="havnt_meet">
      <h3 class="here to_meet">
        I would love to meet these individuals someday.
      </h3>
      <ul class="metindividual">
        <li v-for="individual in love_tomeet" :key="individual.s_name">
          <img id="app_img" :src="individual.image" :alt="individual.s_name" />
          <p>{{ individual.s_name }}</p>
        </li>
      </ul>
    </div>

    <favorite-quotes></favorite-quotes>
  </section>
</template>
<script>
import FavoriteQuotes from "@/components/UI/FavoriteQuotes.vue";
// MET
import Ruqoyah from "@/assets/connections/ruqoyah.jpg";
import Yusuff from "@/assets/connections/yusuff.jpg";
import Islamiyyah from "@/assets/connections/islamiyyah.png";
import Jeleel from "@/assets//connections/jeleel.png";
import Sodiq from "@/assets/connections/sodiq.jpg";
import Ganiy from "@/assets/connections/ganiyy.jpg";

// LOVE TO MEET
import Damola from "@/assets/connections/damolabadmus.png";
import Jaystar from "@/assets/connections/jaystar.png";
import Max from "@/assets/connections/max.png";
import Braydon from "@/assets/connections/braydon.png";
import Colt from "@/assets/connections/colt_steele.png";
import Jerry from "@/assets/connections/jerry_uke.png";
import Tabitha from "@/assets/connections/tabitha_kayu.png";

export default {
  components: {
    FavoriteQuotes,
  },
  data() {
    return {
      met_already: [
        { image: Ruqoyah, s_name: "Ruqoyah Adeyemi" },
        { image: Yusuff, s_name: "Yusuff Adeyemi" },
        { image: Islamiyyah, s_name: "Islamiyyah Okesola" },
        { image: Jeleel, s_name: "Jeleel Adeyemi" },
        { image: Sodiq, s_name: "Sodiq Adebisi" },
        { image: Ganiy, s_name: "Ganiy Adebayo" },
      ],
      love_tomeet: [
        { image: Damola, s_name: "Damola Badmus" },
        { image: Jaystar, s_name: "John Ayilara" },
        { image: Max, s_name: "Max Schumuller" },
        { image: Braydon, s_name: "Braydon Coyer " },
        { image: Colt, s_name: "Colt Steele" },
        { image: Jerry, s_name: "Jerry Uke" },
        { image: Tabitha, s_name: "Tabitha Kayvu" },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  background: #020617;
  padding: 9rem 12rem;
  color: #fff;
}
.connection {
  font-size: 3.2rem;
  width: 38rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 3.5rem;
  text-align: center;
  margin: 0 auto;
}
.here {
  width: 30rem;
  text-align: center;
  margin: 3rem auto 2.2rem;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 1px;
}
.metindividual {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0;
}
li {
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
  padding: 0.9rem;
  list-style-type: none;
  height: 12rem;
  text-align: center;
}
#app_img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-top: 0.7rem;
}
li p {
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0rem 0;
  opacity: 70%;
}
.havnt_meet {
  opacity: 80%;
}
.to_meet {
  margin-top: 9rem;
}

/* iPad */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 14rem 5rem;
  }
  .connection {
    font-size: 3.5rem;
  }
  .here {
    opacity: 80%;
  }
  .to_meet {
    margin-top: 9rem;
  }
  .metindividual {
    grid-template-columns: repeat(3, 1fr);
  }
  li p {
    opacity: 80%;
    letter-spacing: 1px;
    line-height: 18px;
    margin-bottom: 1rem;
  }
  #app_img {
    margin-top: 0rem;
  }
  .havnt_meet {
    opacity: 70%;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding: 10rem 2rem;
  }
  .connection {
    font-size: 2rem;
    width: 18rem;
    letter-spacing: 1.5px;
  }
  .here {
    opacity: 80%;

    width: 22rem;
    margin: 2rem auto 2.2rem;
    font-size: 1.5rem;
  }
  .to_meet {
    margin-top: 9rem;
  }
  .metindividual {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    height: 11rem;
  }
  #app_img {
    width: 6.5rem;
    height: 6.5rem;
  }
  li p {
    letter-spacing: 1.2px;
    margin-top: 0.3rem;
  }
}
</style>
