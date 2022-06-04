<template>
  <div class="header">
    <h1>Vueflix</h1>
    <nav>
      <router-link to="/all">All</router-link>
      <router-link to="/movies">Movies</router-link>
      <router-link to="/tv">TV</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String,
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
  line-height: 60px;
  font-weight: bold;
  color: darkgray;
  text-decoration: none;

  &.router-link-exact-active {
    color: white;
  }
}
</style>
