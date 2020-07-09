<template>
  <div>
    <form v-on:submit.prevent="login">
      <input type="email" placeholder="Email" v-model="user.email" />
      <input type="password" placeholder="Password" v-model="user.password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import userServices from "../../services/userServices";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        let formData = new FormData();
        formData.append("email", this.user.email);
        formData.append("password", this.user.password);
        const { data } = await userServices.loginUser(formData);
        userServices.setUser(data.token);
        if (data.user && data.user === null) {
          return this.$toasted.show(data.message);
        }

        window.location = "/feed";
        this.$toasted.show(data.message);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style></style>
