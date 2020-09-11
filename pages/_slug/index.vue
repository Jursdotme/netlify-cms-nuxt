<template>
  <div>
    <article
      class="px-4 mx-auto mt-12 prose-sm prose max-w-7xl sm:px-6 lg:px-8 sm:prose lg:prose-lg xl:prose-2xl"
    >
      <h1>{{ post.title }}</h1>

      <div v-html="$md.render(post.body)"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Page',
  async asyncData({ params, payload }) {
    return {
      post: await require(`@/assets/content/pages/${params.slug}.json`),
    }
  },
  methods: {
    img(inputurl) {
      const filename = inputurl.match(/([^/]+)(?=\.\w+$)/)[0]
      return filename
    },
  },
}
</script>
