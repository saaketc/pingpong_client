<template>
  <div>
    <b-container class="container">
      <h2 style="font-weight: 900;">Follow people to <br> see their pings</h2>
      <br />
      <div v-for="user in users" :key="user.id">
        <b-row class="row">
          <b-col sm="12" md="3" lg="3">
            <h4 class="profile" v-on:click="profile(user.id)">{{ `${user.firstName} ${user.lastName}` }}</h4>
          </b-col>
          <b-col sm="12" md="3" lg="3">
            <b-button
              pill
              class="follow"
              v-on:click="follow(user.id)"
              v-bind:id="user.id"
              v-show="!following[user.id]"
            >Follow</b-button>
            <b-button
              pill
              class="following"
              v-on:click="follow(user.id)"
              v-bind:id="user.id"
              v-show="following[user.id]"
            >Following</b-button>
          </b-col>
        </b-row>
      </div>
      <br />
      <br />
      <router-link class="continue" to="/feed">Continue</router-link>
      <br />
      <br />
      <br />
      <br />
    </b-container>
  </div>
</template>

<script>
import { getData, postData } from "../services/dataServices";
import { encode } from "../services/utilFunctions";

export default {
  name: "FollowPeople",
  data() {
    return {
      users: [],
      following: {},
      followedUsers: []
    };
  },
  props: {
    user: Object
  },
  methods: {
    profile(id) {
      return this.$router.push(`/profile?user=${encode(id)}`);
    },

    async follow(id) {
      try {
        let resource = "";
        this.following[id] = !this.following[id];
        let btn = document.getElementById(id);
        if (this.following[id]) {
          btn.innerHTML = "Following";
          resource = "users/follow.json";
        } else {
          btn.innerHTML = "Follow";
          resource = "users/unfollow.json";
        }
        let formData = new FormData();
        formData.append("follower_id", this.user.user_id);
        formData.append("following_id", id);
        await postData(resource, formData);
      } catch (e) {
        console.log(e.message);
      }
    },
    setFollowed(allUsers, followedUsers) {
      let followed = {};
      // console.log('All users', allUsers);
      // console.log('Followed users', followedUsers);
      for (let user of allUsers)
        for (let followedUser of followedUsers) {
          if (followedUser.id === user.id) {
            followed[user.id] = true;

            console.log("following", user.id);
            break;
          } else {
            followed[user.id] = false;
            console.log("Not following", user.id);
          }
        }
      this.following = { ...followed };
    }
  },
  created() {
    const fetch = async () => {
      try {
        const { data } = await getData("users", { id: this.user.user_id });
        console.log(data.users);
        this.users = data.users.filter(user => user.id !== this.user.user_id);
        this.followedUsers = data.following;
        this.setFollowed(this.users, this.followedUsers);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetch();
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.row {
  margin-top: 20px;
}
.continue {
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  background: white;
  border: 1px solid #e91e63;
  border-radius: 40px;
  color: #e91e63;
  font-weight: 800;
}
.follow {
  background: white;
  border: 1px solid #e91e63;
  color: #e91e63;
  font-weight: 800;
}
.following {
  background: #e91e63;
  border: 1px solid #e91e63;
  color: white;
  font-weight: 800;
}
.follow:hover {
  background: white;
  border: 1px solid #e91e63;
  color: #e91e63;
  font-weight: 800;
}
.following:hover {
  background: #e91e63;
  border: 1px solid #e91e63;
  color: white;
  font-weight: 800;
}
.profile{
   cursor: pointer;
}
</style>
