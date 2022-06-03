<template>
  <div class="layout">
    <div class="media-container" v-for="item in this.media" :key="item.id">
    <MediaPoster
      :posterURL="item.posterURL"
      :mediaType="item.mediaType"
    />
    </div>
  </div>
</template>

<script>
import { getPopularMedia } from '@/utils/tmdbAPI';
import MediaPoster from '@/components/MediaPoster.vue';

export default {
  name: 'HomeView',
  components: {
    MediaPoster
  },
  data() {
    return {
      media: []
    };
  },
  async created() {
    this.media = await getPopularMedia();
    console.log(this.media);
  }
};
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  padding: 0 12px;
}
</style>
