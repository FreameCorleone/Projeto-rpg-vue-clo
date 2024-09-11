<template>
  <div class="criacao-personagem-container">
    <h1>Criação de Personagens</h1>
    <hr />
    <p>
      <span>Bem-vindos(as) à página de criação de personagem:</span> Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Nemo iusto enim deleniti cum
      nisi veniam eligendi repudiandae velit, tempore nesciunt architecto quis,
      inventore obcaecati odio, voluptatum iure dolor commodi earum!
    </p>
    <BotaoProximo :component="'raca'" />
  </div>
</template>

<script>
import BotaoProximo from "./BotaoProximo.vue";

export default {
  name: "Inicio",
  components: {
    BotaoProximo,
  },
};
</script>

<style scoped>
.criacao-personagem-container {
  width: 100%;
  align-items: center;
}

span {
  color: #880000;
  font-family: "Poppins";
  font-weight: bold;
}

hr {
  width: 75%;
  border-style: none;
  background-color: #880000;
  height: 2px;
  margin-bottom: 20px;
}
</style>
