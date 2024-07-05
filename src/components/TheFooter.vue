<template>
  <div class="container">
    <ul class="quicklinks">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>RESUME</li>
      <li>PROJECTS</li>
    </ul>
    <div class="inner_cont">
      <div class="get_cont">
        <p class="get_intouch">GET IN TOUCH</p>
      </div>
      <div class="horizontal"></div>
      <div class="second_inner_cont">
        <div class="email_cont">
          <!-- <i class="fa-solid fa-arrow-up-right-from-square"></i> -->
          <i class="fa-solid fa-envelope"></i>
          <label class="label">Email</label>
          <p class="email">fataimonsuru2020@gmail.com</p>
        </div>
        <ul class="accounts">
          <li>
            <!-- <i class="fa-solid fa-arrow-up-right-from-square"></i> -->
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <!-- <i class="fa-solid fa-arrow-up-right-from-square"></i> -->
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <!-- <i class="fa-solid fa-arrow-up-right-from-square"></i> -->
            <a href="#">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </li>
        </ul>
        <div class="phone_cont">
          <i class="fa-solid fa-phone"></i>
          <label class="label">Phone</label>
          <p class="phone">09063268232</p>
        </div>
      </div>
    </div>
    <p class="copyright">Copyright. All rights reserved</p>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  background: black;
  padding: 1rem 4rem;
  color: #fff;
}
li {
  list-style-type: none;
}
.quicklinks {
  /* text-align: left; */
  display: flex;
  justify-content: right;
}
.quicklinks li {
  margin-left: 6rem;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 1rem;
}
.inner_cont {
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
  opacity: 65%;
}
.get_cont {
  width: 17rem;
  height: 4rem;
  border-radius: 10px;
  border: 1px solid #fff;
}
.get_intouch {
  text-align: center;
  margin: 1rem 0;
  font-size: 20px;
  letter-spacing: 1px;
}
.horizontal {
  width: 1px;
  height: 10rem;
  background: #fff;
  margin: 0 6rem;
}
.accounts .fa-brands {
  /* width: 2rem; */
  /* height: 2rem; */
  padding: 7px;
  border: 1px solid #fff;
  border-radius: 10px;
}
.email_cont,
.phone_cont {
  text-align: center;
}
.label {
  margin-left: 0.6rem;
  font-size: 13px;
}
.email,
.phone {
  font-size: 14px;
  margin: 0.2rem 0 0rem;
  letter-spacing: 0.9px;
}
.accounts {
  display: flex;
}
.accounts li {
  margin: 1.5rem 3rem 0 0;
}
a {
  color: #fff;
}
.phone_cont {
  margin-top: 1.5rem;
}
.copyright {
  text-align: center;
  letter-spacing: 1px;
  font-size: 11px;
}
</style>
