<template>
  <Header :isHome="true" />
  <!-- TODO: arrumar a responsividade da página -->
  <div class="main-container">
    <UsuarioResumido />
    <ColecaoResumida />
    <!-- * Botão de criar a ficha -->
    <div class="criar-ficha">
      <router-link to="/criacaoPersonagem" class="dark-button">
        <i class="fa-solid fa-plus fa-xl"></i>
      </router-link>
      <router-link to="/criacaoPersonagem" class="light-button">Criar ficha</router-link>
    </div>
    <FichaDadosMinimos v-show="this.componente === 'Minhas fichas'" />
    <Galeria v-show="this.componente === 'Galeria'" />
    <BarraLateral @mudar-componente="(nome) => (this.componente = nome)" />
  </div>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import UsuarioResumido from "../components/Home/UsuarioResumido.vue";
import ColecaoResumida from "../components/Home/ColecaoResumida.vue";
import FichaDadosMinimos from "../components/Home/FichaDadosMinimos.vue";
import Galeria from '../components/Home/Galeria.vue';
import BarraLateral from "../components/Home/BarraLateral.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    UsuarioResumido,
    ColecaoResumida,
    FichaDadosMinimos,
    Galeria,
    BarraLateral,
  },
  data() {
    return {
      componente: "Minhas fichas",
    };
  },
};
</script>

<style scoped>
/* justify content -> eixo x   
align-items -> eixo y */

.main-container {
  flex-flow: column wrap;
  gap: 40px;
  align-items: center;
}

/* Estilos gerais dos componentes da HomeView */
.home-container {
  background-color: rgba(133, 133, 133, 0.3);
  border-radius: 20px;
  padding: 25px 20px;
  display: flex;
}

/* Botão de criar ficha */
.criar-ficha {
  align-self: flex-start;
  position: relative;
  filter: drop-shadow(0 5px 5px #858585);
  i {
    color: #f1ece9;
  }
}

.criar-ficha a {
  transition: 0.3s;
}

.criar-ficha:hover .light-button {
  background-color: #880000;
  color: #f1ece9;
}

.criar-ficha:hover .dark-button {
  background-color: #f1ece9;
  i {
    color: #880000;
  }
}

.light-button {
  display: inline-block;
  border: 2px solid #880000;
  margin-left: 30px;
  font-size: 24px;
  width: 100%;
}

.dark-button {
  border: 2px solid #880000;

  position: absolute;
  top: -3px;
  left: 0;

  height: 45px;
  width: 45px;
  line-height: 37px;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
</style>
