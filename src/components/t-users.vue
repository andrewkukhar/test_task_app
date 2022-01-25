<template>
  <div class="users">
    <userItem
      v-for="user in USERS"
      :key="user.article"
      :user_data="user"
      @sendName="showNameConsole"
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
    return {
      users: [
        {
          id: 1,
          image: "../test_app/src/assets/img/1.jpg",
          name: "Andrey",
          login: "usernumb1",
        },
        {
          id: 2,
          image: "../test_app/src/assets/img/1.jpg",
          name: "Vadim",
          login: "usernumb2",
        },
        {
          id: 3,
          image: "../test_app/src/assets/img/1.jpg",
          name: "Vlad",
          login: "usernumb3",
        },
        {
          id: 4,
          image: "../test_app/src/assets/img/1.jpg",
          name: "Sergey",
          login: "usernumb4",
        },
        {
          id: 5,
          image: "../test_app/src/assets/img/1.jpg",
          name: "Slavik",
          login: "usernumb5",
        },
        {
          id: 6,
          image: "../test_app/src/assets/img/1.jpg",
          name: "Ruslan",
          login: "usernumb6",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
    showNameConsole(data) {
      console.log(data);
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