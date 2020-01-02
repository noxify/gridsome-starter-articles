<template>
  <nav role="navigation" aria-label="pagination">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-bind:class="{ disabled: isFirstPage(currentPage, totalPages) }">
        <g-link :to="previousPage(currentPage,totalPages)" class="page-link" tabindex="-1" >Previous</g-link>
      </li>
      <li v-for="page in pages" :key="page.name" class="page-item" v-bind:class="{ active: isCurrentPage(currentPage, page.name) }">
        <g-link
          :to="page.link"
          class="page-link"
          :aria-label="page.name"
          :aria-current="page.name"
        >{{page.name}}</g-link>
      </li>
      <li class="page-item " v-bind:class="{ disabled: isLastPage(currentPage, totalPages) }">
        <g-link :to="nextPage(currentPage,totalPages)" class="page-link" tabindex="-1" >Next</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    baseUrl: String,
    currentPage: Number,
    totalPages: Number,
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    isFirstPage(currentPage, totalPages) {
        return currentPage == 1;
    },
    isLastPage(currentPage, totalPages) {
        return currentPage == totalPages;
    },
    isCurrentPage(currentPage, pageElement) {
        return currentPage == pageElement;
    },
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`;
    },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`
        });
      }
      return range;
    }
  }
};
</script>