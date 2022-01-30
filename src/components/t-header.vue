<template>
  <div class="header">
    <tSort
      class="sorted"
      :options="options"
      @select="sortCategories"
      :selected="selected"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tSort from "./t-sorted";

export default {
  name: "tHeader",
  components: {
    tSort,
  },
  props: {},
  data() {
    return {
      options: [
        { name: "Search", value: "all" },
        { name: "id", value: "1" },
        { name: "login", value: "userName" },
      ],
      selected: "Search",
      sortedUsers: [],
    };
  },
  computed: {
    ...mapGetters(["USERS", "SELUSER"]),
    // filteredUsers() {
    //   if (this.sortedUsers.length) {
    //     return this.sortedUsers;
    //   } else {
    //     return this.USERS;
    //   }
    // },
  },
  methods: {
    sortCategories(options) {
      this.sortedUsers = [];
      let su = this;
      this.USERS.map(function (item) {
        if (item.options === options.name) {
          su.sortedUsers.push(item);
        }
      });
      this.selected = options.name;
    },
    optionSelect(option) {
      this.selected = option.name;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;
  align-items: center;
  background: #a3d0c3;
}
.sorted {
  z-index: 13;
  width: 250px;
  margin: 15px 0px;
  border: 1px solid azure;
}
/* form {
  width: 100%;
  position: relative;
  width: 300px;
  margin: 10px 20px;
}
@media (max-width: 599px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 300px;
  }
} */
/* .search__id input,
.search__login input {
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  outline: none;
  background: #f9f0da;
  color: #9e9c9c;
}
.search__id button,
.search__login button {
  position: absolute;
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  border: none;
  color: #ffff;
  background: #86b0b4 no-repeat center/50% url("../assets/img/icons-search.png");
  border-radius: 5px;
  cursor: pointer;
} */
</style>