<template>
  <div class="sidenav">
        
        <br>
     <Logo v-bind:user="user"/>
        <br>
        <br>
         <br>
        <br>
    <router-link
      v-for="item in data"
      :key="item.title"
      v-bind:to="item.link"
      class="link"
    >
      <b-row>
        <b-col md="2" lg="2">
          <b-icon class="h2 mb2" v-bind:icon="item.icon"></b-icon>
        </b-col>
        <b-col md="5" lg="5">
          <h4 class="menu">{{ item.title }}</h4>
        </b-col>
      </b-row>
    </router-link>
    <br />
  
  </div>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "Sidenav",
  props: {
    data: Array,
    user: Object
  },
 
  components: {
    Logo
  },
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  /* padding-top: 50px; */
  /* margin-left: 100px; */
  /* margin-top: 80px; */
  /* border-right: 1px solid gray; */
}

.menu {
  font-weight: 900;
}
.link {
  text-decoration: none;
  color: white;
}
.btn {
  padding-right: 30px;
  padding-left: 30px;

  border: 1px solid #e91e63;
  /* border-radius: 40px; */
  background: #e91e63;
  color: white;
  font-weight: 700;
}
.btn:hover {
  border: 1px solid #ec5386;
  /* border-radius: 40px; */
  background: #ec5386;
  color: white;
  font-weight: 700;
}
</style>
