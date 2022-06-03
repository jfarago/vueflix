<template>
  <AppHeader/>
  <router-view/>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
body {
  background: black;
    font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
