<template>
  <b-list-group-item
    :to="record.path"
    class="flex-column align-items-start"
    v-on:click="triggerClose"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ record.title }}</h5>
      <b-badge
        variant="primary d-none d-sm-block d-md-block d-lg-blockd-none d-sm-block d-md-block d-lg-block"
      >{{ record.recordType }}</b-badge>
    </div>

    <p class="mb-1 d-none d-sm-block d-md-block d-lg-block">{{ record.excerpt }}</p>
  </b-list-group-item>
</template>

<script>
export default {
  props: ["record"],
  methods: {
    triggerClose() {
      this.$emit("closeOverlay");
    }
  }
};
</script>

<style>
</style>