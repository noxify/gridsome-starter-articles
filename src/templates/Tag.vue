<template>
  <DefaultLayout>
    <SectionHeaderBanner :totalCount="$page.records.belongsTo.totalCount" :tag="$page.records.id"></SectionHeaderBanner>
    <section class="pt-5 mb-5">
      <b-container class="pb-5">
        <div>
          <b-row>
            <RecordCard
              v-for="edge in $page.records.belongsTo.edges"
              :key="edge.node.id"
              :record="edge.node"
            />
          </b-row>
        </div>
      </b-container>

      <Pagination
        :baseUrl="baseUrl"
        :currentPage="$page.records.belongsTo.pageInfo.currentPage"
        :totalPages="$page.records.belongsTo.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.records.belongsTo.pageInfo.totalPages > 1"
      />
    </section>

    
  </DefaultLayout>
</template>


<script>
import RecordCard from "~/components/RecordCard.vue";
import Pagination from "~/components/Pagination.vue";
import SectionHeaderBanner from "~/layouts/sections/tag/HeaderBanner.vue";

export default {
  components: {
    RecordCard,
    Pagination,
    SectionHeaderBanner
  },
  computed: {
    baseUrl() {
      return `/tag/${this.$page.records.id}`
    }
  },
  metaInfo() {
    return {
      title: `Tag result for: ${this.$page.records.id}`
    }
  }
};
</script>


<page-query>
query ($id: ID!, $page:Int) {
  records : tag(id: $id) {
    id
    title
    belongsTo(perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          __typename
          ... on News {
            id,
            title, 
            path,
            slug,
            excerpt,
            createdAt(format:"Do MMMM YYYY"),
            timeToRead,
            tags {
              title,
              path
            }
          }
          ... on Article {
            id,
            title, 
            path,
            slug,
            excerpt,
            createdAt(format:"Do MMMM YYYY"),
            timeToRead,
            tags {
              title,
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

