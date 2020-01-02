<template>
  <div>
    
    <div>
      <b-navbar variant="gray-800" type="dark" toggleable="lg" fixed="top">
        <b-container>
          <b-navbar-brand class="mb-0">
            <g-link to="/" class="nav-link text-white">
              <font-awesome :icon="['fas', 'plus-square']"></font-awesome> {{ $static.metadata.siteName }}
            </g-link>
          </b-navbar-brand>
          
          <b-collapse id="header-navbar" is-nav class="overlay-navigation">
            <b-navbar-nav class="ml-auto lead nav-content">
              <g-link to="/" class="nav-link" exact>Home</g-link>
              <g-link to="/articles" class="nav-link" exact>Articles</g-link>
              <g-link to="/resources" class="nav-link" exact>Resources</g-link>
              <g-link to="/news" class="nav-link" exact>News</g-link>
              <g-link to="/pages/contribute" class="nav-link" exact>Contribute</g-link>
            </b-navbar-nav>
            <a class="closebtnNavigation" v-on:click="hideNavigation">&times;</a>
          </b-collapse>
          <b-navbar-nav class="ml-auto">
            <Search></Search>
          </b-navbar-nav>
          <b-navbar-toggle target="header-navbar" class="border-0" v-on:click="showNavigation"></b-navbar-toggle>
          
        </b-container>
      </b-navbar>
    </div>
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

import Search from "~/layouts/partials/Search.vue";
let myBody = {
  classList : {}
};

export default {
  
  components: {
    Search
  },

  data() {
    return {
    }
  },

  methods: {
    showNavigation() {
      myBody.classList.add('overlay-active');
    },
    hideNavigation() {
      this.$root.$emit('bv::toggle::collapse', 'header-navbar')
      myBody.classList.remove('overlay-active');
    }
  },

  mounted() {
      myBody = document.getElementsByTagName('body')[0];
      myBody.classList.remove('overlay-active');
  }
};
</script>