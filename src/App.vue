<template>
  <div id="app">
    <PagePagination />
    <UsersList :users="users" :is-loading="isLoading"/>
    <label>Pending vuex actions:</label>
    <pre>{{ pendingStoreActions }}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "./store";
import PagePagination from "./components/PagePagination";
import UsersList from "./components/UsersList";

export default {
  name: "App",
  store,
  components: {
    PagePagination,
    UsersList
  },

  created() {
    this.getUsers();
  },

  methods: {
    ...mapActions(["getUsers"])
  },

  computed: {
    ...mapGetters(["users", "pendingStoreActions"]),
    isLoading() {
      return this.pendingStoreActions.includes("getUsers");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  color: #2c3e50;
}
</style>
