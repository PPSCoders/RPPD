import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import about from '@/components/about';
import search from '@/components/search';
import faq from '@/components/faq';
import login from '@/components/login';
import page from '@/components/page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/page',
      name: 'page',
      component: page,
      // props: true,
    },
  ],
});
