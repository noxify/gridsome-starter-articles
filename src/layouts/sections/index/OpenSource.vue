<template>
  <section class="pt-5 mt-5 pb-5 bg-gray-100">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
              <h3 class="display-4 text-center">
                We
                <font-awesome :icon="['fas', 'heart']" class="text-danger"></font-awesome> Open Source
              </h3>
              <p class="lead">
                We're using only open source components!
              </p>
          </b-col>
          <b-col cols="12">

            <b-container>
              <b-card-group deck class="no-color">
                
                <b-card align="center" class="bg-transparent border-0">
                  <b-card-text>
                    <a href="https://gridsome.org" target="_blank" rel="noopener">
                      <g-image src="~/resources/images/logos/gridsome-logo.svg" width="120" alt="Gridsome" class="opacity-20"></g-image>
                    </a>
                  </b-card-text>
                </b-card>

                <b-card align="center" class="bg-transparent border-0">
                  <b-card-text>
                    <a href="https://graphql.org/" target="_blank" rel="noopener">
                      <g-image src="~/resources/images/logos/graphql-logo.svg" width="120" alt="GraphQL" class="opacity-20"></g-image>
                    </a>
                  </b-card-text>
                </b-card>

                <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>

                <b-card align="center" class="bg-transparent border-0">
                  <b-card-text>
                    <a href="https://github.com/" target="_blank" rel="noopener">
                      <g-image src="~/resources/images/logos/github-logo.svg" width="120" alt="Github" class="opacity-20"></g-image>
                    </a>
                  </b-card-text>
                </b-card>

                <div class="w-100 d-none d-md-block "><!-- wrap every 3 on md--></div>

                <b-card align="center" class="bg-transparent border-0">
                  <b-card-text>
                    <a href="https://www.vuejs.org" target="_blank" rel="noopener">
                      <g-image src="~/resources/images/logos/vuejs-logo.svg" width="120" alt="VueJS" class="opacity-20"></g-image>
                    </a>
                  </b-card-text>
                </b-card>

                <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>


                <b-card align="center" class="bg-transparent border-0">
                  <b-card-text>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener">
                      <g-image src="~/resources/images/logos/bootstrap-logo.svg" width="120" alt="Bootstrap" class="opacity-20"></g-image>
                    </a>
                  </b-card-text>
                </b-card>

                <b-card align="center" class="bg-transparent border-0">
                  <b-card-text>
                    <a href="https://bootstrap-vue.js.org/" target="_blank" rel="noopener">
                      <g-image src="~/resources/images/logos/bootstrapvue-logo.svg" width="120" alt="Bootstrap Vue" class="opacity-20"></g-image>
                    </a>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </b-container>

          </b-col>
        </b-row>
      </b-container>
    </section>
</template>