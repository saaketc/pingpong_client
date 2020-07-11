<template>
  <b-button v-on:click="logoClick" pill size="lg" class="btn">Ping pong</b-button>
</template>

<script>
export default {
  name: "Logo",
  props:{
      user: Object
  },

  methods: {
    logoClick() {
      return window.location = this.user ? '/feed' : '/';
    }
  }
};
</script>

<style scoped>
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