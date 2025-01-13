<template>
  <div class="container">
    <h3 class="collection">A collection of my favorite works</h3>
    <ul v-for="project in moreProjects" :key="project.name">
      <li>
        <div class="pics_cont">
          <img id="project_pics" :src="project.image" alt="" />
        </div>
        <div class="project_details">
          <div class="littlepadding">
            <h3 class="project_name">{{ project.name }}</h3>
            <p class="about_project">{{ project.description }}</p>
            <a :href="project.livelink" target="blank">{{
              project.linkName
            }}</a>
          </div>
        </div>
      </li>
    </ul>
    <favorite-quotes></favorite-quotes>
  </div>
</template>
<script>
import FavoriteQuotes from "../UI/FavoriteQuotes.vue";
import audiophile from "@/assets/projects/audiophile.png";
import cashRegister from "@/assets/projects/cash_register.png";
import pokemon from "@/assets/projects/pokemon.png";
import portfolio from "@/assets/projects/my_portfolio.png";
import authorsPageAPI from "@/assets/projects/authors_page.png";
import fccForum from "@/assets/projects/fcc_forum.png";
import telephoneNumberValidator from "@/assets/projects/telephone_no_validator.png";
import recipePage from "@/assets/projects/recipe.png";
// import findacoach from "@/assets/projects/find_a_coach.png";
import technical from "@/assets/projects/technical_docpage.png";
import drfcc from "@/assets/projects/DrFCC.png";
import authtest from "@/assets/projects/auth_test.png";
import twotruth from "@/assets/projects/read_my_mind.png";
import colormarkers from "@/assets/projects/colormarkers2.png";
import counterhook from "@/assets/projects/counterhook.png";
import photogallery from "@/assets/projects/photogallery.png";
import palindrome from "@/assets/projects/palindrome.png";
import romanConverter from "@/assets/projects/roman_converter.png";

export default {
  components: {
    FavoriteQuotes,
  },
  data() {
    return {
      moreProjects: [
        {
          image: audiophile,
          name: "Audiophile",
          description:
            "An online premier store for high quality headphones, earphones and speakers. An all in one stop to fulfillyour audio needs. For music lovers and sound specialists devoted to help them get their audio needs.",
          livelink: "https://gadgets-ecommerce-vue3.netlify.app/",
          linkName: "audiophile-ecommerce",
        },
        {
          image: cashRegister,
          name: "Cash Register App",
          description: `The cash register app return change to the customer based on the price of the item, the amount of cash provided by the customer and the amount of cash in the cash drawer. It also shows different messages in different scenarios, such as when the customer provides too little cash or when the cash drawer doesn't have enough to issue the correct change `,
          livelink: "https://cash-register-fccamp.netlify.app/",
          linkName: "cash-register-app",
        },
        {
          image: pokemon,
          name: "Pokémon Search App",
          description:
            "The Pokémon search app allows users to look up detailed information about various Pokémon species. Here are some typical features that the app include: Pokémon Database, Search and Filter, Pokédex Functionality, Stat Charts and Comparisons.",
          livelink: "https://pokemon-searc-happ.netlify.app/",
          linkName: "pokémon-search-app",
        },
        {
          image: recipePage,
          name: "Recipe Page",
          description:
            "My solution to the Recipe page challenge on Frontend Mentor. An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese.",
          livelink: "https://a-recipe-page.netlify.app/",
          linkName: "a-recipe-page",
        },
        {
          image: portfolio,
          name: "Abiodun Portfolio",
          description:
            "My portfolio is a reflection of my dedication, passion for giving a friendly user interface,  describing my skills, creativity, and commitment to excellence. Each project showcases my ability to adapt and excel in different environments and challenges.",
          livelink: "https://a-recipe-page.netlify.app/",
          linkName: "abiodun-portfolio-v",
        },
        {
          image: authorsPageAPI,
          name: "Authors Page",
          description: `The Authors page project helps on how to use the fetch method, then dynamically update the DOM to display the fetched data. And also paginating data in order to load results in batches.`,
          livelink: "https://authors-page-api-fcc.netlify.app/",
          linkName: "authors-page-API",
        },
        {
          image: fccForum,
          name: "FreeCodeCamp Forum",
          description: `This project helps to gain proficiency in asynchronous concepts. Buildig freeCodeCamp forum leaderboard, this project cover the Fetch API, promises, Async/Await, and the try..catch statement. `,
          livelink: "https://fcc-forum-l-aysnc-await.netlify.app/",
          linkName: "freeCodeCamp-forum",
        },
        {
          image: telephoneNumberValidator,
          name: "Telephone Number Validator",
          description: `The telephone number validator is a program used to verify whether a given phone number is formatted correctly and potentially valid. Validators can be designed to check for different formats depending on the country and type of phone number (e.g., mobile, landline). `,
          livelink: "https://telephone-number-validatorapp.netlify.app/",
          linkName: "telephone-number-validator",
        },
        // {
        //   image: findacoach,
        //   name: "Find a coach",
        //   description:
        //     "Find a Coach app is a digital platform designed to connect individuals seeking personal or professional development with qualified coaches. Users can search for coaches based on specialty, experience, location, ratings, and availability. This app aims to streamline the process of finding and connecting with a coach, enhancing accessibility and convenience for users worldwide.",
        //   livelink: "https://a-recipe-page.netlify.app/",
        //   linkName: "find-a-coach",
        // },
        {
          image: palindrome,
          name: "Palindrome Checker",
          description:
            "A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.",
          livelink: "https://palindromechecke-r.netlify.app/",
          linkName: "palindrome-checker",
        },
        {
          image: romanConverter,
          name: "Roman Numeral Converter",
          description:
            "Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. The Roman numeral converter helps to conver numbers to roman numbers.",
          livelink: "https://romannumeral-converter.netlify.app/",
          linkName: "roman-numeral-converter",
        },
        {
          image: technical,
          name: "Technical document page",
          description:
            "The Technical Documentation Page is a project in the freeCodeCamp Responsive Web Design certification. This challenge requires you to build a technical documentation page to practice and demonstrate your HTML, CSS, and JavaScript skills. The main objectives and requirements of this challenge includes creating a page with a main section that contains various documentation content, a navigation menu on the left side of the page that links to different sections of the documentation. Also ensured the page is fully responsive, adapting to different screen sizes and devices",
          livelink: "https://fcc-technical-doc-pg.netlify.app/",
          linkName: "fcc-technical-doc-pg",
        },
        {
          image: drfcc,
          name: "Tribute page",
          description:
            "The Dr. Norman Borlaug Tribute Page is one of the first projects in the freeCodeCamp Responsive Web Design certification. This challenge is designed to help you practice HTML and CSS by building a simple webpage that pays tribute to Dr. Norman Borlaug, the father of the Green Revolution.",
          livelink: "https://tributepagetailwind.netlify.app/",
          linkName: "tribute-page",
        },
        {
          image: authtest,
          name: "Auth test",
          description:
            "An Auth Test typically refers to the process of verifying and validating the authentication mechanism of a system or application. This is a crucial step in ensuring the security and integrity of the user authentication process.",
          livelink: "https://altschthirdexam.netlify.app/login",
          linkName: "auth-test",
        },
        {
          image: twotruth,
          name: "Two-truth or One-lie",
          description:
            "Two Truths and a Lie is a popular icebreaker game that helps people get to know each other in a fun and engaging way. It can be played in various settings, such as classrooms, parties, team-building events, or any social gathering. Each participant thinks of three statements about themselves. Two of these statements should be true, and one should be a lie.",
          livelink: "https://game-twotruths-onelie.netlify.app/",
          linkName: "game-twotruth-onelie",
        },
        {
          image: colormarkers,
          name: "Color markers",
          description:
            "This project focuses on creating an interactive web page where users can select colors and apply them to elements on the page.",
          livelink: "https://coloredmarkersfcc.netlify.app/",
          linkName: "colored-markers-fcc",
        },
        {
          image: counterhook,
          name: "Custom counter hook",
          description:
            "A Custom Counter Hook is a user-defined React hook designed to manage and encapsulate counter logic in a reusable way. It simplifies the process of creating counters in React components by abstracting the logic into a custom hook, which can then be used across multiple components. A custom counter hook streamlines the process of implementing counters in React applications, enhancing code maintainability and reusability.",
          livelink:
            "https://fataicustomcounterhook.netlify.app/?source=post_page-----ba53d9e56a56--------------------------------",
          linkName: "custom-counter-hook",
        },
        {
          image: photogallery,
          name: "Photo gallery",
          description:
            "A Photo Gallery is a web-based application or component used to display a collection of images in an organized and visually appealing manner. It allows users to view, browse, and sometimes interact with a series of photos. A well-designed photo gallery enhances the presentation of visual content, making it easy for users to view and enjoy images.",
          livelink: "https://phot-ogallery.netlify.app/",
          linkName: "photo-gallery",
        },
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
.collection {
  width: 35rem;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 3.5rem;
  text-align: center;
  margin: 1rem auto;
  letter-spacing: 1.3px;
}
li {
  list-style-type: none;
  margin: 7rem 0 9rem;
}
.pics_cont {
  overflow: hidden;
  width: 100%;
  /* width: 50rem; */
  height: 25rem;
  border-radius: 1.2rem;
  margin-bottom: 1rem;
}
#project_pics {
  width: 100%;
  /* width: 50rem; */
  height: 25rem;
}
.project_name {
  font-size: 2rem;
  letter-spacing: 1px;
}
.about_project {
  font-size: 1.1rem;
  letter-spacing: 1px;
  line-height: 28px;
  opacity: 70%;
  margin: 1rem 0;
}
.project_details a {
  font-size: 1.2rem;
  letter-spacing: 0.9px;
  text-decoration: none;
  color: rgb(54, 106, 208);
}
/* iPad */
/* and (min-width: 768px) */
@media only screen and (max-width: 1024px) {
  .container {
    padding: 14rem 5rem 5rem 2rem;
  }
}

/* Mobile ----------- */
@media only screen and (max-width: 767px) {
  .container {
    padding: 7rem 2rem 5rem 0.5rem;
  }
  .collection {
    font-size: 1.8rem;
    width: 20rem;
    letter-spacing: 1.5px;
    line-height: 2.2rem;
  }
  li {
    margin: 5rem 0 0 -1rem;
  }
  .pics_cont {
    height: 18rem;
  }
  #project_pics {
    width: 100%;
    height: 18rem;
  }
  .project_name {
    font-size: 1.7rem;
  }
  .littlepadding {
    padding: 0 0.5rem;
  }
  .about_project {
    font-size: 1rem;
    line-height: 25px;
    margin: 0.8rem 0;
    opacity: 0.6;
  }
  .project_details a {
    font-size: 1.1rem;
  }
}
</style>
