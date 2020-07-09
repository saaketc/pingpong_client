<template>
  <div>
    <form v-on:submit.prevent="signup">
      <input type="text" placeholder="First name" v-model="user.firstName" />
      <input type="text" placeholder="Last name" v-model="user.lastName" />
      <input type="email" placeholder="Email" v-model="user.email" />
      <input type="password" placeholder="Password" v-model="user.password" />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import userServices from '../../services/userServices';

export default {
  name: "Signup",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  },
  methods:{
     async signup(){
        try{
          let formData = new FormData();
          formData.append('firstName', this.user.firstName);
          formData.append('lastName', this.user.lastName);
          formData.append('email', this.user.email);
          formData.append('password', this.user.password);
          const { data } = await userServices.registerUser(formData);
          userServices.setUser(data.token);
          window.location = '/followPeople';
        }catch(e){
            console.log(e.message);
        }
      }
  }
};
</script>

<style>
</style>