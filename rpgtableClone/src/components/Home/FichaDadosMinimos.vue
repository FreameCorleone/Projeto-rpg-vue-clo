<template>
  <div class="home-container">
    <div class="cabecalho">
      <nav class="paginacao">
        <ul class="pagination">
          <!-- Botão de página anterior -->
          <li class="page-item" :class="{ disabled: paginaAtual === 1 }">
            <a
              class="page-link page-link-border1"
              href="#"
              aria-label="Anterior"
              @click.prevent="paginaAnterior"
            >
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Anterior</span>
            </a>
          </li>
          <!-- Botões das páginas específicas -->
          <li
            v-for="pagina in totalPaginas"
            :key="pagina"
            class="page-item"
            :class="{ active: paginaAtual === pagina }"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="irParaPagina(pagina)"
              >{{ pagina }}</a
            >
          </li>
          <!-- Botão de próxima página -->
          <li
            class="page-item"
            :class="{ disabled: paginaAtual === totalPaginas }"
          >
            <a
              class="page-link page-link-border2"
              href="#"
              aria-label="Próximo"
              @click.prevent="proximaPagina"
            >
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Próximo</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-for="ficha in fichasPaginadas" :key="ficha.id" class="ficha-card">
      <h1>Ficha de {{ ficha.classe }} nvl {{ ficha.nivel }}</h1>
      <hr />
      <div class="sub-info">
        <h2>Raça: {{ ficha.raca }}</h2>
        <h2>Sub-raça: {{ ficha.sub_raca }}</h2>
        <h2>Tendência: {{ ficha.ten }}</h2>
      </div>
      <p>{{ ficha.descricao }}</p>
      <div class="button-location">
        <router-link to="/teste" class="dark-button">
          Veja mais &nbsp; <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FichaDadosMinimos",
  data() {
    return {
      paginaAtual: 1,
      fichasPorPagina: 3,
    };
  },
  computed: {
    fichas() {
      return this.$store.state.fichas;
    },
    fichasOrdenadas() {
      return this.fichas.slice().sort((a, b) => {
        const dataA = new Date(a.dataCriacao);
        const dataB = new Date(b.dataCriacao);
        return dataB - dataA;
      });
    },
    totalPaginas() {
      return Math.ceil(this.fichasOrdenadas.length / this.fichasPorPagina);
    },
    fichasPaginadas() {
      const inicio = (this.paginaAtual - 1) * this.fichasPorPagina;
      const fim = inicio + this.fichasPorPagina;
      return this.fichasOrdenadas.slice(inicio, fim);
    },
  },
  methods: {
    paginaAnterior() {
      if (this.paginaAtual > 1) {
        this.paginaAtual--;
      }
    },
    proximaPagina() {
      if (this.paginaAtual < this.totalPaginas) {
        this.paginaAtual++;
      }
    },
    irParaPagina(pagina) {
      this.paginaAtual = pagina;
    },
  },
};
</script>

<style scoped>
.home-container {
  flex-direction: column;
  width: 59%;
  height: 100%;
  /* Scroll gerado automaticamente no componente quando necessário */
  overflow-y: auto;
}

/* Paginação */

.cabecalho {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.page-link-border1 {
  border-radius: 5px 0 0 5px;
}
.page-link-border2 {
  border-radius: 0px 5px 5px 0px;
}

.page-item.disabled .page-link {
  pointer-events: none;
  color: #6c757d;
  background-color: #fff;
  border-color: #880000;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #880000;
  border-color: #880000;
}

.page-link:hover,
.page-item.disabled:hover .page-link {
  background-color: #e5e5e5;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.3rem 0.4rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #880000;
  background-color: #fff;
  border: 1px solid #880000;
}

/* Fichas */

.ficha-card {
  background: #f1ece9;
  border: 2px solid #880000;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}

.sub-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}

.sub-info h3 {
  position: relative;
}

.sub-info h3:not(:last-child)::after {
  content: "|";
  top: 0;
}

/* Textos */

h1,
h2,
p {
  color: #880000;
}

h2 {
  font-size: 120%;
  margin-block-start: 0;
  margin-block-end: 0;
}

h3 {
  font-size: 150%;
  margin-block-start: 0;
  margin-block-end: 0;
}

hr {
  border: 0;
  height: 2px;
  background-color: #880000;
  margin: 10px 0;
}

/* Botão "Veja mais ->" */

.button-location {
  display: flex;
  justify-content: end;
  margin-top: 10px;
}

.dark-button {
  width: 25%;
}

a {
  text-decoration: none;
  color: #f1ece9;
}

i {
  color: #f1ece9;
}
</style>
