<template>
  <div>
    <div v-for="tweet in tweetsData" :key="tweet.id">
      <TweetItem v-bind:tweetItem="tweet" v-bind:showName="showName"/>
    </div>
  </div>
</template>

<script>
import TweetItem from "./TweetItem";
export default {
  name: "ShowTweets",
  props: {
    tweetsData: Array,
    showName: Boolean
  },
  components: {
    TweetItem
  }
};
</script>

<style>
</style>