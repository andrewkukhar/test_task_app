<template>
  <div class="users__item">
    <img
      class="avatar"
      :src="require('../assets/img/1.jpg')"
      alt="users-avatar"
    />
    <a href="#user-info">
      <h3>{{ user_data.name }}</h3>
    </a>
    <p>Login: {{ user_data.login }}</p>
    <button @click="selected">select</button>
  </div>
</template>

<script>
export default {
  name: "users",
  components: {},
  props: {
    user_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    selected() {
      this.$emit("sendName", this.user_data.name);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.users__item {
  max-width: 299px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 1 25%;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: 5px;
  margin-bottom: 5px;
}
.users__item img {
  border-radius: 50%;
  width: 150px;
}
.users__item a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.users__item button {
  width: 100px;
  border-radius: 15px;
  background-color: orange;
  padding: 10px 20px;
  cursor: pointer;
}
.users__item p {
  padding: 0 5px;
}
@media (max-width: 599px) {
  .users__item {
    max-width: 249px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 #e8e8e8;
    padding: 4px;
    margin-bottom: 3px;
  }
  .users__item img {
    width: 75px;
  }
  .users__item button {
    width: 75px;
    padding: 5px 10px;
  }
}
</style>