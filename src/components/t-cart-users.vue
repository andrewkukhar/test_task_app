<template>
  <div class="cart-users">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "cartUsers",
  components: {},
  props: {},
  data() {
    return {
      title: "selected users",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.cart-users {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>