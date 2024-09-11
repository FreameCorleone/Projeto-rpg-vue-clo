<template>
  <div class="criacao-personagem-container" id="selects">
    <!-- TODO: melhorar o select (biblioteca "vue select") -->
    <div>
      <h1>Escolha sua raça:</h1>
      <select name="racas" @change="mudarInfoRaca($event)">
        <option value="" disabled selected>Selecione</option>
        <option v-for="raca in racas" :key="raca.id" :value="raca.id">
          {{ raca.nome }}
        </option>
      </select>
      <!-- <v-select :options="racas" label="nome"></v-select> -->
    </div>

    <div v-if="racaAtual.subRacas">
      <h1>Escolha sua sub-raça:</h1>
      <select name="subRacas" @change="mudarInfoSubRaca($event)">
        <option value="" disabled selected>Selecione</option>
        <option
          v-for="subRaca in racaAtual.subRacas"
          :key="subRaca.id"
          :value="subRaca.id"
        >
          {{ subRaca.nome }}
        </option>
      </select>
    </div>

    <BotaoProximo :component="'raca'" />
  </div>

  <!-- TODO: mostrar as informações da sub-raça escolhida -->
  <!-- TODO: condicionar a aparência da <hr /> apenas quando a sub-raça for escolhida -->
  <!-- TODO: consertar o bug de quando a raça é trocada, as informações da sub-raça ainda continuam com a da anterior -->
  <div class="criacao-personagem-container" id="info">
    <h1>{{ racaAtual.nome }}</h1>
    <span>{{ racaAtual.bonus }}</span>
    <p>{{ racaAtual.descricao }}</p>
    <br /><br />
    <h1>{{ subRacaAtual.nome }}</h1>
    <span>{{ subRacaAtual.bonus }}</span>
    <p>{{ subRacaAtual.descricao }}</p>
  </div>
</template>

<script>
import BotaoProximo from "./BotaoProximo.vue";

export default {
  name: "Raca",
  components: {
    BotaoProximo,
  },
  data() {
    return {
      racaAtual: {
        nome: "",
        bonus: "",
        descricao: "",
        subRacas: "",
      },

      subRacaAtual: {
        nome: "",
        bonus: "",
        descricao: "",
      },

      racas: [
        {
          id: "1",
          nome: "Anão",
          bonus: "+2 CON",
          descricao:
            "Reinos ricos de antiga grandeza, salões esculpidos nas raízes das montanhas, o eco de picaretas e martelos nas minas profundas e nas forjas ardentes, um compromisso com o clã e a tradição, e um ódio impetuoso contra goblins e orcs – essas linhas comuns unem todos os anões.",
          subRacas: "",
        },
        {
          id: "2",
          nome: "Elfo",
          bonus: "+2 DES",
          descricao:
            "Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele. Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa. Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo.",
          subRacas: [
            {
              id: "21",
              nome: "Alto Elfo",
              bonus: "+1 INT",
              descricao:
                "Como alto elfo, você possui uma mente afiada e um domínio da magia básico. Em muitos dos mundos de D&D, existem dois tipos de altos elfos. Um tipo (que inclui os elfos cinzentos e elfos do vale de Greyhawk, os Silvanesti de Dragonlance, e os elfos do sol dos Reinos Esquecidos) são arrogantes e reclusos, acreditando serem superiores aos não elfos e até mesmo a outros elfos. O outro tipo (como os altos elfos de Greyhawk, os Qualinesti de Dragonlance e os elfos da lua dos Reinos Esquecidos) são mais comuns e amigáveis, e muitas vezes encontrados entre humanos e outras raças.",
            },
            {
              id: "22",
              nome: "Elfo da Floresta",
              bonus: "+1 SAB",
              descricao:
                "Como um elfo da floresta, você possui sentidos e intuição aguçados, seus pés ágeis guiam-no rápida e furtivamente através de suas florestas nativas. Essa categoria inclui os elfos selvagens (grugach) de Greyhawk e os Kagonesti de Dragonlance, bem como as raças chamadas de elfos da floresta em Greyhawk e nos Reinos Esquecidos. Em Faerûn, os elfos da floresta (também chamados de elfos selvagens, elfos verdes ou elfos do bosque) são reclusos e desconfiados dos não elfos.",
            },
            {
              id: "23",
              nome: "Drow",
              bonus: "+1 CAR",
              descricao:
                "Descendentes de uma antiga sub-raça de elfos de pele negra, os drow foram banidos da superfície do mundo por seguirem a deusa Lolth pelo caminho do mal e corrupção. Agora, eles construíram sua própria civilização nas profundezas do Subterrâneo, moldados pelo Caminho de Lolth. Também conhecidos como elfos negros, os drow possuem pele negra similar a obsidiana polida e cabelos brancos opacos ou amarelo pálido. Normalmente eles possuem olhos muito pálidos (tão pálidos que são confundidos com olhos brancos) com tons de lilás, prata, rosa, vermelho e azul. Eles costumam ser menores e mais magros que a maioria dos elfos.",
            },
          ],
        },
        {
          id: "3",
          nome: "Gnomo",
          bonus: "+2 INT",
          descricao:
            "Um zumbido constante de atividades permeia a vizinhança onde os gnomos formam suas comunidades privadas. Barulhos estrondosos pontuam o zumbido: um tilintar de engrenagens moendo aqui, uma pequena explosão ali, um grito de surpresa ou comemoração e, principalmente, muitas gargalhadas. Gnomos regozijam a vida, apreciando cada momento de invento, exploração, investigação, criação e brincadeira.",
          subRacas: [
            {
              id: "31",
              nome: "Gnomo da Floresta",
              bonus: "+1 DES",
              descricao:
                "Como um gnomo da floresta, você possui um traquejo natural com ilusões e velocidade e furtividade naturais. Nos mundos de D&D, gnomos da floresta são raros e reservados. Eles vivem em comunidades escondidas em florestas silvestres, usando suas ilusões e truques para se esconderem das ameaças ou para mascarar sua fuga antes de serem detectados. Gnomos da floresta tendem a ser amigáveis com outros povos da floresta espirituosos e eles tem nos elfos e fadas bondosas como seus mais importantes aliados.",
            },
            {
              id: "32",
              nome: "Gnomo das Rochas",
              bonus: "+1 CON",
              descricao:
                "Como um gnomo das rochas, você possui uma inventividade e resistência naturais acima dos outros gnomos. A maioria dos gnomos nos mundos de D&D são gnomos das rochas, incluindo os gnomos engenhoqueiros do cenário de Dragonlance.",
            },
          ],
        },
        {
          id: "4",
          nome: "Humano",
          bonus: "+1 em todos os atributos",
          descricao:
            "Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, chegando mais tarde no cenário mundial e com uma vida curta, se comparados aos anões, elfos e dragões. Talvez seja por causa de suas vidas mais curtas que eles se esforcem para alcançar o máximo que podem nos anos que têm. Ou talvez eles sintam que têm algo a provar às raças mais antigas, e é por esta razão que eles constroem seus poderosos impérios através da conquista e do comércio. O que quer que os motive, os humanos são os inovadores, os realizadores e os pioneiros dos mundos.",
          subRacas: "",
        },
      ],
    };
  },
  methods: {
    mudarInfoRaca(e) {
      this.racas.forEach((raca) => {
        if (e.target.value === raca.id) {
          this.racaAtual = raca;
          if (e.target.subRacas) this.racaAtual.subRacas = raca.subRacas;
        }
      });
    },
    mudarInfoSubRaca(e) {
      this.racaAtual.subRacas.forEach((subRaca) => {
        if (e.target.value === subRaca.id) this.subRacaAtual = subRaca;
      });
    },
  },
};
</script>

<style scoped>
.criacao-personagem-container {
  width: 50%;
}

select {
  font-family: "Poppins";
  color: #880000;
  background-color: #f1ece9;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #880000;
  padding: 5px;
  width: 100%;
}

#selects div {
  margin-bottom: 75px;
}

#info {
  background-color: transparent;
  overflow-y: auto;
  p {
    text-align: justify;
  }
}

span {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
