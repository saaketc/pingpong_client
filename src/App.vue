<template>
  <div class="container">
    <br />
    <br />
    <Header />
    <br />
    <router-view v-bind:user="user"></router-view>
  </div>
</template>

<script>
import userServices from "./services/userServices";
import Header from "./components/header";

export default {
  name: "App",
  data() {
    return {
      user: {
        user_id: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  components:{
    Header
  },
  created() {
    this.user = userServices.getCurrentUser();
  },
};
</script>

<style></style>
