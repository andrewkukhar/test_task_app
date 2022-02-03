<template>
  <div class="users">
    <userItem
      v-for="user in USERS"
      :key="user.name"
      :user_data="user"
      @selectedUser="selectedUser"
    />
  </div>
</template>

<script>
import userItem from "./t-user-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "users",
  components: {
    userItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["USERS", "SELUSER", "SEARCH_VALUE"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API", "SELECTED_USER"]),
    selectedUser(data) {
      this.SELECTED_USER(data);
    },
    sortUserBysearchId(value) {
      this.sortedUsers = [...this.USERS];
      if (value) {
        this.sortedUsers = this.sortedUsers.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedUsers = this.USERS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortUserBysearchId(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_USERS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
        this.sortUserBysearchId(this.SEARCH_VALUE);
      }
    });
  },
};
</script>

<style>
.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.users p {
  padding: 10px;
}
</style>