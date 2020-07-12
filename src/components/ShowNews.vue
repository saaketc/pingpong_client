<template>
  <div>
    <h2 class="title">
      What's happening
      <br />around?
    </h2>
    <br />
    <h4 class="title loading" style="color: #e91e63" v-show="loading">Getting news...</h4>

    <div
      class="main"
      v-on:click="gotToArticle(item.link)"
      v-for="item in news"
      :key="item.title"
    >
      <img
        v-bind:src="item.primary_image_link"
        width="300"
        height="200"
        alt=""
      />
      <div class="container">
        <h6 class="title" >{{ stringSlice(item.title) }}</h6>
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
      news: {},
      loading: true,
    };
  },
  methods: {
    stringSlice,
    gotToArticle(link) {
      return window.open(link, "_blank");
    },
  },
  props: {
    user: Object,
  },
  created() {
    const fetchNews = async () => {
      try {
        const { data } = await getNews();
        console.log(data.articles);
        this.news = data.articles;
        this.loading = false;
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchNews();
  },
};
</script>

<style scoped>
.loading{
  margin-top: 30%;
}
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
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  color: black;
  margin-top: 20px;
}
.title {
  font-weight: 900;
}
.main {
  cursor: pointer;
  margin-top: 40px;
}
</style>
