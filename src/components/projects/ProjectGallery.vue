<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
    <div
      class="mb-10 sm:mb-0"
      v-for="(galleryImage, index) in galleryImages"
      :key="index"
    >
      <img
        :src="galleryImage"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectGallery",
    props: ["galleryImages"],
  };
</script>

