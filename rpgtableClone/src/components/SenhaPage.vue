<template>
  <div class="main">
    <h1>Informe seu Email ou Nome de Usuário</h1>
  
  <div class="email-container">
    <input
        type="text"
        name="usuario"
        id="usuario"
        v-model="usuario"
        placeholder="USUÁRIO OU EMAIL"
        class="user-input-usuario"
      />
      
    </div>
     <!--Botão de Cadastro-->
     <div class="input-container">
      <br />
       <button class="btn-cadastro" @click="cadastrarUsuario">ENVIAR</button>
      </div>

    </div>
</template>

<script>
export default {
  name: "SenhaPage",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.user-input-usuario{
  margin-bottom: 10px;
  width: 97.337%;
  height: 4vh;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}
.user-input-usuario::placeholder {
  text-align: center;
  color: #242424;
  background-repeat: no-repeat;
  font-family: "Pirata One";
  letter-spacing: 2px;
}
.btn-cadastro{
  color: #ffffff;
  background-color: #880000;
  border-radius: 6px;
  width: 150%;
  height: 5vh;
  align-content: center;
  align-items: center;
  margin: 0 auto;
}
.email-container{
  display: flex;
  align-content: center;
  align-items: center;

}
.user-input-usuario{
  display: flex;
  align-content: center;
  align-items: center;
}
</style>
