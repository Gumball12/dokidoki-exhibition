import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/exhibition/:title',
    name: 'Exhibition',
    component: () => import('../views/Exhibition.vue'),
  },
  {
    path: '*',
    name: 'PNF',
    component: () => import('../components/PNF.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
