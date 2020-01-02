<template>
  <div class="sidebar position-sticky">
    <div class="toc" v-if="subtitles.length > 0">
      <h6>On this page</h6>
      <ul class="pl-0">
        <li
          class="toc-item"
          :class="'toc-item-level-' + subtitle.depth"
          v-for="subtitle in subtitles"
          :key="subtitle.value"
        >
          <a class="toc-link" :href="subtitle.anchor">{{ subtitle.value }}</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  props: ["record"],

  computed: {
    subtitles() {
      // source: https://github.com/gridsome/gridsome.org/blob/master/src/templates/DocPage.vue
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.record.headings.filter(function(value, index, arr) {
        return [2, 3].includes(value.depth);
      });
      return subtitles;
    }
  }
};
</script>