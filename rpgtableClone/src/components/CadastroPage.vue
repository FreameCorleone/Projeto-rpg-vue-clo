<template>
    <div class="main">
       <!--LOGO DO SITE-->
    <div class="logo">
        <img src="/icons/logo-site.png" class="logo-img" />
        <h1 class="logo-name">TOMO ARCANO</h1>
        <br />
      </div>
       <!--CAMPOS DE CADASTRO-->
      <div class="cadastro-campos">
        <h1 class="titulo-cadastro">CRIE SUA CONTA</h1>
        <form @submit.prevent="cadastrarUsuario">
          <input
        type="text"
        name="usuario"
        id="usuario"
        v-model="usuario"
        placeholder="NOME DE USUÁRIO"
        class="user-input-usuario"
      />
      <br />
      <input
        type="text"
        name="email"
        id="email"
        v-model="email"
        placeholder="EMAIL"
        class="user-input-email"
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
      <br>
      <input
        type="password"
        name="senha-confirm"
        id="senha-confirm"
        v-model="senha_confirm"
        placeholder=" CONFIRME SUA SENHA"
        class="user-input-senha-confirm"
      />
      <br>
        </form>
      </div>
       <!--CHECKBOX PARA ACEITAR TERMOS E CONDIÇÕES-->
      <div class="checkbox-container">
        <label class="termos">
            <input type="checkbox" class="termos" />
            <span>ESTOU CIENTE E CONCORDO EM ACEITAR OS <a href="">TERMOS E CONDIÇÕES</a></span>
          </label>
      </div>

       <!--Botão de Cadastro-->
       <div class="input-container">
       <button class="btn-cadastro" @click="cadastrarUsuario">CADASTRAR</button>
      </div>
        <!--OPÇÃO DE JÁ TENHO CONTA-->
        <div class="login">
          <router-link to="/LoginPage" class="login-link"
            ><b>JÁ TENHO UMA CONTA</b></router-link>
        </div>
        <div class="img-lateral">
        <img src="/icons/imagem-caveira-sentada.png" class="caveira-img" />
      </div>
    </div>
</template>
<script>
export default{
    name: 'CadastroPage'
}
</script>
<style scoped>
body {
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  
}
.main{
  margin-left: 50%;
  padding-left: 20px;
  text-align: center;
  align-items: center;
  align-content: center;
}
.logo-img {
  width: 100px;
  height: 100px;
}
.logo-name {
  color: #880000;
}
.cadastro-campos{
  color:#880000;

}
.user-input-usuario{
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}
.user-input-usuario::placeholder{
  vertical-align: center;
  color: #242424;
  letter-spacing: 2px;
}
.user-input-email{
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}
.user-input-email::placeholder{
  vertical-align: center;
  color: #242424;
  letter-spacing: 2px;
}
.user-input-senha{
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}
.user-input-senha::placeholder{
  vertical-align: center;
  color: #242424;
  letter-spacing: 2px;
}
.user-input-senha-confirm{
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border-color: #880000;
  background-color: #cfcdcd;
}
.user-input-senha-confirm::placeholder{
  vertical-align: center;
  color: #242424;
  letter-spacing: 2px;
}
.btn-cadastro{
  color: #ffffff;
  background-color: #880000;
  border-radius: 6px;
  width: 25%;
  height: 5vh;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  
}
.login-link{
  font-family: poppings;
  font-size: 16px;
  color: #880000;
  
}
.img-lateral {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50%; /* ajuste a largura da imagem para ocupar metade da tela */
  height: 100vh; /* ajuste a altura da imagem para ocupar toda a altura da tela */
  object-fit: cover; /* faz com que a imagem seja cortada para caber na área disponível */
  max-width: 100%;
  height: auto;
}
.caveira-img{
  width: 100%;
  height: 100%;
  
}
</style>