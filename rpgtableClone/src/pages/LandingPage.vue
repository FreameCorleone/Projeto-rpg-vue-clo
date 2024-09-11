<template>
  <div class="tudo">
    <section class="header">
      <!-- Tudo dentro dessa section é o header do topo da página -->
      <div class="nomeproj">
        <!-- Tudo dentro dessa div é a logo e o título do projeto -->
        <img
          src="../assets/logo.png"
          alt="Logo do projeto Tomo Arcano"
          width="90px"
          class="logo"
        />
        <p class="titulo">
          Tomo <br />
          Arcano
        </p>
      </div>

      <div class="botoes">
        <!-- Dentro dessa div estão os botões de Criar Conta e Fazer Login -->
        <div class="botao-cadastro">
          <router-link to="/cadastropage" class="router">
            <p class="botao">Criar Conta</p>
          </router-link>
        </div>
        <div class="botao-logiin">
          <router-link to="/loginpage" class="router">
            <p class="botao">Fazer Login</p>
          </router-link>
        </div>
      </div>
    </section>

    <hr class="custom-hr" />
    <!-- Linha abaixo do header -->

    <section class="corpo">
      <div>
        <p class="texto">
          <!-- Texto do corpo -->
          Monte sua ficha <br />
          de personagem <br />
          de forma <br />
          inovadora
        </p>

        <router-link to="/cadastropage" class="router">
          <div class="botaov">Sua jornada Começa Aqui!</div>
        </router-link>
        <!-- Botão vermelho abaixo do texto -->

        <router-link to="/loginpage" class="router">
          <div class="jaconta"><u>Já tenho uma conta</u></div>
        </router-link>
        <!-- Botão de já tenho conta abaixo do vermelho -->
      </div>

      <img
        src="../assets/caveira.png"
        alt="Imagem de uma caveira"
        class="imagemcorpo"
      />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  /*fonte utilizada */
  font-family: "OnePirate";
  src: url("../assets/PirataOne-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.tudo {
  height: 100vh;
}

.router {
  text-decoration: none;
}

/*Aqui começa o Estilo do header!!!! */
.header {
  /*Estilo do header */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nomeproj {
  /*estilo da parte do nome do projeto */
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.titulo {
  line-height: 40px;
  font-family: "OnePirate";
  font-size: 50px;
  text-align: justify;
  color: #242424;
}

.logo {
  /*estilo da logo do projeto*/
  margin-left: 50%;
  width: 90px;
}

.botoes {
    display: flex;
    margin-right: 10%;
    margin-top: 40px;
    position: relative;
    z-index: 10; /* Garante que os botões estejam na frente */
}

.botao {
  /*Estilo dos botoes */
  margin-left: 40px;
  color: #880000;
  font-family: "OnePirate";
  font-size: 45px;
}

.custom-hr {
  /*estilo da linha abaixo do header */
  /* margin-top: -25px; REMOVER*/
  width: 98%;
  margin-left: 10px;
  border: 1px solid #880000;
  background-color: #880000;
  margin-top: 10px;
} /*Aqui começa o estilo do corpo da página!!!!!!!!!! */

.corpo {
  /*estilo da section do corpo */
  display: flex;
  justify-content: center;
}

.texto {
  /*texto do corpo */
  font-family: "OnePirate";
  font-size: 90px;
  color: #242424;
  width: 550px;
  margin-top: 100px;
}

.botaov {
  /*Botao vermelho abaixo do texto do corpo */
  font-family: "OnePirate";
  font-size: 35px;
  text-align: center;
  width: 400px;
  height: 45px;
  /*margin-top: -70px;*/
  background-color: #880000;
  color: white;
  border-radius: 10px;
}

.jaconta {
  /*botao de ja tenho uma conta abaixo do botao vermelho */
  font-family: "OnePirate";
  font-size: 35px;
  margin-top: 10px;
  color: #858585;
}

.imagemcorpo {
  /*imagem do corpo */
  margin-top: -100px;
  width: 750px;
  height: 900px;
}
@media (max-width: 339px) {
  /*Estilos de responsividade */
  .titulo {
    line-height: 15px;
    font-size: 20px;
  }

  .logo {
    /*estilo da logo do projeto*/
    margin-left: 10px;
    width: 45px;
  }

  .botoes {
    display: flex;
    margin-right: 10%;
    margin-top: 40px;
    position: relative;
    z-index: 2; /* Coloca os botões acima da imagem */
  }

  .botao {
    /*Estilo dos botoes */
    margin-left: 5px;
    font-size: 17px;
  }

  /*Aqui começa o estilo do corpo da página!!!!!!!!!! */
  .corpo {
    /*estilo da section do corpo */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    position: relative; /* Define o corpo como referência */
    z-index: 2; /* Coloca o conteúdo do corpo acima da imagem */
  }

  .texto {
    /*texto do corpo */
    font-size: 40px;
    width: 230px;
    margin-top: 0;
  }

  .botaov {
    /*Botao vermelho abaixo do texto do corpo */
    font-size: 20px;
    width: 200px;
    height: 25px;
    border-radius: 7px;
  }

  .custom-hr {
    width: 94%;
  }

  .jaconta {
    /*botao de ja tenho uma conta abaixo do botao vermelho */
    font-size: 20px;
    margin-top: 10px;
  }

  .imagemcorpo {
    position: absolute;
    top: 0;
    right: 0;
    width: 750px;
    height: 900px;
    z-index: 0; /* Garante que a imagem fique atrás do conteúdo */
  }
}

@media (min-width: 340px) and (max-width: 499px) {
  .titulo {
    line-height: 20px;
    font-size: 20px;
  }

  .logo {
    /*estilo da logo do projeto*/
    margin-left: 20px;
    width: 55px;
  }

  .botoes {
    /*posição dos botoes */
    margin-bottom: 25px;
  }

  .botao {
    /*Estilo dos botoes */
    margin-left: 10px;
    font-size: 18px;
  }

  .custom-hr {
    width: 93%;
  }

  /*Aqui começa o estilo do corpo da página!!!!!!!!!! */
  .corpo {
    /*estilo da section do corpo */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
  }

  .texto {
    /*texto do corpo */
    font-size: 35px;
    width: 300px;
    margin-top: 0;
  }

  .botaov {
    /*Botao vermelho abaixo do texto do corpo */
    font-size: 20px;
    width: 200px;
    height: 25px;
    border-radius: 7px;
  }

  .jaconta {
    /*botao de ja tenho uma conta abaixo do botao vermelho */
    font-size: 20px;
    margin-top: 10px;
  }

  .imagemcorpo {
    /*imagem do corpo */
    margin-top: -60px;
    width: 300px;
    height: 380px;
  }
}

@media (min-width: 500px) and (max-width: 750px) {
  .titulo {
    line-height: 30px;
    font-size: 35px;
  }

  .logo {
    /*estilo da logo do projeto*/
    margin-left: 30px;
    width: 65px;
  }

  .botoes {
    /*posição dos botoes */
    margin-bottom: 7px;
  }

  .botao {
    /*Estilo dos botoes */
    margin-left: 15px;
    font-size: 25px;
  }

  /*Aqui começa o estilo do corpo da página!!!!!!!!!! */
  .corpo {
    /*estilo da section do corpo */
    display: flex;
    justify-content: center;
    margin-left: 40px;
    flex-direction: column;
    align-items: center;
  }

  .texto {
    /*texto do corpo */
    font-size: 65px;
    width: 450px;
    margin-top: 0;
  }

  .botaov {
    /*Botao vermelho abaixo do texto do corpo */
    font-size: 30px;
    width: 300px;
    height: 37px;
    border-radius: 10px;
  }

  .jaconta {
    /*botao de ja tenho uma conta abaixo do botao vermelho */
    font-size: 30px;
    margin-top: 10px;
  }

  .imagemcorpo {
    /*imagem do corpo */
    margin-top: -110px;
    width: 440px;
    height: 550px;
  }
}

@media (min-width: 751px) and (max-width: 1020px) {
  /*Aqui começa o Estilo do header!!!! */

  .titulo {
    line-height: 30px;
    font-size: 40px;
    padding: 5px;
  }

  .logo {
    /*estilo da logo do projeto*/
    margin-left: 20%;
    width: 70px;
  }

  .botoes {
    /*posição dos botoes */
    margin-right: 5%;
    margin-top: 20px;
  }

  .botao {
    /*Estilo dos botoes */
    margin-left: 20px;
    font-size: 30px;
  }

  /*Aqui começa o estilo do corpo da página!!!!!!!!!! */
  .texto {
    /*texto do corpo */
    font-size: 50px;
    width: 280px;
    margin-top: 20%;
  }

  .botaov {
    /*Botao vermelho abaixo do texto do corpo */
    font-size: 20px;
    width: 230px;
    height: 30px;
    border-radius: 10px;
  }

  .jaconta {
    /*botao de ja tenho uma conta abaixo do botao vermelho */
    font-size: 20px;
    margin-top: 3px;
  }

  .imagemcorpo {
    /*imagem do corpo */
    margin-top: -80px;
    width: 400px;
    height: 500px;
  }
}

@media (min-width: 1021px) and (max-width: 1400px) {
  /*Aqui começa o Estilo do header!!!! */
  .titulo {
    line-height: 30px;
    font-size: 40px;
    padding: 5px;
  }

  .logo {
    /*estilo da logo do projeto*/
    margin-left: 50%;
    width: 75px;
  }

  .botoes {
    /*posição dos botoes */
    margin-right: 10%;
    margin-top: 30px;
  }

  .botao {
    /*Estilo dos botoes */
    margin-left: 30px;
    font-size: 40px;
  }

  /*Aqui começa o estilo do corpo da página!!!!!!!!!! */
  .corpo {
    /*estilo da section do corpo */
    margin-left: 40px;
  }

  .texto {
    /*texto do corpo */
    font-size: 70px;
    width: 430px;
    margin-top: 20%;
  }

  .botaov {
    /*Botao vermelho abaixo do texto do corpo */
    font-size: 30px;
    width: 330px;
    height: 40px;
    border-radius: 10px;
  }

  .jaconta {
    /*botao de ja tenho uma conta abaixo do botao vermelho */
    font-size: 35px;
    margin-top: 10px;
  }

  .imagemcorpo {
    /*imagem do corpo */
    margin-top: -50px;
    width: 550px;
    height: 650px;
  }
}
</style>
