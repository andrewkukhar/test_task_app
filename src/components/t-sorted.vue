<template>
  <div class="sorted">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "tSort",
  components: {},
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  watch: {},
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style>
.sorted {
  position: relative;
  width: 200px;
  cursor: pointer;
  text-align: left;
}
.title {
  border: 1px solid #aeaeae;
  padding: 8px;
}
.options {
  border: 1px solid #aeaeae;
  background: #fff;
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  padding: 8px;
}
.options p:hover {
  background: #e7e7e7;
}
.sorted p {
  margin: 0;
}
</style>