<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
  >
    <router-link
      to="/projects"
      class="
        font-general-medium
        block
        text-left text-lg
        font-medium
        text-primary-dark
        dark:text-primary-light
        hover:text-teal-600
        dark:hover:text-cyan-100
        sm:mx-4
        mb-2
        sm:py-2
      "
      aria-label="Projects"
      >Projects</router-link
    >
    <router-link
      to="/about"
      class="
        font-general-medium
        block
        text-left text-lg
        font-medium
        text-primary-dark
        dark:text-primary-light
        hover:text-teal-600
        dark:hover:text-cyan-100
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-secondary-light
        dark:border-secondary-dark
      "
      aria-label="About Me"
      >About Me</router-link
    >
    <router-link
      to="/contact"
      class="
        font-general-medium
        block
        text-left text-lg
        font-medium
        text-primary-dark
        dark:text-primary-light
        hover:text-teal-600
        dark:hover:text-cyan-100
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-secondary-light
        dark:border-secondary-dark
      "
      aria-label="Contact"
      >Contact</router-link
    >
    <div
      class="
        border-t-2
        pt-3
        sm:pt-0 sm:border-t-0
        border-secondary-light
        dark:border-secondary-dark
      "
    ></div>
  </div>
</template>

<script>
  export default {
    name: "AppHeaderLink",
    props: ["showModal", "isOpen"],
  };
</script>


<style scoped>

</style>
