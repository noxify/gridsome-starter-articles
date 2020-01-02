<template>
  <section class="height-30 bg-dark text-white jarallax">
    <g-image
      src="~/resources/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg"
      class="jarallax-img opacity-40"
      alt="Articles"
    />
    <b-container>
      <b-row class="justify-content-center text-center">
        <b-col md="10" lg="8" class="pt-3 pb-3">
          <p class="display-4 mb-0">#{{tag}}</p>
          <p class="lead">We have found {{ totalCount }} records for this tag</p>
        </b-col>

        
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: [
    'totalCount',
    'tag'
  ]
}
</script>

