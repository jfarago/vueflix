<template>
  <div class="layout">
    <div class="media-container" v-for="item in this.media" :key="item">{{item}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      media: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }
};
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
}
.media-container {
  border: 1px solid white;
  height: 200px;
}
</style>
