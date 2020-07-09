<template>
  <div>
    <br />
    <h1>Feed</h1>
    <Tweet 
    v-bind:user="user"/>
    <ShowTweets v-bind:tweetsData="feedData" />
  </div>
</template>

<script>
import Tweet from "./Tweet.vue";
import ShowTweets from "./ShowTweets.vue";
import { getData } from "../services/dataServices";

export default {
  name: "Feed",
  components: {
    Tweet,
    ShowTweets,
    
  },
  data() {
    return {
      feedData: []
    };
  },
   props: {
    user: Object
  },
  created() {
    const fetch = async () => {
      try {
        const { data } = await getData("users/feed.json", { userId: this.user.user_id });
        console.log(data.user[0].child_users);
        this.feedData = data.user[0].child_users.reverse();
      } catch (e) {
        console.log(e.message);
      }
    };
    fetch();
  }
};
</script>

<style></style>
