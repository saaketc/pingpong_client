<template>
  <div>
    <div
      border-variant="light"
      style="margin-top:10px;"
      align="left"
      v-for="item in tweetItem.tweets"
      :key="item.id"
    >
      <b-row>
        <b-col md='2' lg='2'>
          <b-avatar
            style="background: #e91e63"
            v-bind:text="
              avatarText(tweetItem.firstName + ' ' + tweetItem.lastName)
            "
          />
        </b-col>
        <b-col md='3' lg='3'>
          <b-card-title style="font-size: 15px; text-align:left">{{
            `${tweetItem.firstName} ${tweetItem.lastName}`
          }}</b-card-title>
        </b-col>
      </b-row>

      <b-card-text style="margin-left:110px">{{ item.content }}</b-card-text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweetItem: Object,
  },
  methods: {
    avatarText(string) {
      return string.split(" ")[0][0] + string.split(" ")[1][0];
    },
  },
};
</script>

<style scoped>

</style>
