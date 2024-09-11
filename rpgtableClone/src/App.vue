<template>
  <div id="background">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style global>
/* Importando fontes: Pirata One e Poppins */
@import url("https://fonts.googleapis.com/css2?family=Pirata+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* Estilos gerais */
* {
  font-family: "Pirata One";
  color: #242424;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #880000 #f1ece9;
}

#background{
  background-image: url("./assets/textura papel.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}

/* Selectors para mudar o fundo e a cor do texto quando selecionados
(o segundo é para usuários de Firefox) */
::selection {
  color: #f1ece9;
  background: #880000;
}

::-moz-selection {
  color: #f1ece9;
  background: #880000;
}

/* Links */
a {
  color: #880000;
  text-decoration: none;
}

/* Views */
.main-container {
  margin: 55px;
  height: 600px;
  display: flex;
}

/* Tamanho dos textos */
h1 {
  font-size: 34px;
}

h2 {
  font-size: 30px;
  font-weight: normal;
}

p,
a,
li {
  font-size: 18px;
}

/* Botões */
button {
  cursor: pointer;
}

.light-button,
.dark-button {
  border-radius: 10px;
  padding: 3px 6px;
  text-align: center;
  font-size: 18px;
}

.light-button {
  border: 1px solid #242424;
  background-color: #f1ece9;
  color: #880000;
}

.light-button:hover {
  background-color: #e7e2e0;
}

.dark-button {
  border: 1px solid #880000;
  background-color: #880000;
  color: #f1ece9;
}

.dark-button:hover {
  background-color: #740202;
}
</style>
