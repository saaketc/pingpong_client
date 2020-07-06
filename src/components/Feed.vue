<template>
  <div>
    <router-link to="/profile">Go to profile</router-link>
    <br>
    <h1>Feed</h1>
    <Tweet />
  </div>
</template>

<script>
import Tweet from "./Tweet.vue";

export default {
  name: "Feed",
  components: {
    Tweet
  }
};
</script>

<style></style>
