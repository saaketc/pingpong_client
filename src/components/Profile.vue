<template>
<div>
<h1>Profile</h1>
<br/>
<h3 v-if="!loading">{{`${user.firstName} ${user.lastName}`}}</h3>
<h3 v-else-if="loading">Loading...</h3>
<br/>
<h4>Tweets</h4>
<br/>
<ul v-if="!loading">
    <li v-for="tweet in user.tweets.reverse()"  v-bind:key="tweet.id">
        <p>{{tweet.content}}</p>
    </li>
</ul>

</div>
</template>

<script>
import { getData } from '../services/dataServices';
export default {
  name: "Profile",
  data() {
    return {
        user:{},
        userId: 3,
        loading: true
    };
  },
  created(){
      
       const fetch = async () => {
           try{
           const {data} = await getData(`users/${this.userId}.json`);
           console.log(data);
           this.user = data;
           this.loading = false
           }
           catch(e){
          console.log(e.message);
      }
    
      }
      fetch();
  }
};
</script>

<style>
</style>