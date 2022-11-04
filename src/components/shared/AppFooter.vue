<template>
  <div class="container mx-auto">
    <div
      class="
        pt-10
        sm:pt-15
        pb-4
        mt-10
        border-t-2 border-secondary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-5 sm:mb-10">
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
        <template class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="
              cursor-pointer
              rounded-lg
              shadow-sm
              p-4
              duration-500
              text-gray-400
              hover:text-teal-600
              dark:hover:text-cyan-100
              bg-primary-light
              dark:bg-primary-dark
              hover:bg-gray-100
            "
          >
            <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
          </a>
        </template>
      </div>
    </div>
    <FooterCopyright />
  </div>
</template>

<script>
  import feather from "feather-icons";
  import FooterCopyright from "./FooterCopyright.vue";
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
            url: "https://www.linkedin.com/in/feiyang-guan",
          },
          {
            id: 3,
            name: "Bangumi",
            icon: "film",
            url: "https://bgm.tv/user/634782",
          },
                    {
            id: 4,
            name: "Leetcode",
            icon: "code",
            url: "https://leetcode.com/sunnysherrysunny/",
          },
        ],
      };
    },
    components: {
      FooterCopyright,
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
