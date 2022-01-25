<template>
  <div class="sidebar-list">
    <div>
      <router-link :to="{ path: '/src/components/t-users.vue' }">
        <button>users</button>
      </router-link>
    </div>
    <div>
      <router-link :to="{ path: '/src/components/t-cart-users.vue' }">
        <button>selected users</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "tSidebar",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
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
</style>