<template>
  <div class="sidebar-list">
    <a href="">users</a>
    <a href="">selected users</a>
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
.sidebar-list a {
  width: 100%;
  background-color: orange;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  margin: 5px 0;
}
</style>