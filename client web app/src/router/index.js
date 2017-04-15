import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import EducationGraph from '@/components/EducationGraph';
import Map from '@/components/map';
import newpolicyform from '@/components/newpolicyform';
import simplequeryemployment from '@/components/simplequeryemployment';
import chartjs from '@/components/chartjs';

import ActivityGraph from '@/components/ActivityGraph';


Vue.component('activity-graph', ActivityGraph)

Vue.use(Router);

export default new Router({
  routes: [
     { path: '/', redirect: '/dashboard' },
    {
      path: '/dashboard',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/educationgraph',
      name: 'Education-Graph',
      component: EducationGraph,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    }
    ,
    {
      path: '/policy/new',
      name: 'newpolicyform',
      component: newpolicyform,
    },
    {
      path: '/employment/simple',
      name: 'simplequeryemployment',
      component: simplequeryemployment,
    },
    {
      path: '/chartjs',
      name: 'chartjs',
      component: chartjs,
    }
  ],
});
