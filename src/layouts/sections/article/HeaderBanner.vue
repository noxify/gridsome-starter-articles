<template>
  <section class="height-30 jarallax bg-gray-100 border-bottom">
    
    <div class="jarallax-img bg-pattern opacity-10"></div>

    <b-container class="pt-5 pb-5">
      <h1 class="display-4">{{ record.title }}</h1>
    </b-container>
    
  </section>
</template>

<script>
export default {
  components: {  
    
  },
  props: ['record']
}
</script>