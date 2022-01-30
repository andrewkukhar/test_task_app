<template>
  <div class="users__item">
    <img
      class="avatar"
      :src="require('../assets/img/1.jpg')"
      alt="users-avatar"
    />
    <tPopup class="popup__pos" v-if="isVisiblePop" @closePop="closePop">
      <p>{{ user_data.info }}</p>
    </tPopup>
    <a class="show-info" href="#user-info" @click="showInfo">
      <h3>{{ user_data.name }}</h3>
    </a>
    <p>Login: {{ user_data.login }}</p>
    <button @click="selectedUser">select</button>
  </div>
</template>

<script>
import tPopup from "./t-popup";
import toFix from "../filters/toFix";
export default {
  name: "users",
  components: {
    tPopup,
  },
  props: {
    user_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isVisiblePop: false,
    };
  },
  filters: {
    toFix
  },
  computed: {},
  methods: {
    showInfo() {
      this.isVisiblePop = true;
    },
    closePop() {
      this.isVisiblePop = false;
    },
    selectedUser() {
      this.$emit("selectedUser", this.user_data);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.users__item {
  position: relative;
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
.popup__pos {
  z-index: 12;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
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
.show-info {
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