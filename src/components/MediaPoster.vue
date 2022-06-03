<template>
  <div class="poster">
    <img :src='this.posterURL' alt='Movie Poster'/>
  </div>
</template>

<script>
export default {
  name: 'MediaPoster',
  props: {
    posterURL: String,
  }
};
</script>

<style scoped lang="scss">

img {
  width: 100%;
}
</style>
