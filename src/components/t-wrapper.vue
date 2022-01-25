<template>
  <div class="wrapper">
    <p>{{ title }}</p>
    <tHeader />
    <div class="main">
      <tSidebar class="sidebar" />
      <tContent class="content" />
    </div>
    <tFooter class="footer" />
  </div>
</template>

<script>
import tHeader from "./t-header";
import tSidebar from "./t-sidebar";
import tContent from "./t-content";
import tFooter from "./t-footer";

export default {
  name: "wrapper",
  components: {
    tHeader,
    tSidebar,
    tContent,
    tFooter,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
  font-size: 24px;
  overflow-x: hidden;
}
.main {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.sidebar {
  width: 100%;
  height: 100%;
  flex: 1 1 20%;
}
.content {
  background-color: rgb(135, 199, 71);
  flex: 1 1 75%;
}
</style>