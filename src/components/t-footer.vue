<template>
  <div class="footer">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "tFooter",
  components: {},
  props: {},
  data() {
    return {
      title: "test app footer",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.footer {
  width: 100%;
  background: orange;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.footer p {
  letter-spacing: 5px;
}
</style>