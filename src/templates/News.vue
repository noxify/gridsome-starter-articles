<template>
  <DefaultLayout>
    <SectionHeader :record="$page.entry"></SectionHeader>

    <b-container class="mt-5 mb-5 ">
      <b-row>
        <b-col order="2" order-lg="1" cols="12" lg="8" class="article-content">
          <div v-html="$page.entry.content" />
        </b-col>
        <b-col lg="3" order="1" order-lg="2" offset-lg="1" class="">
          <SectionSidebar :record="$page.entry"></SectionSidebar>
        </b-col>
      </b-row>
    </b-container>
  </DefaultLayout>
</template>

<page-query>
  query ($id: ID!) {
    entry : news(id: $id) {
      title
      content,
      excerpt,
      createdAt(format:"Do MMMM YYYY"),
      timeToRead,
      tags {
          title,
          path
      },
      headings {
        depth,
        value,
        anchor
      },
    }
  }
</page-query>

<script>

import SectionHeader from "~/layouts/sections/article/HeaderBanner.vue";
import SectionSidebar from "~/layouts/sections/article/Sidebar.vue";

export default {
  components: {
    SectionHeader,
    SectionSidebar
  },

  metaInfo() {
    return {
      title: this.$page.entry.title
    }
  }
};
</script>

<style>
@import 'https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css';
</style>