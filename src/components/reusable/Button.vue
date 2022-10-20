<template>
  <button>{{ title }}</button>
</template>


<script>
  export default {
    name: "Button",
    props: ["title"],
    data: () => {
      return {
        //
      };
    },
  };
</script>

<style lang="scss" scoped></style>
