<template>
  <section class="container">
    <h2 class="hard_soft">Hardware and Softwares I use on a daily basis.</h2>
    <h3 class="app">Applications</h3>
    <ul class="app_group">
      <li v-for="software in softwares" :key="software.s_name" class="list">
        <img id="app_img" :src="software.image" :alt="software.s_name" />
        <p>{{ software.s_name }}</p>
      </li>
    </ul>
    <h3 class="hardware">Hardware</h3>
    <p class="myhardwares">
      <span id="hp">HP EliteBook 1030 G1</span>
      <span class="prop"
        >Intel(R) Core(TM) m5-6Y57 CPU @ 1.10GHz 1.51 GHz, 16.0 GB, 64-bit
        operating system, x64-based processor, SSD Storage.</span
      >
    </p>

    <favorite-quotes></favorite-quotes>
  </section>
</template>
<script>
import FavoriteQuotes from "@/components/UI/FavoriteQuotes.vue";
import VSCode from "@/assets/toolboxpics/vscode.png";
import netlify from "@/assets/toolboxpics/netlify.png";
import youtube from "@/assets/toolboxpics/youtube.png";
import MDN from "@/assets/toolboxpics/mdn.png";
import github from "@/assets/toolboxpics/github.png";
import linkedln from "@/assets/toolboxpics/linkedln.png";
import twitter from "@/assets/toolboxpics/twitter.png";
import audiomack from "@/assets/toolboxpics/audiomack.png";
import spotify from "@/assets/toolboxpics/spotify.png";
import slack from "@/assets/toolboxpics/slack.png";
import gmail from "@/assets/toolboxpics/gmail.png";

export default {
  components: {
    FavoriteQuotes,
  },
  data() {
    return {
      softwares: [
        { image: VSCode, s_name: "VSCode" },
        { image: netlify, s_name: "Netlify" },
        { image: youtube, s_name: "Youtube" },
        { image: MDN, s_name: "MDN" },
        { image: github, s_name: "Github" },
        { image: linkedln, s_name: "Linkedln" },
        { image: twitter, s_name: "X" },
        { image: audiomack, s_name: "Audiomack" },
        { image: spotify, s_name: "Spotify" },
        { image: slack, s_name: "Slack" },
        { image: gmail, s_name: "Gmail" },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  background: #020617;
  padding: 9rem 9rem;
  color: #fff;
}
.hard_soft {
  font-size: 3.2rem;
  width: 38rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 3.5rem;
  text-align: center;
  margin: 0 auto;
}
.app {
  text-align: center;
  margin: 4rem 0 2.5rem;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
}
.app_group {
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
  padding: 1rem;
  list-style-type: none;
  height: 13rem;
  text-align: center;
}
#app_img {
  width: 8rem;
  height: 8rem;
  border-radius: 2rem;
  margin-top: 0.9rem;
}
li p {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0rem 0 0 0;
  opacity: 70%;
}

.hardware {
  text-align: center;
  margin: 10rem 0 2rem;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
}
.myhardwares {
  width: 18rem;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  font-size: 1.2rem;
}
#hp {
  display: block;
  font-weight: bold;
}
.prop {
  opacity: 60%;
}
/* iPad */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 14rem 4rem;
  }
  .hard_soft {
    font-size: 3.3rem;
  }
  .app {
    opacity: 80%;
  }
  .app_group {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
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
    padding: 1rem;
    list-style-type: none;
    height: 13rem;
    text-align: center;
  }
  #app_img {
    width: 8rem;
    height: 8rem;
    border-radius: 2rem;
    margin-top: 0.9rem;
  }
  li p {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0rem 0 0 0;
    opacity: 70%;
  }

  .hardware {
    text-align: center;
    margin: 10rem 0 2rem;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .myhardwares {
    width: 18rem;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    font-size: 1.2rem;
  }
  #hp {
    display: block;
    font-weight: bold;
  }
  .prop {
    opacity: 60%;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding: 10rem 2rem;
  }
  .hard_soft {
    font-size: 2rem;
    width: 22rem;
    letter-spacing: 1.2px;
    line-height: 2.3rem;
  }
  .app_group {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }
  li {
    height: 12rem;
  }
  #app_img {
    width: 7rem;
    height: 7rem;
    margin-top: 0.7rem;
  }
  li p {
    margin: 0.5rem 0 0 0;
  }

  .hardware {
    text-align: center;
    margin: 10rem 0 2rem;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .myhardwares {
    width: 18rem;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    font-size: 1.2rem;
  }
  #hp {
    display: block;
    font-weight: bold;
  }
  .prop {
    opacity: 60%;
  }
}
</style>
