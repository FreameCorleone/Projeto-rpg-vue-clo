<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="container">
  <div class="main">
    <div class="login">
      <div class="logo">
        <img src="/icons/logo-site.png" class="logo-img" />
        <h1 class="logo-name">TOMO ARCANO</h1>
        <br />
      </div>
      <div class="login-campos">
      <h1 id="login-txt">FAZER LOGIN</h1>
      <p>PARA CONTINUAR SUA <b>AVENTURA</b></p>
      <input
        type="text"
        name="usuario"
        id="usuario"
        v-model="usuario"
        placeholder="USUÁRIO OU EMAIL"
        class="user-input-usuario"
      />
      <br />
      <input
        type="password"
        name="senha"
        id="senha"
        v-model="senha"
        placeholder="SENHA"
        class="user-input-senha"
      />
    </div>
      
        <div class="checkbox-container">
          <label class="lembrar">
            <input type="checkbox" class="lembrar-de-mim" id="lembrar-de-mim" />
            <span>Lembrar de mim</span>
          </label>
          <router-link to="/SenhaPage" class="esqueci-senha"
            >Esqueci minha senha</router-link
          >
        </div>
      
      <!--Botão de login-->
      
        <div class="input-container">
          <button class="btn-login" @click="loginUsuario">FAZER LOGIN</button>
        </div>

      </div>

      

    </div>

</div>
      <div class="img-lateral">
        <img src="/icons/imagem-caverna.png" class="caverna-img" />
      </div>

</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {};
  },
}
</script>

<style scoped>
@font-face {
  font-family: "Pirata One";
  src: url("/public/fonts/PirataOne-Regular.ttf") format("truetype");
}
body {
  display: flex;
  align-items: center;
  text-align: center;
  
  
}
.main{
  width: 50%;
  text-align: center;
  align-items: center;
  align-content: center;
}
.login {
  width: 50%;
  height: 100%;
  text-align: center;
}
.user-input-usuario {
  margin-bottom: 10px;
  width: 97.337%;
  height: 4vh;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}
.user-input-senha {
  margin-bottom: 10px;
  width: 97.337%;
  height: 4vh;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}

#login-txt {
  color: #880000;
  font-family: "Pirata One";
  letter-spacing: 2px;
}

.btn-login {
  color: #ffffff;
  background-color: #880000;
  border-radius: 6px;
  width: 50%;
  height: 5vh;
  align-content: center;
  align-items: center;
  margin: 0 auto;
}


.checkbox-container {
  color: #880000;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  max-width: 100%;
  
}

.lembrar {
  display: flex;
  text-align: center;
  margin-right: 50px;
}
.esqueci-senha {
  color: #880000;
  margin-left: auto;
  text-align: right;
}

.logo-img {
  width: 100px;
  height: 100px;
}
.logo-name {
  color: #880000;
}
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
}
.img-lateral{
  position:absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50vw;
  max-height: auto;
  object-fit: cover;
  
}
.caverna-img{
  width: 100%;
  height: auto;
  object-fit: cover;
}
/* Para telas menores que 768px (ex., dispositivos móveis) */
@media only screen and (min-width: 1215px) {
  
  
}

/* Para telas entre 768px e 1024px (ex., tablets) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  
}

/* Para telas maiores que 1024px (ex., dispositivos de desktop) */
@media only screen and (min-width: 1024px) {
  
}
</style>
