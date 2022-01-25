<template>
  <div class="content">
    <p>{{ title }}</p>
    <users />
  </div>
</template>

<script>
import users from "./t-users";

export default {
  name: "tSidebar",
  components: {
    users,
  },
  props: {},
  data() {
    return {
      title: "user list",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>