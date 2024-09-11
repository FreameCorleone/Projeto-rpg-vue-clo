<template>
  <div class="home-container">
    <div id="titulo">
      <h2>Coleções</h2>
    </div>
    <ul>
      <li
        id="colecao"
        v-for="colecao in $store.state.colecoes"
        :key="colecao.id"
      >
        <router-link to="/teste">
          <i class="fa-solid fa-caret-right fa-sm"></i>{{ colecao.nome }}
        </router-link>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </li>
    </ul>
    <router-link to="/teste" class="light-button">Veja mais</router-link>
  </div>
</template>

<script>
export default {
  name: "ColecaoResumida",
};
</script>

<style scoped>
.home-container {
  width: 23%;
  flex-direction: column;
}

h2,
i {
  color: #880000;
}

.fa-caret-right {
  margin-right: 10px;
}

#titulo {
  text-align: center;
  margin-bottom: 10px;
}

ul {
  list-style: none;
}

#colecao {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

#colecao a {
  text-decoration: underline;
}

.light-button {
  width: 50%;
  align-self: center;
}
</style>
