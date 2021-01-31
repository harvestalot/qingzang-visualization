import Vue from 'vue';
import VueRouter from 'vue-router';

// const Layout = () => import('@/components/Layout.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/tibet-plateau/integral',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: 'tibet-plateau',
        component: () => import('@/views/TibetPlateau'),
        children: [
          {
            path: 'integral',
            name: 'Home.TibetPlateau.Integral',
            component: () => import('@/views/TibetPlateau/Integral'),
          },
          {
            path: 'population-size',
            name: 'Home.Integral.PopulationSize',
            component: () => import('@/views/TibetPlateau/PopulationSize'),
          },
          {
            path: 'use-land-scale',
            name: 'Home.Integral.UseLandScale',
            component: () => import('@/views/TibetPlateau/UseLandScale'),
          },
          {
            path: 'town-temporal-distribution',
            name: 'Home.Integral.TownTemporalDistribution',
            component: () => import('@/views/TibetPlateau/TownTemporalDistribution'),
          },
        ],
      },
      {
        path: 'lasa',
        name: 'LaSa',
        component: () => import('@/views/LaSa'),
        children: [
          {
            path: 'integral',
            name: 'Home.LaSa.Integral',
            component: () => import('@/views/LaSa/Integral'),
          },
        ],
      },
      {
        path: 'lanxi',
        name: 'LanXi',
        component: () => import('@/views/LanXi'),
        children: [
          {
            path: 'integral',
            name: 'Home.LanXi.Integral',
            component: () => import('@/views/LanXi/Integral'),
          },
        ],
      },
      {
        path: 'frontier',
        name: 'Frontier',
        component: () => import('@/views/Frontier'),
        children: [
          {
            path: 'integral',
            name: 'Home.Frontier.Integral',
            component: () => import('@/views/Frontier/Integral'),
          },
        ],
      },
      {
        path: 'demo',
        name: 'Demo',
        component: () => import('@/views/Demo'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
