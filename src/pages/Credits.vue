<template>
  <DefaultLayout>
    <SectionHeaderBanner></SectionHeaderBanner>
    <section class="pt-5 mb-5">
      <b-container>
        <b-row>
          <CreditCard v-for="edge in $page.records.edges" :key="edge.node.id" :record="edge.node" />
        </b-row>
      </b-container>
    </section>
    <SectionContribute></SectionContribute>
  </DefaultLayout>
</template>

<script>
import CreditCard from "~/components/CreditCard.vue";
import SectionContribute from "~/layouts/sections/credits/Contribute.vue";
import SectionHeaderBanner from "~/layouts/sections/credits/HeaderBanner.vue";

export default {
  components: {
    CreditCard,
    SectionContribute,
    SectionHeaderBanner
  },

  metaInfo: {
    title: "Thank you"
  }
};
</script>

<page-query>
  query {
    records: allCredits {
      edges {
        node {
          title, 
          link,
          content
        }
      }
    }
  }
</page-query>