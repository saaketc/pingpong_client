<template>
  <div>
  <h1>Follow page</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{`${user.firstName} ${user.lastName}`}}
    </li>
  </ul>
  </div>
</template>

<script>
import { getData } from "../services/dataServices";

export default {
  name: "FollowPeople",
  data() {
    return {
      users: [],
    };
  },
  created() {
    const fetch = async () => {
      try {
        const { data } = await getData("users.json");
        console.log(data.users);
        this.users = data.users;
      } catch (e) {
        console.log(e.message);
      }
    };
    fetch();
  },
};
</script>

<style></style>
