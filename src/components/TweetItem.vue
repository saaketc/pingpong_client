<template>
  <div>
      <div v-for="item in tweetItem.tweets" :key="item.id">
      <h8>{{`${tweetItem.firstName} ${tweetItem.lastName}`}}</h8>
      <p>{{item.content}}</p>
      </div>
  </div>
</template>

<script>
export default {
props:{
    tweetItem: Object
}
}
</script>

<style>

</style>