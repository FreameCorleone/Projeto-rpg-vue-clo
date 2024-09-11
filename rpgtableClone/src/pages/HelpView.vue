<template>
  <Header :isHelp="true"/>
  <div class="main-container">
    <p>Help</p>
  </div>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HelpView",
  components: {
    Header,
    Footer,
  },
};
</script>
