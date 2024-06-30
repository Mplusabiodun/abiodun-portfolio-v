<template>
  <div class="pcontainer">
    <div class="fcontainer"></div>
    <div class="scontainer"></div>
  </div>
</template>
<style scoped>
.pcontainer {
  /* background: url("@/assets/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh; */
  display: flex;
  justify-content: center;
}
.fcontainer,
.scontainer {
  width: 40%;
  height: 35rem;
  background: #f1f1f1;
  border-radius: 5px;
  margin: 3rem 0;
}
.fcontainer {
  /* margin-right: 0.1px; */
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.scontainer {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
</style>
