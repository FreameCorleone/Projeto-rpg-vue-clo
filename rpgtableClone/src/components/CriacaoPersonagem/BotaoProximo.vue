<template>
  <router-link :to="route" class="dark-button">Próximo</router-link>
</template>

<script>
export default {
  name: "BotaoProximo",
  props: {
    component: String,
  },
  data() {
    return {
      route: "/criacaoPersonagem/" + this.component,
    };
  },
};
</script>

<style scoped>
a {
  width: 15%;
  font-family: "Poppins";
  box-shadow: 0 5px 5px #858585;
  position: absolute;
  bottom: 50px;
  right: 40px;
}
</style>
