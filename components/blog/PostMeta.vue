<template>
  <div class="flex text-sm leading-5">
    <div class="flex items-center">
      <span>
        <svg
          class="w-4 h-4 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      </span>
      <p class="ml-2 font-medium">
        {{ authorData.name }}
      </p>
    </div>

    <div class="flex items-center ml-6">
      <span>
        <svg
          class="w-4 h-4 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </span>
      <time class="ml-2 text-gray-400" datetime="2020-03-16"
        >{{ date | date }}
      </time>
    </div>

    <div class="flex items-center ml-6">
      <span>
        <svg
          class="w-4 h-4 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      </span>
      <span class="ml-2 text-gray-400">6 min read</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostMeta',
  props: {
    authorData: {
      type: Object,
      default() {
        return {}
      },
    },
    date: { type: String, default: '0000000' },
  },
}
</script>
