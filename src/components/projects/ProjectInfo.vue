<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project languages -->
      <div class="mb-7" v-show="languageDto.trim() !== ''">
        <p
          class="
            font-general-medium
            text-2xl text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
        >
          Language
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ languageDto }}
        </p>
      </div>
      <!-- Single project tools and tech -->
      <div class="mb-7" v-show="techDto.trim() !== ''">
        <p
          class="
            font-general-medium
            text-2xl text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
        >
          Tools & Technologies
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ techDto }}
        </p>
         <p
          class="
            font-general-medium
            text-2xl text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
        >
          Source code
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ techDto }}
        </p>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          font-bold
          mb-7
        "
      >
        Description
      </p>
      <p
        class="
          font-general-regular
          mb-5
          text-lg text-primary-dark
          dark:text-primary-light
        "
      >
        {{ projectDetail.description }}
      </p>
    </div>
  </div>
</template>

<script>
  import feather from "feather-icons";

  export default {
    name: "ProjectInfo",
    props: ["projectDetail"],
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
    computed: {
      languageDto() {
        return this.projectDetail.language.join(", ");
      },
      techDto() {
        return this.projectDetail.tech.join(", ");
      },
    },
  };
</script>
