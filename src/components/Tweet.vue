<template>
  <div>
    <br />
    <form v-on:submit.prevent="submitTweet">
      <input type="text" placeholder="What's on your mind?" v-model.lazy="tweet.content" />
      <button type="submit">Ping</button>
    </form>
    <br />
    <div>
      <p>{{tweet.content}}</p>
    </div>
  </div>
</template>

<script>
import { postData } from "../services/dataServices";
export default {
  name: "Tweet",
  data() {
    return {
      tweet: {
        content: "",
        user_id: ""
      }
    };
  },
   props: {
    user: Object
  },
  methods: {
    async submitTweet() {
      try {
        const formData = new FormData();
        formData.append("content", this.tweet.content);
        formData.append("user_id", this.user.user_id);

        const { data } = await postData("tweets.json", formData);
        this.tweet = data.tweet;
        // console.log(data.tweet);
      } catch (e) {
        console.log(e.message);
      }
    }
  }
};
</script>

<style></style>
