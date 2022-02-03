<template>
  <div class="header">
    <input type="text" v-model="searchValue" />
    <button>
      <i @click="searchId(searchValue)" class="material-icons">search</i>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "tHeader",
  components: {},
  props: {},
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE", "USERS", "SELUSER"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE_TO_VUEX"]),
    searchId(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== "/list") {
        this.$router.push("/list");
      }
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
.header {
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;
  align-items: center;
  background: #a3d0c3;
}
.header input {
  height: 30px;
}
.sorted {
  z-index: 13;
  width: 250px;
  margin: 15px 0px;
  border: 1px solid azure;
}
</style>