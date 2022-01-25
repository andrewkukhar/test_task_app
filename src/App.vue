<template>
  <h1>TEST - APP</h1>
  <wrapper />
</template>

<script>
import wrapper from "./components/t-wrapper.vue";
export default {
  name: "App",
  components: {
    wrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>