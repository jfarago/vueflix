<template>
  <div class="header">
    <h1>Vueflix</h1>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/popular">Popular</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String,
  },
  data() {
    return {
      test: 1
    };
  }
};
</script>

<style scoped lang="scss">

.header {
  height: 65px;
}
h1 {
  margin: 12px;
  color: red;
  float: left;
}

a {
  margin-left: 24px;
  line-height: 55px;
  font-weight: bold;
  color: lightgray;
  text-decoration: none;

  &.router-link-exact-active {
    color: white;
  }
}
</style>
