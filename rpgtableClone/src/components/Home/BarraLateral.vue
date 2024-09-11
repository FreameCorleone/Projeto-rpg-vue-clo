<template>
  <div class="home-container">
    <button @click="$emit('mudarComponente', (this.nome = 'Minhas fichas'))">
      <h2 :class="{ selected: this.nome === 'Minhas fichas' }">
        <i
          class="fa-solid fa-dice-d20 fa-sm"
          v-show="this.nome === 'Minhas fichas'"
          >&nbsp;</i
        >Minhas fichas
      </h2>
    </button>
    <hr />
    <button @click="$emit('mudarComponente', (this.nome = 'Galeria'))">
      <h2 :class="{ selected: this.nome === 'Galeria' }">
        <i class="fa-solid fa-dice-d20 fa-sm" v-show="this.nome === 'Galeria'"
          >&nbsp;</i
        >Galeria
      </h2>
    </button>
  </div>
</template>

<script>
export default {
  name: "BarraLateral",
  data() {
    return {
      nome: "Minhas fichas",
    };
  },
};
</script>

<style scoped>
.home-container {
  width: 12%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

button {
  background-color: transparent;
  border: none;
}

h2 {
  font-size: 24px;
}

i {
  color: #880000;
}

.selected {
  color: #880000;
}

hr {
  width: 100%;
  height: 1px;
  background-color: #242424;
  margin: 10px 0;
  border-style: none;
}
</style>
