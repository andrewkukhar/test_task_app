<template>
  <div class="wrapper">
    <tHeader />
    <div class="main">
      <div class="sidebar">
        <div class="sidebar-list">
          <button @click="toggleEl">users</button>
          <button @click="toggleElSel">selected users</button>
        </div>
      </div>
      <div class="content">
        <users id="userss" v-show="isElVisible" />
        <cartUsers
          id="seluserss"
          v-if="SELUSER.length"
          :seluser_data="SELUSER"
        />
      </div>
    </div>
    <tFooter class="footer" />
  </div>
</template>

<script>
import tHeader from "./t-header";
import users from "../components/t-users";
import cartUsers from "../components/t-cart-users";
import tFooter from "./t-footer";
import { mapGetters } from "vuex";

export default {
  name: "wrapper",
  el: "#userss",
  components: {
    tHeader,
    users,
    cartUsers,
    tFooter,
  },
  props: {},
  data() {
    return {
      toggleEl: true,
      toggleElSel: false
    };
  },
  computed: {
    ...mapGetters(["SELUSER"]),
  },
  methods: {
    toggleEl() {
      this.isElVisible = !this.isElVisible;
    },
    toggleElSel() {
      this.isElVisible = !this.isElVisible;
    },
  },
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
.sidebar-list button {
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