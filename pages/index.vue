<template>
  <div>
    <Hero />
    <Features />
    <BlogLoop :post-count="postCount" />
    <LogoCloud />
  </div>
</template>

<script>
export default {
  data() {
    return {
      postCount: 10,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
