<template>
  <div class="header">
    <div class="search__id">
      <form class="form">
        <input type="text" placeholder="Search by id..." />
        <button type="submit"></button>
      </form>
    </div>
    <div class="search__login">
      <form class="form">
        <input type="text" placeholder="Search by login..." />
        <button type="submit"></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "tHeader",
  components: {},
  props: {},
  data() {
    return {
      // searchId: "",
      // searchLogin: "",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #a3d0c3;
}
form {
  width: 100%;
  position: relative;
  width: 300px;
  margin: 10px 20px;
}
@media (max-width: 599px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 300px;
  }
}
.search__id input,
.search__login input {
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  outline: none;
  background: #f9f0da;
  color: #9e9c9c;
}
.search__id button,
.search__login button {
  position: absolute;
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  border: none;
  color: #ffff;
  background: #86b0b4 no-repeat center/50% url("../assets/img/icons-search.png");
  border-radius: 5px;
  cursor: pointer;
}
</style>