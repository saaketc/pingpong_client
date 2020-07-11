<template>
  <div>
    <br>
    <h4>Profile</h4>
    <h1 v-if="!loading" class="title">{{ `${profileUser.firstName} ${profileUser.lastName}` }}</h1>
    <h3 v-else-if="loading">Loading...</h3>
    <br>
    <h3 class="subtitle" v-show="!loading && profileUser.tweets.length > 0">Pings</h3>
    <h3 class="subtitle" v-show="!loading && profileUser.tweets.length === 0">No pings yet...</h3>
    <br>
    <TweetItem v-bind:tweetItem="profileUser" v-bind:showName="showName"/>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { getData } from "../services/dataServices";
import TweetItem from "./TweetItem";
import { decode } from '../services/utilFunctions';

export default {
  name: "Profile",
  data() {
    return {
      profileUser: {},
      loading: true,
      showName: false,
    };
  },
  props: {
    user: Object,
      query: String

  },
  components:{
    TweetItem
  },
  created() {
    const fetch = async () => {
      try {
        this.query = this.query ? decode(this.query) : this.query;
        // this.query = encode(this.query);
        const id = this.query ? this.query : this.user.user_id;
        const { data } = await getData(`users/${id}.json`);
        console.log(data);
        this.profileUser = data;
        this.loading = false;
      } catch (e) {
        console.log(e.message);
      }
    };
    fetch();
  }
};
</script>

<style scoped>
.title{
  font-weight: 900;
}
.subtitle{
  font-weight: 700;
}
</style>
