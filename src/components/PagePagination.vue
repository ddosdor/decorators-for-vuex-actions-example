<template>
  <nav class="PagePagination pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous button is-link"
      :disabled="page === 1"
      :class="{ 'is-loading' : isLoading }" 
      @click="previousPage">Previous</a>
    <a class="pagination-next button is-link"
      :disabled="users.length === 0"
      :class="{ 'is-loading' : isLoading }" 
      @click="nextPage">Next page</a>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PagePagination",

  methods: {
    ...mapActions(["setPage"]),
    nextPage() {
      if (this.users.length !== 0) {
        const nextPage = this.page + 1;
        this.setPage(nextPage);
      }
    },
    previousPage() {
      if (this.page !== 1) {
        const previousPage = this.page - 1;
        this.setPage(previousPage);
      }
    }
  },

  computed: {
    ...mapGetters(["page", "users", "pendingStoreActions"]),
    isLoading() {
      return this.pendingStoreActions.includes("getUsers");
    }
  }
};
</script>

<style>
.PagePagination {
  margin: 10px;
}
</style>
