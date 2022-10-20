<template>
  <div class="container mx-auto">
    <div
      class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-secondary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="
            font-general-semibold
            text-3xl
            sm:text-4xl
            font-semibold
            text-primary-dark
            dark:text-primary-light
            mb-5
          "
        >
          Follow me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="
              text-gray-400
              hover:text-teal-600
              dark:hover:text-cyan-100
              cursor-pointer
              rounded-lg
              bg-primary-light
              dark:bg-primary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
          >
            <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import feather from "feather-icons";
  export default {
    name: "AppFooter",
    data() {
      return {
        socials: [
          {
            id: 1,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/sunnysherrysunny",
          },
          {
            id: 2,
            name: "Linkedin",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/feiyang-guan/",
          }
        ],
      };
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
  };
</script>



<style scoped></style>
