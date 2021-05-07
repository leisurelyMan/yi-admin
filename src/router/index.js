import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/production",
    component: Layout,
    redirect: "/production/menu1",
    name: "production",
    meta: {
      title: "产品",
      icon: "production",
    },
    children: [
      {
        path: "EntryData",
        component: () => import("@/views/production/EntryData/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "数据录入" },
        children: [
          {
            path: "Filing",
            component: () => import("@/views/production/EntryData/Filing"),
            name: "Filing",
            meta: { title: "建档期1" },
          },
          {
            path: "FilingBefore",
            component: () =>
              import("@/views/production/EntryData/FilingBefore"),
            name: "FilingBefore",
            meta: { title: "注册前" },
          },
          // {
          //   path: "Filing2",
          //   component: () => import("@/views/production/EntryData/Filing2"),
          //   name: "Filing2",
          //   meta: { title: "建档期2" },
          // },
        ],
      },
      {
        path: "PresentationData",
        component: () => import("@/views/production/PresentationData/index"),
        name: "PresentationData",
        meta: { title: "数据展示" },
        children: [
          {
            path: "menu1-1",
            component: () =>
              import("@/views/production/PresentationData/menu1-1"),
            name: "Menu1-1",
            meta: { title: "建档期1" },
          },
          {
            path: "menu1-3",
            component: () =>
              import("@/views/production/PresentationData/menu1-3"),
            name: "Menu1-3",
            meta: { title: "建档前" },
          },
        ],
      },
      {
        path: "InstitutionalData",
        component: () => import("@/views/production/InstitutionalData/index"),
        name: "InstitutionalData",
        meta: { title: "机构数据" },
        children: [
          {
            path: "Filing",
            component: () =>
              import("@/views/production/InstitutionalData/Filing"),
            name: "Filing",
            meta: { title: "建档期1" },
          },
          {
            path: "FilingBefore",
            component: () =>
              import("@/views/production/InstitutionalData/FilingBefore"),
            name: "FilingBefore",
            meta: { title: "建档前" },
          },
          // {
          //   path: "Filing2",
          //   component: () =>
          //     import("@/views/production/InstitutionalData/Filing2"),
          //   name: "Filing2",
          //   meta: { title: "建档期2" },
          // },
        ],
      },
    ],
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "Table", icon: "table" },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "Tree", icon: "tree" },
      },
    ],
  },

  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "Form", icon: "form" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
