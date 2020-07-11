<template>
  <div>
    
      <Tweet v-bind:user="user" />
      <div class="main">
      <ShowTweets v-bind:tweetsData="feedData" v-bind:showName="showName"/>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import Tweet from "./Tweet.vue";
import ShowTweets from "./ShowTweets.vue";
// import Sidenav from "./Sidenav.vue";
import { getData } from "../services/dataServices";

export default {
  name: "Feed",
  components: {
    Tweet,
    ShowTweets,
    // Sidenav,
  },
  data() {
    return {
      feedData: [],
      showName: true
    };
  },
  props: {
    user: Object,
  },
 

  created() {
    const fetch = async () => {
      try {
        const { data } = await getData("users/feed.json", {
          userId: this.user.user_id,
        });
        console.log(data.user[0].child_users);
        this.feedData = data.user[0].child_users.reverse();
      } catch (e) {
        console.log(e.message);
      }
    };
    fetch();
  },
};
</script>

<style scoped>
.main {
  background: rgb(255,255,254);
  margin-left: 10px;
}
</style>
