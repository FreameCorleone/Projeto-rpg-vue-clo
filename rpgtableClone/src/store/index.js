import { createStore } from "vuex";

export default createStore({
  state: {
    usuario: {
      nome: "Ana Clara",
      fotoUrl: require("../assets/foto de perfil.jpg"),
      fotoAlt: "Foto de perfil do usuário",
    },
    
    colecoes: [
      {
        id: 1,
        nome: "Itens mágicos",
      },
      {
        id: 2,
        nome: "Frosinn Heimur",
      },
      {
        id: 3,
        nome: "Entre o Caos e a Ordem",
      },
    ],

    fichas: [
      {
        id: 1,
        classe: "Guerreiro",
        nivel: 12,
        raca: "Humano",
        sub_raca: "Variante",
        ten: "Leal e Bom",
        descricao:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati commodi laudantium cumque magnam est praesentium dignissimos necessitatibus, reprehenderit tempora expedita at ducimus. Veritatis dolorum dolor laboriosam reprehenderit eaque voluptas.",
        dataCriacao: new Date("2024-01-28T00:00:00Z"),
      },
      {
        id: 2,
        classe: "Guerreiro",
        nivel: 10,
        raca: "Humano",
        sub_raca: "Variante",
        ten: "Caótico e Neutro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati commodi laudantium cumque magnam est praesentium dignissimos necessitatibus, reprehenderit tempora expedita at ducimus. Veritatis dolorum dolor laboriosam reprehenderit eaque voluptas.",
        dataCriacao: new Date("2024-01-21T00:00:00Z"),
      },
      {
        id: 3,
        classe: "Guerreiro",
        nivel: 8,
        raca: "Humano",
        sub_raca: "Variante",
        ten: "Neutro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati commodi laudantium cumque magnam est praesentium dignissimos necessitatibus, reprehenderit tempora expedita at ducimus. Veritatis dolorum dolor laboriosam reprehenderit eaque voluptas.",
        dataCriacao: new Date("2024-01-24T00:00:00Z"),
      },
      {
        id: 4,
        classe: "Guerreiro",
        nivel: 6,
        raca: "Humano",
        sub_raca: "Variante",
        ten: "Neutro e Bom",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati commodi laudantium cumque magnam est praesentium dignissimos necessitatibus, reprehenderit tempora expedita at ducimus. Veritatis dolorum dolor laboriosam reprehenderit eaque voluptas.",
        dataCriacao: new Date("2024-01-24T00:00:00Z"),
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
