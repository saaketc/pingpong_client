<template>
  <div>
    <b-button pill size="lg" class="btn" v-b-modal.modal-prevent-closing
      >Ping pong</b-button
    >

    <div class="mt-3">
    
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      size="lg"
    >
      <Tweet 
      v-bind:user="user"/>
    </b-modal>
  </div>
  </div>
</template>

<script>
import Tweet from "./Tweet";

export default {
  name: "Modal",
  components: {
    Tweet,
  },
  props: {
    user: Object,
  },
 
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
