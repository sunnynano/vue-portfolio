<template>
  <router-link
    :to="{
      path: '/projects/single-project',
      query: {
        id: project.id,
      },
    }"
    class="
      rounded-xl
      shadow-lg
      hover:shadow-xl
      cursor-pointer
      mb-10
      sm:mb-0
      bg-secondary-light
      dark:bg-secondary-dark
    "
    aria-label="Single Project"
  >
    <!-- Project's display image -->
    <div>
      <img
        :src="project.displayImg"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <!-- Project's title and category -->
    <div class="text-center px-4 py-6">
      <p
        class="
          font-general-semibold
          text-xl text-primary-dark
          dark:text-primary-light
          font-semibold
          mb-2
        "
      >
        {{ project.title }}
      </p>
      <span
        class="
          font-general-medium
          text-lg text-primary-dark
          dark:text-primary-light
        "
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "ProjectCell",
    props: ["project"],
  };
</script>