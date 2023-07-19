// router.js
import { createRouter, createWebHistory } from 'vue-router';
import QuestionOne from "./Views/QuestionOne.vue";
import QuestionTwo from './Views/QuestionTwo.vue';
import QuestionThree from './Views/QuestionThree.vue';

const routes = [
  { path: '/', redirect: '/question-one' }, // Redirect to the first question
  { path: '/question-one', component: QuestionOne },
  { path: '/question-two', component: QuestionTwo },
  { path: '/question-three', component: QuestionThree },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
