<template>
  <div class="poster">
    <img :src='this.posterURL' alt='Movie Poster'/>
    <div class="tv-badge" v-if="this.mediaType === 'tv'">TV</div>
  </div>
</template>

<script>
export default {
  name: 'MediaPoster',
  props: {
    posterURL: String,
    mediaType: String,
  }
};
</script>

<style scoped lang="scss">
.poster {
  position: relative
}

img {
  width: 100%;
}

.tv-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color:black;
  border-radius: 4px;
  color: white;
  opacity: 70%;
  padding: 8px;

}
</style>
