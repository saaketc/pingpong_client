<template >
  <div>
    <div class="logo" v-if="!user">
      <Logo v-bind:user="user"/>
    </div>
    <b-row>
      <b-col sm="12" md="3" lg="3" v-if="user">
        <Sidenav v-bind:data="menuOptions" v-bind:user="user"/>
      </b-col>
      <b-col sm="12" md="6" lg="6" v-if="user">
        <router-view v-bind:user="user" class="body"></router-view>
      </b-col>

      <b-col sm="12" md="10" lg="10" v-if="!user">
        <router-view class="noUserBody"></router-view>
      </b-col>
      <b-col sm="12" md="3" lg="3" v-if="user">
        <div class="rightSidenav">
          <ShowNews />
        </div>
      </b-col>
    </b-row>
   
  </div>
</template>

<script>
import userServices from "./services/userServices";
import Sidenav from "./components/Sidenav";
import Logo from "./components/Logo";
// import FollowPeople from "./components/FollowPeople";
import ShowNews from "./components/ShowNews";

export default {
  name: "App",
  components: {
    Sidenav,
    Logo,
    ShowNews
  },
  data: () => ({
    user: {},
    id: 1,
    menuOptions: [
      { title: "Home", link: "/feed", icon: "house-door" },
      { title: "Profile", link: "/profile", icon: "person" },
      { title: "Follow More", link: "/followPeople", icon: "people" },
      { title: "Logout", link: "/logout", icon: "box-arrow-left" }
    ],
  }),
  created() {
    this.user = userServices.getCurrentUser();
  }
};
</script>
<style scoped>
.title {
  font-weight: 900;
}
.logo{
  margin-top:2%;
  margin-left: 2%;
}
.rightSidenav {
  margin-top: 20px;
  position: absolute;
  z-index: 1;
  right: 100px;
  top: 0;
}
.noUserBody{
  margin-left: 200px;
}
</style>