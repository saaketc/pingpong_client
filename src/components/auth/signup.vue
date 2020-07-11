<template>
  <div>
    <div class="body">
      <h1>Join Ping pong to express your expressions!</h1>
    </div>
    <form v-on:submit.prevent="signup">
      <div class="container">
        <label for="firstName">
          <b>First Name</b>
        </label>
        <input type="text" name="firstName" v-model="user.firstName" placeholder="Your first name" required />
        <label for="lastName">
          <b>Last Name</b>
        </label>
        <input type="text" name="lastName" v-model="user.lastName" placeholder="Your last name" required />

        <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" v-model="user.email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" v-model="user.password" required>

        <div class="clearfix">
          <button type="submit" class="signupbtn">Lets ping pong</button>
        </div>
      </div>
    </form>
    <div style="margin-bottom: 10%">
      <p>
        Already on Ping pong?
        <router-link to="/login" style="color: #e91e63">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import userServices from "../../services/userServices";

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
  methods: {
    async signup() {
      try {
        let formData = new FormData();
        formData.append("firstName", this.user.firstName);
        formData.append("lastName", this.user.lastName);
        formData.append("email", this.user.email);
        formData.append("password", this.user.password);
        const { data } = await userServices.registerUser(formData);
        userServices.setUser(data.token);
        window.location = "/followPeople";
      } catch (e) {
        console.log(e.message);
      }
    }
  }
};
</script>

<style scoped>
/* Full-width input fields */
input[type="text"],input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
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
  font-size: 20px;
}

button:hover {
  opacity: 1;
}

/* Float cancel and signup buttons and add an equal width */
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.body {
  margin-top: 5%;
  font-weight: 800;
  /* margin-bottom: 10%; */
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>