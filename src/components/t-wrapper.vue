<template>
  <div class="wrapper">
    <tHeader />
    <div class="main">
      <div class="sidebar">
        <div class="sidebar-list">
          <router-link class="btn-sisebar" to="/list">users</router-link>
          <router-link
            class="btn-sisebar"
            :to="{ name: 'cartlist', params: { seluser_data: SELUSER } }"
            >selected users</router-link
          >
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <tFooter class="footer" />
  </div>
</template>

<script>
import tHeader from "./t-header";
import tFooter from "./t-footer";
import { mapGetters } from "vuex";

export default {
  name: "wrapper",
  components: {
    tHeader,
    tFooter,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["SELUSER"]),
  },
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
.sidebar-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  text-align: start;
}
.btn-sisebar {
  width: 100%;
  background-color: orange;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 5px 20px;
  margin: 5px 0;
}
.content {
  background-color: rgb(135, 199, 71);
  flex: 1 1 75%;
}
</style>