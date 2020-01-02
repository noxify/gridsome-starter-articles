<template>
  <section class="height-30 bg-dark text-white jarallax">
    <g-image
      :src="require(`!!assets-loader!@customPageImage/${record.image}`)"
      class="jarallax-img opacity-40"
      :alt="record.title"
      width="2000"
    />

    <b-container>
      <b-row class="justify-content-center text-center">
        <b-col md="10" lg="8" class="pt-3 pb-3">
          <p class="display-4 mb-0">{{ record.title }}</p>
          <p class="lead" v-if="record.subtitle">{{ record.subtitle}}</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ["record"]
};
</script>

