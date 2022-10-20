<template>
  <!-- component -->
  <div class="relative container mx-auto px-6 flex flex-col space-y-8">
    <div
      class="
        absolute
        z-0
        w-2
        h-full
        bg-secondary-light
        dark:bg-secondary-dark
        shadow-md
        inset-0
        left-17
        md:mx-auto md:right-0 md:left-0
      "
    >
      <span></span>
    </div>
    <div
      class="relative z-10"
      v-for="experience in experiences"
      :key="experience.id"
    >
      <a :href="experience.website">
        <img :src="experience.imgSrc" class="timeline-img" />
      </a>
      <div class="timeline-container" :class="isLeftContainer(experience.id)">
        <div
          class="timeline-pointer"
          :class="isLeftPointer(experience.id)"
          aria-hidden="true"
        ></div>
        <div
          class="bg-neutral-100 dark:bg-secondary-dark p-6 rounded-md shadow-md"
        >
          <span
            class="
              font-bold
              text-ternary-dark
              dark:text-ternary-light
              text-md
              tracking-wide
            "
            >{{ experience.startDate }}</span
          >
          <h1
            class="
              text-2xl
              font-bold
              text-secondary-dark
              dark:text-primary-light
              pt-1
            "
          >
            {{ experience.title }}
          </h1>
          <p
            v-if="experience.detail.length === 1"
            class="
              pt-1
              text-primary-dark
              dark:text-primary-light
              text-left
              xl:text-center
            "
          >
            {{ experience.detail[0] }}
          </p>
          <template v-else>
            <li
              v-for="(d, index) in experience.detail"
              :key="index"
              class="
                pt-1
                text-primary-dark
                dark:text-primary-light
                text-left
                list-none
              "
            >
              {{ d }}
            </li>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import experiences from "../../data/experiences";
  export default {
    name: "AboutMe",
    data() {
      return {
        experiences,
      };
    },
    methods: {
      isLeftContainer(index) {
        if (index % 2 === 1) {
          return "timeline-container-left";
        }
      },
      isLeftPointer(index) {
        if (index % 2 === 1) {
          return "timeline-pointer-left";
        }
      },
    },
  };
</script>


<style lang="css" scoped>
  .timeline-img {
    @apply h-24 w-24 object-cover rounded-full shadow-md border-4 
      border-secondary-light  dark:border-secondary-dark 
       xs:absolute md:mx-auto md:left-0 md:right-0;
  }
  .timeline-container {
    @apply relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16;
  }
  .timeline-container-left {
    @apply md:ml-0 md:mr-auto md:pl-0 md:pr-16;
  }
  .timeline-pointer {
    @apply absolute inset-0 left-10 h-4 w-4 transform rotate-45
       bg-neutral-100
       dark:bg-secondary-dark
       border-neutral-100
        dark:border-secondary-dark 
       xs:top-11 xs:left-26 md:left-14;
  }
  .timeline-pointer-left {
    @apply md:left-auto md:right-14;
  }
</style>
