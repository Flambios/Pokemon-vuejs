import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Pokedex from './components/Pokedex.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Pokedex",
    component: Pokedex,
    path: "/pokedex",
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*', // Redirige toute route inconnue vers la page de login
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Ajouter le guard `beforeEach` sur l'instance du routeur
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('token');

  console.log('Navigating to:', to.path);
  console.log('Requires Auth:', requiresAuth);
  console.log('Is Authenticated:', isAuthenticated);

  if (requiresAuth && !isAuthenticated) {
    console.log('Redirecting to /login');
    next('/login');
  } else {
    console.log('Proceeding to', to.path);
    next();
  }
});

export default router;
