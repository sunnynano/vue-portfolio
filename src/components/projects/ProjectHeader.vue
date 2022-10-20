<template>
  <div>
    <!-- Project heading and meta info -->
    <p
      class="
        font-general-medium
        text-left text-3xl
        sm:text-4xl
        font-bold
        text-primary-dark
        dark:text-primary-light
        mt-14
        sm:mt-20
        mb-7
      "
    >
      {{ projectSummary.title }}
    </p>
    <div class="flex">
      <div class="flex items-center mr-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="
            font-general-medium
            ml-2
            leading-none
            text-primary-dark
            dark:text-primary-light
          "
          >{{ projectSummary.date }}</span
        >
      </div>
      <div
        class="flex items-center"
        v-show="projectSummary.category.trim() !== ''"
      >
        <i
          data-feather="tag"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="
            font-general-medium
            ml-2
            leading-none
            text-primary-dark
            dark:text-primary-light
          "
          >{{ projectSummary.category }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectHeader",
    props: ["projectSummary"],
  };
</script>
