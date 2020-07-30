<template>
  <div class="wrapper">
      <Header title="Company Name"/>
      <FormAddClient /> 
      <Footer copyright=" Copyright 2020"/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import FormAddClient from "./FormAddClient.vue";
import Footer from "./Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    FormAddClient,
    Footer,
  }
}
</script>

<style lang="scss">
</style>
