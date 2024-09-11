<template>
  <div class="header">
    <router-link to="/" id="logo">
      <img src="../assets/logo.png" alt="Logo do Tomo Arcano" />
      <h1>Tomo Arcano</h1>
    </router-link>
    <div id="info">
      <router-link to="/" :class="{ underline: isHome }">Home</router-link>
      <router-link to="/help" :class="{ underline: isHelp }">Help</router-link>
      <router-link to="/teste"
        ><img
          :src="$store.state.usuario.fotoUrl"
          :alt="$store.state.usuario.fotoAlt"
          id="foto-de-perfil"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
    isHelp: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.header {
  border-bottom: 2px solid #880000;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

#logo {
  display: flex;
  align-items: center;
}

#logo img {
  width: 50px;
  margin-right: 15px;
}

#logo h1 {
  font-size: 32px;
}

#info {
  display: flex;
  align-items: center;
}

#info a {
  margin-left: 30px;
}

.underline {
  text-decoration: underline;
}

#foto-de-perfil {
  display: block;
  width: 50px;
  border: 1px solid #880000;
  border-radius: 100%;
  padding: 1px;
}
</style>
