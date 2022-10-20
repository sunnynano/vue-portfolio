<template>
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2
        class="
          font-general-medium
          text-2xl text-primary-dark
          dark:text-primary-light
          mt-12
          mb-8
        "
      >
        Contact details
      </h2>
      <ul class="font-general-regular">
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <i
            :data-feather="contact.icon"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
          ></i>
          <a
            href="mailto:sunnyguan2018@gmail.com"
            class="
              text-lg
              mb-4
              text-primary-dark
              dark:text-primary-light
              hover:underline
              cursor-pointer
            "
            aria-label="Email"
          >
            {{ contact.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContactDetail",
    props: ["contacts"],
  };
</script>



<style lang="css" scoped></style>
