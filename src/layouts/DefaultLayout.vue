<template>
  <div>
    <b-container fluid class="p-0">
      <HeaderPartial />
    </b-container>

    <slot />

    <b-container fluid class="p-0">
      <FooterPartial />
    </b-container>
    <ClientOnly>
      <BackToTop :size=50 tabindex="0" :radius=5 :bottom=70 fg-color="#588191" bg-color="transparent" ripple-bg="transparent" box-shadow="0" weight="bold"></BackToTop>
    </ClientOnly>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
//import GoTop from '@inotom/vue-go-top';

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    //GoTop
    BackToTop: () => import ('@inotom/vue-go-top')
  },
  metaInfo: {
    
  }
};
</script>
