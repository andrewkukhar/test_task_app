<template>
  <div class="cart-user-item">
    <img :src="require('../assets/img/1.jpg')" alt="users-avatar" />
    <div class="cart-user-item-info">
      <p>{{ seluser_item.name }}</p>
      <p>{{ seluser_item.login }}</p>
    </div>
    <div class="cart-user-item-quantity"></div>
    <button @click="deleteUser">delete</button>
  </div>
</template>

<script>
export default {
  name: "cartUserItem",
  components: {},
  props: {
    seluser_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      title: "selected user item",
    };
  },
  computed: {},
  methods: {
    deleteUser() {
      this.$emit("deleteUser");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.cart-user-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px 0 #e8e8e8;

  margin: 10px 0;
}
.cart-user-item img {
  border-radius: 50%;
  width: 150px;
}
</style>