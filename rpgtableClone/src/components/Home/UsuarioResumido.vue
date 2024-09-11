<template>
  <div class="home-container">
    <img
      :src="$store.state.usuario.fotoUrl"
      :alt="$store.state.usuario.fotoAlt"
      id="fotoDePerfil"
    />
    <div id="info">
      <h2>{{ $store.state.usuario.nome }}</h2>
      <hr />
      <p>Total de fichas: {{ $store.state.fichas.length }}</p>
      <router-link to="/teste" class="light-button">Editar perfil</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsuarioResumido",
};
</script>

<style scoped>
.home-container {
  width: 23%;
  align-items: center;
  justify-content: space-evenly;
  gap: 0 10px;
}

#fotoDePerfil {
  width: 110px;
  padding: 2px;
  border: 2px solid #880000;
  border-radius: 100%;
}

#info {
  text-align: center;
}

#info hr {
  background-color: #242424;
  height: 1px;
  border-style: none;
  margin: 4px 0;
}

#info .light-button {
  display: inline-block;
  margin-top: 9px;
  width: 100%;
}
</style>
