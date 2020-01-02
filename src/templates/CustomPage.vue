<template>
  <DefaultLayout>

    <SectionHeaderBanner :record="$page.entry"></SectionHeaderBanner>

    <section class="pt-5 mb-5">
      <b-container>
        <b-row v-if="!showSidebar">
          <b-col>
            <div v-html="$page.entry.content" />
          </b-col>
        </b-row>

        <b-row v-if="showSidebar">
          <b-col order="2" order-lg="1" cols="12" lg="8" class="article-content">
            <div v-html="$page.entry.content" />
          </b-col>
          <b-col lg="3" order="1" order-lg="2" offset-lg="1" class="">
            <SectionSidebar :record="$page.entry"></SectionSidebar>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </DefaultLayout>
</template>

<page-query>
  query ($id: ID!) {
    entry : customPage(id: $id) {
      title
      subtitle
      image
      content
      sidebar
      headings {
        depth,
        value,
        anchor
      },
    }
  }
</page-query>

<script>
import SectionHeaderBanner from '~/layouts/sections/customPage/HeaderBanner.vue';
import SectionSidebar from "~/layouts/sections/customPage/Sidebar.vue";

export default {
  components : {
    SectionHeaderBanner,
    SectionSidebar
  },
  computed:{
    showSidebar() {
      return (this.$page.entry.sidebar) ? true : false;
    }
  },
  metaInfo() {
    return {
      title: this.$page.entry.title
    }
  }
}
</script>
