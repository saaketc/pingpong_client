<template>
  <div>
    <h2 class="title">
      What's happening
      <br />around?
    </h2>
    <div class="card" v-for="item in news" :key="item.title">
      <small style="color:#e91e63; margin-left:15px;">{{item.author}}</small>
      <div class="container">
        <h6>{{stringSlice(item.title)}}</h6>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { stringSlice } from "../services/utilFunctions";
import { getNews } from "../services/dataServices";

export default {
  name: "ShowNews",
  data() {
    return {
      news: {}
    };
  },
  methods: {
    stringSlice
  },
  props: {
    user: Object
  },
  created() {
    const fetchNews = async () => {
      try {
        const { data } = await getNews();
        console.log(data);
        this.news = data.articles;
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchNews();
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
  height: 100px;
  background: #343434;
  color: white;
  margin-top: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  color: white;
  margin-top: 10px;
}
.title {
  font-weight: 900;
}
</style>