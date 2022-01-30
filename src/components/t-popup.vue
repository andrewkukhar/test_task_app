<template>
  <div class="popup">
    <div class="popup__header">
      <p>{{ title }}</p>
    </div>
    <div class="popup__content">
      <slot></slot>
    </div>
    <div class="popup__footer">
      <button @click="closePop">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tPopup",
  components: {},
  props: {},
  data() {
    return {
      title: "Truck number",
    };
  },
  computed: {},
  methods: {
    closePop() {
      this.$emit("closePop");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.popup {
  width: 150px;
  background-color: rgba(159, 200, 236, 0.952);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 5px 8px 5px #e8e8e8;
  border-radius: 5px;
}
.popup__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.popup__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.popup__header p {
  font-size: 12px;
  white-space: nowrap;
  letter-spacing: 5px;
}
.popup__footer button {
  width: 100px;
  border-radius: 15px;
  background-color: rgb(153, 101, 5);
  padding: 10px 20px;
  cursor: pointer;
}
</style>