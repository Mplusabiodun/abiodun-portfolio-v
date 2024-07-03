<template>
  <div class="pcontainer">
    <div class="fcontainer">
      <div class="mabiodun">
        <p>ABIODUN FATAI</p>
        <hr />
        <p>PORTFOLIO 2024</p>
      </div>
      <div class="role_pics">
        <p>FRONT-END WEB DEVELOPER</p>
        <img id="fatai" src="@/assets/fatai2.jpg" alt="Abiodun Fatai" />
      </div>
      <div class="thick_here">
        <hr class="thick" />
        <h2 class="here">I'M GLAD YOU'RE HERE</h2>
      </div>
      <p class="im_Abiodun">I'M ABIODUN FATAI</p>
      <p class="brief">
        A National Diploma Distinction holder and currently CIVIL ENGINEERING
        student at FEDERAL UNIVERSITY OF TECHNOLOGY MINNA, NIGER STATE. A
        Frontend developer with great enthusiasm for building user centric
        software products. I started this journey to explore my passion for
        writing codes and solving complex software problems. Trust me it was
        indeed amazing writing my first HTML code ('Hello world') and being able
        to display on the screen.
      </p>
    </div>
    <!-- I'm a Software Engineer (Frontend Dev.), finding my way into the world of
    Tech. A National Diploma Distinction holder in Civil Engineering and
    currectly a Civil Engineering student at Federal University of Technology
    Minna, Niger State, Nigeria (Class of 2022). Always ready to learn new
    things (so i can be better than i was yesterday)... Here is just the
    beginning, Check me out tomorrow and cheers to great years in tech 😊 Xoxo
    Here's a quick summary about me: 😊 Pronouns: He/him 💡 Fun fact: I'm
    currently studying at AltSchool Africa School of Software Engineering Class
    of 2022. And from my mentor Damola Badmus, also a member at Segsalerty. 🌱
    I’m currently learning JavaScript, Reactjs, Vue and Python. 😊 I’m looking
    for help with open source projects, hackathons, internships, and entry-level
    opportunities. 💼 Job interests: Software Engineer, Front Engineer, or UI
    Engineer (Intern or Junior level). 📫 You can view my resume, WhatsApp
    +2348025202138 and contact me by emailing fataimonsuru2020@gmail.com.
    In-between kudos to my mentor Damola Badmus -->

    <!-- I’m a National Diploma Distinction holder and currently CIVIL ENGINEERING
    student at FEDERAL UNIVERSITY OF TECHNOLOGY MINNA, NIGER STATE. A Frontend
    developer with great enthusiasm for building user centric software products.
    I started this journey to explore my passion for writing codes and solving
    complex software problems. Trust me is ineed amazing wrinting my first HTML 
    code ('Hello world') and being able to display it on the screen. I take pride
    in providing the best in my career path as I was recently recognized as the 
    best student in my cohort at the AltSchool Africa where I was trained as a 
    software engineer (HTML, CSS, Tailwind, JavaScript and currently on Frameworks - React.js,
    Vue.js...........) also experienced in contributing to open source project
    and technical writing. -->

    <div class="scontainer">
      <div>
        <h3>ADDRESS</h3>
        <p>No.6 Fatai's Lodge, Idofin, Igboora, Oyo State. Nigeria</p>
      </div>
      <div>
        <h3>EDUCATION</h3>
        <p>ALTSCHOOL AFRICA</p>
      </div>
      <div>
        <h3>HOBBIES</h3>
        <ul>
          <li>CODING</li>
          <li>WATCHING FOOTBALL</li>
          <li>TRAVELLING</li>
        </ul>
      </div>
      <div>
        <h3>SKILLED</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>GIT VC</li>
          <li>JAVASCRIPT</li>
          <li>VUE</li>
          <li>REACT</li>
        </ul>
      </div>
      <div>
        <h3>PROJECTS</h3>
        <li></li>
      </div>
      <div>
        <h3>CONTACT</h3>
        <p>fataimonsuru2020@gmail.com</p>
        <p>09063268232</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pcontainer {
  background: url("@/assets/emptypaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
}
.fcontainer {
  width: 24.5rem;
  margin: 4.2rem 0 0 -0.8rem;
  /* margin: 4.2rem 0 0 -3.8rem; */
}
.mabiodun {
  display: flex;
}
.mabiodun p {
  font-size: 11px;
  letter-spacing: 0.7px;
}
.mabiodun hr {
  width: 7rem;
  height: 1px;
  margin: 0.5rem 2.7rem 0 2.7rem;
  border: 1px solid black;
}

.role_pics {
  display: flex;
  margin: 1.5rem 0 1rem;
}
.role_pics p {
  transform: rotate(270deg);
  letter-spacing: 1px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 3rem 0rem 2rem 0rem;
  opacity: 70%;
}
#fatai {
  width: 17rem;
  height: 22rem;
  margin-left: -11rem;
}
.thick_here {
  display: flex;
}
.thick {
  width: 1.5rem;
  height: 10px;
  margin: 0.6rem 1rem 0 0;
  background: black;
  border: 1px solid black;
}
.here {
  font-size: 18px;
  opacity: 60%;
}
.im_Abiodun {
  font-size: 15px;
  margin: 10px 0 10px 2rem;
  letter-spacing: 1px;
  font-weight: bold;
}
.brief {
  font-size: 11px;
  margin: 0 0 0 2rem;
  letter-spacing: 0.7px;
  line-height: 15px;
}

.scontainer {
  width: 25rem;
  margin: 4.2rem 0rem 0 4rem;
  /* background: grey; */
}
</style>
