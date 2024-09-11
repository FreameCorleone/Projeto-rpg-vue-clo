import { createRouter, createWebHistory } from "vue-router";
import LandingPage from '../pages/LandingPage.vue';
//importar o helloworld
import HomeView from "../pages/HomeView.vue";
import TesteView from "../pages/TesteView.vue";
import HelpView from "../pages/HelpView.vue";
import CriacaoPersonagemView from "@/pages/CriacaoPersonagemView.vue";
import Inicio from "@/components/CriacaoPersonagem/Inicio.vue";
import Raca from "@/components/CriacaoPersonagem/Raca.vue";
import CadastroPage from "@/components/CadastroPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SenhaPage from "@/components/SenhaPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
  { path: '/loginpage',component: LoginPage },

  { path: '/senhapage', component: SenhaPage },

  { path: '/cadastropage', component: CadastroPage },

  { path: "/HomeView", component: HomeView },

  { path: "/teste", component: TesteView },

  { path: "/help", component: HelpView },

  {
    path: "/criacaoPersonagem",
    component: CriacaoPersonagemView,
    children: [
      { path: "", component: Inicio },
      { path: "raca", component: Raca, },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
