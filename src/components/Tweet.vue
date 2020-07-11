<template>
  <div>
    <br />
    <form v-on:submit.prevent="submitTweet">
       <div style="margin-left: 10px">
      <textarea type="text" placeholder="What's on your mind?" class="tweet" v-model.lazy="tweet.content" rows='4'></textarea>
      <br>
     
      <b-button pill class="btn" type="submit">Ping</b-button>
      </div>
      <div v-if="tweet.content.trim()" style="margin-top:20px; margin-left:10px; margin-bottom:5px">
        <Card
        v-bind:item="tweet"
        v-bind:data="user"
        v-bind:showName="true"/>
      </div>
    </form>
    <br />
   
  </div>
</template>

<script>
import { postData } from "../services/dataServices";
import Card from "./Card";

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
  components:{
    Card
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
        this.tweet = data.tweet.trim();

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
  padding-top: 5px;
  /* padding-bottom: 0px; */
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 50px;
  text-align: left;

}

.btn {
  padding-right: 50px;
  padding-left:50px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
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
