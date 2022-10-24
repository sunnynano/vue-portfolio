<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-primary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Hi, I am Feiyang (Sunny)
      </h1>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        A Full-Stack Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="Feiyang (Sunny) Guan-Resume.pdf"
          href="/files/Feiyang (Sunny) Guan-Resume.pdf"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-teal-600
            dark:bg-cyan-100
            focus:ring-1 focus:ring-rose-600
            hover:bg-teal-700
            dark:hover:bg-cyan-300
            text-gray-100
            dark:text-gray-500
            hover:text-gray-200
            dark:hover:text-gray-700
            duration-500
          "
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/images/programmer-light.svg"
        alt="Developer"
      />
      <img v-else src="@/assets/images/programmer-dark.svg" alt="Developer" />
    </div>
  </section>
</template>

<script>
  import feather from "feather-icons";

  export default {
    name: "AppBanner",
    data() {
      return {
        theme: "",
      };
    },
    created() {
      this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
      feather.replace();
      this.theme = localStorage.getItem("theme") || "light";
    },
    updated() {
      feather.replace();
    },
    methods: {},
  };
</script>



<style scoped>
</style>
