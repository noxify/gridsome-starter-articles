<template>
  <EmptyLayout>
    <div class="error text-center">
      <div class="code mb-4">404</div>
      <p class="display-4 message">Page not found!</p>

      <g-link
          class="btn btn-lg btn-primary"
          tabindex="-1"
          role="button"
          aria-disabled="true"
          to="/"
      >Back to home</g-link>
    </div>
  </EmptyLayout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page not found',
    bodyAttrs: {
      class: 'bg-gray-200'
    }
  }
}
</script>