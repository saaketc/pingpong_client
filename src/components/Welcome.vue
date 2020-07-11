<template>
  <div>
    <div class="container-bg">
      <img src="../assets/express.jpg" class="bg" alt />
    </div>
    <div class="home">
      <h1 class="title">
        Express with
        <br />Ping pong
      </h1>
      <div class="authBtn">
        <b-button pill v-on:click="auth('signup')" class="signupbtn">Get started</b-button>

        <b-button pill v-on:click="auth('login')" class="mx-4 loginbtn">Login</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    auth(tag) {
      if (tag === "signup") return this.$router.push("/signup");
      else if (tag === "login") return this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 100px;
  font-weight: 900;
  color: white;
}
.authBtn {
  margin-top: 50px;
}
.signupbtn {
  background: #e91e63;
  border: 1px solid #e91e63;
  color: white;
  font-weight: 800;
  font-size: 20px;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.loginbtn {
  background: white;
  border: 1px solid #e91e63;
  color: #e91e63;
  font-weight: 800;
  font-size: 20px;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.loginbtn:hover {
  background: white;
  border: 1px solid #e91e63;
  color: #e91e63;
  font-weight: 800;
}
.signupbtn:hover {
  background: #e91e63;
  border: 1px solid #e91e63;
  color: white;
  font-weight: 800;
}

img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

div.container-bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: "#121212";
}

div.home {
  margin-top: 10px;

  width: 1000px;
  position: relative; /* has to be position relative for left to work, or you could just do margin-left: -50px; too */
  left: 100px;
}

@media screen and (max-width: 1024px) {
  /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px; /* 50% */
  }

  div.container-bg {
    left: 50%;
    margin-left: -512px; /* 50% */
  }
}
</style>