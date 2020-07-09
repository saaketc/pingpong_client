<template>
  <div>
    <h1>Follow page</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>{{`${user.firstName} ${user.lastName}`}}</p>
        <button v-on:click="follow(user.id)" v-if="!following">Follow</button>
        <button v-on:click="unfollow(user.id)" v-else-if="following">Unfollow</button>
      </li>
    </ul>
    <br>
    <router-link to="/feed">Continue</router-link>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { getData, postData } from "../services/dataServices";

export default {
  name: "FollowPeople",
  data() {
    return {
      users: [],
      following: false
    };
  },
  props: {
    user: Object
  },
  methods: {
    async follow(id) {
      // alert(`following user ${id}`);

      try {
        let formData = new FormData();
        formData.append("follower_id", this.user.user_id );
        formData.append("following_id", id);
        await postData("users/follow.json", formData);
        this.following = true;
      } catch (e) {
        console.log(e.message);
      }
    },
     async unfollow(id) {
      // alert(`following user ${id}`);

      try {
        let formData = new FormData();
        formData.append("follower_id", this.user.user_id );
        formData.append("following_id", id);
        await postData("users/unfollow.json", formData);
        this.following = false;
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  created() {
    const fetch = async () => {
      try {
        const { data } = await getData("users");
        console.log(data.users);
        this.users = data.users;
      } catch (e) {
        console.log(e.message);
      }
    };
    fetch();
  }
};
</script>

<style></style>
