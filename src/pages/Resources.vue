<template>
  <DefaultLayout>
    <SectionHeaderBanner></SectionHeaderBanner>
    <section class="pt-5 mb-5">
      <b-container>
        <b-row>
          <b-col cols="12" md="3" class="sidebar">
            <Sidebar></Sidebar>
          </b-col>

          <b-col cols="12" md="9">
            <b-row>
              <CreditCard
                v-for="edge in $page.records.edges"
                :key="edge.node.id"
                :record="edge.node"
              />
            </b-row>
          </b-col>
          <b-col>
            <Pagination
              :baseUrl="baseUrl(false,'','')"
              :currentPage="$page.records.pageInfo.currentPage"
              :totalPages="$page.records.pageInfo.totalPages"
              :maxVisibleButtons="5"
              v-if="$page.records.pageInfo.totalPages > 1"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <SectionContribute></SectionContribute>
  </DefaultLayout>
</template>

<script src="~/pageScripts/resources.js"></script>

<page-query>
  query($page:Int) {
    records: allResource(sortBy:"createdAt", order:DESC, perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title, 
          link,
          excerpt
        }
      }
    }
  }
</page-query>