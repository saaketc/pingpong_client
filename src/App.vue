<template>
<div>
  
 <b-row>
  
      <b-col sm="12" md="3" lg="3">
       <Sidenav
       v-if="user"
       v-bind:user="user"
       v-bind:data="menuOptions"/> 
      </b-col>
      <b-col sm="12" md="6" lg="6">   
    <router-view v-bind:user="user"></router-view>
      </b-col>
 </b-row>
</div>
</template>

<script>
import userServices from "./services/userServices";
import Sidenav from "./components/Sidenav";
export default {
  name: "App",
  components: {
    Sidenav
  },
  data: () => ({
    user: {},
    menuOptions: [
        { title: "Home", link: "/feed", icon: "house-door" },
        { title: "Profile", link: "/profile", icon: "person" },
        { title: "Follow More", link: "/followPeople", icon: "people" },
        { title: "Logout", link: "/logout", icon: "box-arrow-left" },
      ],
  }),
  created() {
    this.user = userServices.getCurrentUser();
  },
};
</script>
