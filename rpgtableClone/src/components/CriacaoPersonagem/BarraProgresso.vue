<template>
  <div class="criacao-personagem-container">
    <ul>
      <!-- TODO: condicionar a aparição dos ícones de acordo com a página que está sendo exibida -->
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="true"></i>
        <router-link to="/criacaoPersonagem/"> Início </router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/raca"> Raça </router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Classe</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Atributos</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Antecedente</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Equipamento</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Magias</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Talentos</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Biografia</router-link>
      </li>
      <li>
        <i class="fa-solid fa-caret-right fa-lg" v-show="false"></i>
        <router-link to="/criacaoPersonagem/">Revisão</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarraProgresso",
};
</script>

<style scoped>
.criacao-personagem-container {
  width: 12%;
  align-items: center;
  justify-content: center;
}

ul {
  list-style: none;
  border-left: 2px solid #880000;
}

li {
  padding: 10px 15px;
  position: relative;
}

a {
  font-size: 24px;
}

i {
  color: #880000;
  position: absolute;
  left: -3%;
  top: 50%;
}
</style>
