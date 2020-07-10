<template>
  <div class="sidenav">
        <b-card
        style="height: 100%; border-top:none; border-left:none"
        >
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
    <Modal 
   v-bind:user="user"/>
        </b-card>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "Sidenav",
  props: {
    data: Array,
    user: Object
  },
  components: {
    Modal,
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
  background-color: white;
  overflow-x: hidden;
  /* padding-top: 50px; */
  margin-left: 100px;
  /* margin-top: 80px; */
  /* border-right: 1px solid gray; */
}

.menu {
  font-weight: 900;
}
.link {
  text-decoration: none;
  color: black;
}
</style>
