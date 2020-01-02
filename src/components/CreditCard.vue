<template>
  <b-col class="py-2" md="6" lg="4" sm="6">
    <b-card no-body class="h-100" footer-class="border-0 bg-white">
      <b-card-body>
        <a class="card-link" :href="record.link" target="_blank" rel="noopener">
          <b-card-title tag="h4">
            {{ record.title }}
            <small class="text-size-50"></small>
          </b-card-title>
        </a>
        <div v-html="record.content" />
      </b-card-body>

      <b-card-footer>
        <a class="card-link" :href="record.link" target="_blank">
          Visit website
          <font-awesome :icon="['fas', 'external-link-alt']"></font-awesome>
        </a>
      </b-card-footer>
    </b-card>
  </b-col>
</template>

<script>
export default {
  components: {},
  props: ["record"]
};
</script>