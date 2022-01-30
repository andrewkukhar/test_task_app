<template>
  <div class="cart-users">
    <h3>selected users</h3>
    <cartUserItem
      v-for="(item, index) in seluser_data"
      :key="item.name"
      :seluser_item="item"
      @deleteUser="deleteUser(index)"
    />
  </div>
</template>

<script>
import cartUserItem from "./t-cart-user-item.vue";
import { mapActions } from "vuex";
export default {
  name: "cartUsers",
  components: {
    cartUserItem,
  },
  props: {
    seluser_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["DELETE_USER"]),
    deleteUser(index) {
      this.DELETE_USER(index);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.cart-users {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>