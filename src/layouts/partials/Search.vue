<template>
  <div>
    <a v-on:click="showSearch" class="nav-link pb-1">
      <font-awesome :icon="['fas', 'search']" class="h5 mb-0 pb-0"></font-awesome>
    </a>

    <div id="searchbar" class="overlay overlay-light" v-show="showSearchOverlay">
      
      <a class="closebtn" v-on:click="hideSearch">&times;</a>

      <b-container class="overlay-content">
        <b-row class="justify-content-center w-100 mr-0 ml-0">
          <b-col md="10" lg="8">
            <b-form class="card bg-transparent border-0">
              <b-card-body class="row no-gutters align-items-center text-left border-bottom pl-0 pb-0">
                <b-col cols>
                  <b-form-input
                    size="md"
                    id="search"
                    class="border-0 w-100 bg-transparent text-dark"
                    placeholder="Search topic or keywords..."
                    autocomplete="off"
                    v-model="query"
                    @input="softReset"
                    @keyup="performSearch"
                    @keyup.esc="searchResultsVisible = false"
                    @keydown.up.prevent="highlightPrev"
                    @keydown.down.prevent="highlightNext"
                    @submit.prevent="performSearch"
                    @keyup.enter="performSearch"
                    @focus="searchResultsVisible = true"
                    ref="search"
                  ></b-form-input>
                  

                </b-col>
                <b-col class="col-auto text-dark pt-2">
                  <font-awesome :icon="['fas', 'search']" class="h4 text-body"></font-awesome>
                </b-col>
              </b-card-body>
              
            </b-form>
          </b-col>
        </b-row>
        <b-row class="justify-content-center text-center w-100 mr-0 ml-0">
          <b-col md="10" lg="8">
            <ClientOnly v-if="query.length > 0 && searchResultsVisible">
              <b-list-group class="mt-5 mb-5 text-left">
              <SearchResult v-for="(post, index) in results" :key="index" :record="post.item" @closeOverlay="hideSearch"/>
              </b-list-group>
            </ClientOnly>
          <div v-if="results.length === 0 && query.length > 0"
            class="bg-background-form font-normal w-full border-b cursor-pointer p-4"
          >
            <p class="my-0">
              No results for '
              <strong>{{ query }}</strong>'
            </p>
          </div>
          </b-col>
        </b-row>
      </b-container>

    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import SearchResult from "~/components/SearchResult.vue";

let myBody = null;

export default {
  components: {
    SearchResult
  },
  created() {
    axios("/search.json")
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      showSearchOverlay: false,
      query: "",
      results: [],
      posts: [],
      highlightedIndex: 0,
      searchResultsVisible: false,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "excerpt", "content"]
      }
    };
  },

  methods: {
    showSearch() {
      myBody.classList.add("overlay-active");
      this.showSearchOverlay = true;
    },
    hideSearch() {
      myBody.classList.remove("overlay-active");
      this.reset()
      this.showSearchOverlay = false;
    },
    reset() {
      this.query = "";
      this.highlightedIndex = 0;
    },
    softReset() {
      this.highlightedIndex = 0;
      this.searchResultsVisible = true;
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options).then(results => {
        this.results = results;
      });
    },
    highlightPrev() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.results.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: "nearest"
      });
    },
    gotoLink() {
      if (this.results[this.highlightedIndex]) {
        window.location = this.results[this.highlightedIndex].item.path;
      };
      this.hideSearch();
    }
  },

  mounted() {
    myBody = document.getElementsByTagName("body")[0];
  }
};
</script>