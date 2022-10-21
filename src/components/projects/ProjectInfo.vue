<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project languages -->
      <div class="mb-7" v-if="languageDto.trim() !== ''">
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
      <div class="mb-7" v-if="techDto.trim() !== ''">
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
      </div>
      <div class="mb-3">
        <span>
          <a :href="projectDetail.src" target="_blank" v-if="projectDetail.src">
            <button
              type="button"
              class="
                text-primary-light
                dark:text-primary-dark
                bg-primary-dark
                dark:bg-primary-light
                hover:bg-primary-dark/90
                dark:hover:bg-primary-light/90
                rounded-lg
                shadow-lg
                hover:shadow-xl
                px-3
                py-2
                inline-flex
                items-center
                duration-300
                font-general-regular
                mr-2
              "
            >
              <i data-feather="github" class="mr-2 w-4 h-4"></i>
              Source code
            </button>
          </a>
          <a :href="projectDetail.demo" target="_blank" v-if="projectDetail.demo">
            <button
              type="button"
              class="
                text-white
                dark:text-gray-500
                bg-teal-600
                dark:bg-cyan-100
                hover:bg-teal-700
                dark:hover:bg-cyan-300
                rounded-lg
                shadow-lg
                hover:shadow-xl
                px-3
                py-2
                inline-flex
                items-center
                duration-300
                font-general-regular
              "
            >
              <i data-feather="monitor" class="mr-2 w-4 h-4"></i>
              Live Demo
            </button>
          </a>
        </span>
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
