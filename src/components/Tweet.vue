<template>
  <div>
    <br />
    <form v-on:submit.prevent="submitTweet">
       <div style="textAlign: center">
      <input type="text" placeholder="What's on your mind?" class="tweet" v-model.lazy="tweet.content" />
      <br>
     
      <b-button pill class="btn" type="submit">Ping</b-button>
      </div>
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

<style scoped>
.tweet{
  padding-right: 200px;
  padding-left: 200px;
  padding-top: 60px;
  padding-bottom: 60px;
  border: 2px solid black;
  border-radius: 50px;

}

.btn {
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
align-items:center;
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
