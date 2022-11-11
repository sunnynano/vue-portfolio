<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="
          font-general-semibold
          text-4xl
          md:text-5xl
          font-semibold
          mb-12
          text-primary-dark
          dark:text-primary-light
        "
      >
        Projects
      </p>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectCell
        v-for="project in projectSummaries"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>


<script>
  import feather from "feather-icons";
  import ProjectCell from "./ProjectCell.vue";
  import projectSummaries from "../../data/projectSummaries";

  export default {
    name: "ProjectGrid",
    components: { ProjectCell },
    data: () => {
      return {
        projectSummaries
      };
    },
    mounted() {
      feather.replace();
    },
  };
</script>

