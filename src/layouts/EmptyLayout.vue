<template>
  
  <div>
    <slot/>
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

export default {
  components:{
   
  },
  mounted() { 
  }
}
</script>