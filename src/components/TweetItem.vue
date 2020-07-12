<template>
  <div>
    <div
      style="margin-top:10px; backgound: #121212"
      align="left"

      v-for="item in tweetItem.tweets"
      :key="item.id"
    >
      <Card v-bind:item="item" v-bind:data="tweetItem" v-bind:showName="showName"/>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  props: {
    tweetItem: Object,
    showName: Boolean
  },
  components: {
    Card
  },
 
};
</script>


