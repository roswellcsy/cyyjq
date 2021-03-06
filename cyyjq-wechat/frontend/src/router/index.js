// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
/* 根据vueAdmin-template修改! */

import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading
/**
 *  加载模块
 */
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
/**
 *  路由配置
 */
export const constantRouterMap = [
  { path: '/404', component: _import('404'), hidden: true },
  { // 登录
    path: '/login',
    component: Layout,
    redirect: '/login/index',
    name: 'login',
    hidden: true,
    children: [
      {
        path: '/login/index',
        name: 'login',
        component: _import('login/index'),
        meta: { title: '登录' }
      }
    ]
  },
  { // 注册
    path: '/register',
    component: Layout,
    redirect: '/register/index',
    name: 'register',
    hidden: true,
    children: [
      {
        path: '/register/index',
        name: 'register',
        component: _import('register/index'),
        meta: { title: '注册' }
      }
    ]
  },
  // { path: '/login', component: _import('login/index') },
  // { path: '/register', component: _import('register/index') },
  {
    path: '/',
    // component: _import('layout/init'),
    component: Layout,
    redirect: '/personal/userInfo',
    name: 'userInfo',
    hidden: true,
    children: [
      {
        path: 'personal/userInfo',
        name: 'userInfo',
        component: _import('personal/userInfo'),
        meta: { title: 'gerenxinxi' }
      },
      {
        path: 'personal/userInfomodify',
        name: 'userInfomodify',
        component: _import('personal/userInfomodify'),
        meta: { title: '修改个人信息' }
      },
      {
        path: 'personal/userInfocreate',
        name: 'userInfocreate',
        component: _import('personal/userInfocreate'),
        meta: { title: '添加个人信息' }
      },
      {
        path: 'personal/userPolicyQAlist',
        name: 'userPolicyQAlist',
        component: _import('personal/policyqa/userPolicyQAlist'),
        meta: { title: '我的政策咨询列表' }
      },
      {
        path: 'personal/userPolicyQA',
        name: 'userPolicyQA',
        component: _import('personal/policyqa/userPolicyQA'),
        meta: { title: '我的政策咨询' }
      },
      {
        path: 'personal/userProAdvlist',
        name: 'userProAdv',
        component: _import('personal/proadv/userProAdvlist'),
        meta: { title: '我的专业咨询列表' }
      },
      {
        path: 'personal/userProAdv',
        name: 'userProAdv',
        component: _import('personal/proadv/userProAdv'),
        meta: { title: '我的专业咨询' }
      },
      {
        path: 'personal/userCampaignlist',
        name: 'userCampaignlist',
        component: _import('personal/campaign/userCampaignlist'),
        meta: { title: '我的公益活动清单' }
      },
      {
        path: 'personal/userCampaign',
        name: 'userCampaign',
        component: _import('personal/campaign/userCampaign'),
        meta: { title: '我的公益活动' }
      },
      {
        path: 'personal/userVolServlist',
        name: 'userVolServlist',
        component: _import('personal/volserv/userVolservlist'),
        meta: { title: '我的志愿服务清单' }
      },
      {
        path: 'personal/userVolServ',
        name: 'userVolServ',
        component: _import('personal/volserv/userVolServ'),
        meta: { title: '我的志愿服务' }
      },
      {
        path: 'personal/userTraininglist',
        name: 'userTraininglist',
        component: _import('personal/training/userTraininglist'),
        meta: { title: '我的培训清单' }
      },
      {
        path: 'personal/userTraining',
        name: 'userTraining',
        component: _import('personal/training/userTraining'),
        meta: { title: '我的培训' }
      }
    ]
  },
  { // 咨询服务相关的路由
    path: '/advisor',
    component: Layout,
    redirect: '/advisor/index',
    name: 'advisor',
    hidden: true,
    children: [
      {
        path: '/advisor/index',
        name: 'advisor',
        component: _import('advisor/index'),
        meta: { title: '咨询服务' }
      }
    ]
  },
  { // 办证相关的路由
    path: '/certificate',
    component: Layout,
    redirect: '/certificate/index',
    name: 'certificate',
    hidden: true,
    children: [
      {
        path: '/certificate/index',
        name: 'certificate',
        component: _import('certificate/index'),
        meta: { title: '办证相关' }
      }
    ]
  },
  { // 政策相关的路由
    path: '/policy',
    component: Layout,
    redirect: '/policy/index',
    name: 'policy',
    hidden: true,
    children: [
      {
        path: '/policy/index',
        name: 'policy',
        component: _import('policy/index'),
        meta: { title: '市民服务' }
      },
      {
        path: '/policy/policyQa',
        component: _import('policy/policyQa'),
        meta: { title: '政策咨询' }
      },
      {
        path: '/policy/zjbl',
        component: _import('policy/zjbl'),
        // redirect: '/policy/index',
        name: 'zjbl'
      },
      {
        path: '/policy/shbz',
        component: _import('policy/shbz'),
        // redirect: '/policy/index',
        name: 'shbz'
      },
      {
        path: '/policy/jyzc',
        component: _import('policy/jyzc'),
        // redirect: '/policy/index',
        name: 'jyzc'
      },
      {
        path: '/policy/mssw',
        component: _import('policy/mssw'),
        // redirect: '/policy/index',
        name: 'mssw'
      },
      { // 证件办理
        path: '/policy/jzz',
        component: _import('policy/jzz'),
        // redirect: '/policy/index',
        name: 'jzz'
      },
      {
        path: '/policy/crj',
        component: _import('policy/crj'),
        // redirect: '/policy/index',
        name: 'crj'
      },
      { // 社会保障
        path: '/policy/cxjmyb',
        component: _import('policy/cxjmyb'),
        // redirect: '/policy/index',
        name: 'cxjmyb'
      },
      {
        path: '/policy/cxjmylbx',
        component: _import('policy/cxjmylbx'),
        // redirect: '/policy/index',
        name: 'cxjmylbx'
      },
      {
        path: '/policy/gllrjt',
        component: _import('policy/gllrjt'),
        // redirect: '/policy/index',
        name: 'gllrjt'
      },
      {
        path: '/policy/cjrfl',
        component: _import('policy/cjrfl'),
        // redirect: '/policy/index',
        name: 'cjrfl'
      },
      {
        path: '/policy/cxzdshbz',
        component: _import('policy/cxzdshbz'),
        // redirect: '/policy/index',
        name: 'cxzdshbz'
      },
      { // 教育政策
        path: '/policy/xqjy',
        component: _import('policy/xqjy'),
        // redirect: '/policy/index',
        name: 'xqjy'
      },
      { // 教育政策
        path: '/policy/xxjd',
        component: _import('policy/xxjd'),
        // redirect: '/policy/index',
        name: 'xxjd'
      },
      { // 民生事务
        path: '/policy/mssw1',
        component: _import('policy/mssw1'),
        // redirect: '/policy/index',
        name: 'mssw1'
      },
      { // 民生事务
        path: '/policy/mssw2',
        component: _import('policy/mssw2'),
        // redirect: '/policy/index',
        name: 'mssw2'
      }
    ]
  },
  { // 公益服务相关的路由
    path: '/charitycampaign',
    component: Layout,
    redirect: '/charitycampaign/index', // 列表
    name: 'charitycampaign',
    hidden: true,
    children: [
      {
        path: '/charitycampaign/index',
        name: 'charitycampaign',
        component: _import('charitycampaign/index'),
        meta: { title: '公益服务' }
      },
      {
        path: '/proAdv/index',
        name: 'proAdv',
        component: _import('charitycampaign/proAdv/index'),
        meta: { title: '专业咨询' }
      },
      {
        path: '/campaign/list',
        name: 'campaignList',
        component: _import('charitycampaign/campaign/list'),
        meta: { title: '公益服务' }
      },
      {
        path: '/campaign/detail',
        name: 'campaignDetail',
        component: _import('charitycampaign/campaign/detail'),
        meta: { title: '服务详情' }
      },
      {
        path: '/volServ/index',
        name: 'volServ',
        component: _import('charitycampaign/volServ/index'),
        meta: { title: '志愿者功能清单' }
      },
      {
        path: '/volServ/register',
        name: 'register',
        component: _import('charitycampaign/volServ/register'),
        meta: { title: '志愿者登记' }
      },
      {
        path: '/volServ/modify',
        name: 'register',
        component: _import('charitycampaign/volServ/modify'),
        meta: { title: '志愿者信息修改' }
      },
      {
        path: '/volServ/traningList',
        name: 'trainingList',
        component: _import('charitycampaign/volServ/trainingList'),
        meta: { title: '能力培训列表' }
      },
      {
        path: '/volServ/trainingDetail',
        name: 'trainingDetail',
        component: _import('charitycampaign/volServ/trainingDetail'),
        meta: { title: '能力培训详情' }
      },
      {
        path: '/volServ/serviceList',
        name: 'serviceList',
        component: _import('charitycampaign/volServ/serviceList'),
        meta: { title: '志愿服务列表' }
      },
      {
        path: '/volServ/serviceDetail',
        name: 'serviceDetail',
        component: _import('charitycampaign/volServ/serviceDetail'),
        meta: { title: '志愿服务详情' }
      }
    ]
  },
  { // 共享平台相关路由
    path: '/shareplatform',
    component: Layout,
    redirect: '/shareplatform/index',
    name: 'shareplatform',
    hidden: true,
    children: [
      {
        path: '/shareplatform/index',
        name: 'shareplatform',
        component: _import('shareplatform/index'),
        meta: { title: '共享平台' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// const router = new VueRouter({
//   base: __dirname,
//   likActiveClass: 'link-active',
//   routes: [
//     {
//       path: '/init',
//       name: 'init',
//       component: resolve => require(['../components/init.vue'], resolve),
//       children: [
//         {
//           path: 'personal/userInfo',
//           name: 'userInfo',
//           component: resolve => require(['../components/personal/userInfo.vue'], resolve),
//           meta: { title: '主页' }
//         },
//         {
//           path: 'home',
//           name: 'home',
//           component: resolve => require(['../components/home.vue'], resolve),
//           meta: { title: '主页' }
//         }
//       ]
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: resolve => require(['../components/login.vue'], resolve),
//       meta: { title: '登录' }
//     }
//   ]
// })
/**
 *  路由出口
 */
// export default router
