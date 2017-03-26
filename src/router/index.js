import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/common/Home'
import Login from '@/components/page/Login'
import Readme from '@/components/page/Readme'
import BaseTable from '@/components/page/BaseTable'
import VueTable from '@/components/page/VueTable'
import BaseForm from '../components/page/BaseForm';
import VueEditor from '../components/page/VueEditor';
import Markdown from '../components/page/Markdown';
import Upload from '../components/page/Upload';
import BaseCharts from '../components/page/BaseCharts';
import MixCharts from '../components/page/MixCharts';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
            path: '/',
            component: Readme
            // component: resolve => require(['../components/page/Readme.vue'], resolve)
        },
        {
            path: '/basetable',
            component: BaseTable
            // component: resolve => require(['../components/page/BaseTable.vue'], resolve)
        },
        {
            path: '/vuetable',
            component: VueTable    // vue-datasource组件
            // component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
        },
        {
            path: '/baseform',
            component: BaseForm
            // component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        },
        {
            path: '/vueeditor',
            component: VueEditor
            // component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
        },
        {
            path: '/markdown',
            component: Markdown     // Vue-Quill-Editor组件
            // component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
        },
        {
            path: '/upload',
            component: Upload       // Vue-Core-Image-Upload组件
            // component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
        },
        {
            path: '/basecharts',
            component: BaseCharts   // vue-echarts-v3组件
            // component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
        },
        {
            path: '/mixcharts',
            component: MixCharts    // vue-echarts-v3组件
            // component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
        }
      ]
    }
  ]
})
