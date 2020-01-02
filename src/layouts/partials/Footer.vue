<template>
  <footer class="bg-gray-800">
    <b-container>
      <b-row align-h="between" align-v="center">
        <b-col cols="auto">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mb-0">
              <b-navbar-brand class="mb-0">
                <g-link to="/" class="nav-link text-white">
                  <font-awesome :icon="['fas', 'plus-square']"></font-awesome>
                  {{ $static.metadata.siteName }}
                </g-link>
              </b-navbar-brand>
            </li>
          </ul>
        </b-col>
        <b-col cols="auto" class="text-sm-right">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mb-0">
              
                <g-link to="/pages/sample-page-1" class="nav-link">
                  Sample Page 1
                </g-link>
              
            </li>
            <li class="list-inline-item mb-0">
              
                <g-link to="/pages/sample-page-2" class="nav-link">
                  Sample Page 2
                </g-link>
              
            </li>
            <li class="list-inline-item mb-0">
              
                <g-link to="/credits" class="nav-link">
                  Credits
                </g-link>
              
            </li>
            <li class="list-inline-item mb-0">
              <b-navbar-brand class="mb-0">
              <a href="https://github.com/noxify/gridsome-starter-articles" target="_blank" class="nav-link text-light" alt="ITSM+ Github Repository" rel="noopener">
                <font-awesome :icon="['fab', 'github']"></font-awesome>
              </a>
              </b-navbar-brand>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>