<template>
  <div class="users">
    <userItem
      v-for="user in USERS"
      :key="user.article"
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
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API", "SELECTED_USER"]),
    selectedUser(data) {
      this.SELECTED_USER(data);
    },
  },
  watch: {},
  mounted() {
    this.GET_USERS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
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