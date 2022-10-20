<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

  </div>
</template>

<script>
  import AboutMe from "@/components/about/AboutMe";
  import feather from "feather-icons";

  export default {
    name: "About",
    components: {
      AboutMe,
    },
    data(){
      return {};
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
    methods: {},
  };
</script>

<style scoped></style>
