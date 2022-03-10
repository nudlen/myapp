export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/performance',
    name: '业绩查询',
    // icon: '',
    component: './performance',
  },
  {
    path: '/finance',
    name: '财务报表',
    // icon: '',
    component: './finance',
  },
  {
    path: '/account',
    name: '账户管理',
    // icon: '',
    component: './account',
  },
  {
    path: '/logistics',
    name: '货车状态',
    // icon: '',
    component: './logistics',
  },
  {
    path: '/',
    redirect: '/performance',
  },
  {
    component: './404',
  },
];
