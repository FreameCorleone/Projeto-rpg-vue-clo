<template>
  <Header />
  <div class="main-container">
    <BarraProgresso />
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BarraProgresso from "../components/CriacaoPersonagem/BarraProgresso.vue";

export default {
  name: "CriacaoPersonagemView",
  components: {
    Header,
    Footer,
    BarraProgresso,
  },
};
</script>

<style scoped>
.main-container {
  gap: 40px;
}
</style>

<style global>
/* Estilos gerais que seriam sobrescritos se estivessem no escopo "scoped" */
.criacao-personagem-container {
  background-color: rgba(133, 133, 133, 0.3);
  border-radius: 20px;
  padding: 50px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  h1,
  p,
  option,
  span {
    color: #880000;
  }

  h1 {
    font-size: 64px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  
  p,
  option,
  span {
    font-family: "Poppins";
  }
}
</style>
