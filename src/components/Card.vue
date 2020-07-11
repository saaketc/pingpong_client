<template>
  <div class="card">
    <div v-if="showName" class="author">
      <b-avatar
        style="background: #e91e63"
        size="sm"
        v-bind:text="
              avatarText(data.firstName + ' ' + data.lastName)
            "
      />
      <b-button pill v-on:click="profile" class="profilebtn"><small >{{ `${data.firstName} ${data.lastName}`}}</small></b-button>
    </div>
    <span v-if="!showName">
      <br />
    </span>
    <div class="container">
      <h6>{{item.content}}</h6>
    </div>
  </div>
</template>

<script>
import { encode } from '../services/utilFunctions';

export default {
  name: "Card",
  props: {
    item: Object,
    data: Object,
    showName: Boolean
  },
  methods: {
    avatarText(string) {
      return string.split(" ")[0][0] + string.split(" ")[1][0];
    },
    profile(){
        return this.$router.push(`/profile?user=${encode(this.data.id)}`);
    }
  }
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  width: 400px;
  height: 150px;
  background: #343434;
  color: white;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  color: white;
  margin-top:20px;
}
.author{
    margin-left:15px;
    margin-top:10px;
    color: #e91e63;
    display: block;
}
.profilebtn{
margin-left: 20px;
}
</style>