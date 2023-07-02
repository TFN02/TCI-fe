import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from '@/views/FirstPage.vue';
import SecondPage from '@/views/SecondPage.vue';
import ThirdPage from '@/views/ThirdPage.vue';


const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage,
  },
  {
    path: '/secondPage',
    name: 'SecondPage',
    component: SecondPage,
  },
  {
    path: '/thirdPage',
    name: 'ThirdPage',
    component: ThirdPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
