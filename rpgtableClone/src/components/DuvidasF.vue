<template>
  <body>
    <main class="duvidas">
      <h1>Dúvidas Frequentes</h1>
    </main>
    <section class = "containerFrequentes"> 
      <div class = "freq1">
          <ul>
            <li>
              <a href="#">
                Esqueci minha senha, e agora?
              </a>
            </li>
            <li>
              <a href="#">
                Como faço para adquirir uma versão para impressão da minha ficha?
              </a>
            </li>
            <li>
              <a href="#">
                Como faço para fazer upgrades nas minhas fichas de personagens?
              </a>
            </li>
          </ul>
      </div>
      <div class ="freq1" id="freq2">
        <ul>
          <li><a href="#">É possível criar fichas de monstros usando o site?</a></li>
        </ul>
      </div>
    </section>
  </body>
</template>

<script>

export default {
  name: "DuvidaF"

}
</script>


  <style scoped>

:root{
  --corVermelho:#880000;
  --corPreto: #242424;
  --corCinza: #858585;
}

  .containerFrequentes {
  display: flex;
  height: 35vh;
  justify-content: space-around;
  font-size: 20px;
}

.freq1 ul li a{
  color: var(--corCinza);
  text-decoration: none; 
  font-family: 'Poppins';
}
.freq1 ul li{
  list-style-type: "> ";
}

.duvidas{
  display: flex;
  justify-content: center;
  height: 12vh;
  align-content: center;
}
.duvidas h1[data-v-0717cea4]{
  text-align: center;
  font-family: 'Poppins';
  color:#880000;
  width: 330px;
  line-height: 1.5;
  border-bottom: solid 2px;
  display: flex;
  align-self: center;
}
.freq1,ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
ul{
  height: 65%;
}

#freq2 {
  justify-content: start;
}
#freq2 ul {
  height: 54%
}

@font-face {
  font-family: 'Poppins';
  src: url(/public/fonte/Poppins-Light.ttf);}

</style>

@font-face {
  font-family: 'Poppins';
  src: url(/public/fonte/Poppins-BlackItalic.ttf);}

  .duvidas {
    padding: 20px;
    text-align:center
  }
  
  .duvidas h2 {
    font-size: 24px;
    color: #800000;
    font-family: 'Poppins';
    
  }
  
  .frequentes ul {
    list-style-type: none;
    padding: 0;
    align-items: left;
  }
  
  .frequentes li {
    padding: 10px 0;
    font-size: 18px;
    align-items: left;
    
  }
  
  .frequentes li a {
    text-decoration: none;
    color: #333;
    align-items: left;
  }
  
  .frequentes li a:hover {
    text-decoration: underline;
  }