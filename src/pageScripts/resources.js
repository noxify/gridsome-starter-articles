import CreditCard from "~/components/CreditCard.vue";
import SectionContribute from "~/layouts/sections/resources/Contribute.vue";
import SectionHeaderBanner from "~/layouts/sections/resources/HeaderBanner.vue";
import Sidebar from "~/layouts/sections/resources/Sidebar.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  
  components: {
    CreditCard,
    SectionContribute,
    SectionHeaderBanner,
    Pagination,
    Sidebar
  },

  metaInfo() {
    const suffix = (this.$route.params.type) ? ` by ${this.$route.params.type}: ${this.$route.params.title}` : ''
    return {
      title: `Resources${suffix}`
    };
  },

  methods: {
    baseUrl(isFilter, type, value) {
      return (isFilter) ? `/resources/filter/${type}/${value}` : '/resources';
    }
  }

};