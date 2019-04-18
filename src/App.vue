<template>
  <div id="app">
    <Header/>

    <router-view/>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  width: 70rem;
  margin: 4rem auto;
  padding: 4rem;
  border-radius: 0.3rem;
  background: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1), 0 0 3rem rgba(0, 0, 0, 0.03);
}
section {
  width: 100%;
}
</style>
