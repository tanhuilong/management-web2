import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Zhu from "../components/Management/Performance/Zhuyao.vue";
import Home from "../views/Home.vue";
import Role from "../components/System/Role/Rolezhu.vue";
import systemzhu from "../components/System/Systemzhu.vue";
import management from "../components/Management/Managementzhu.vue";
import Userzhu from "../components/System/Usermanagement/Userzhu.vue";
import operation from "../components/Operation/Operation.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/management",
        name: "management",
        title: "业绩管理",
        component: management,
        meta: {
          path: "/management",
          name: "management",
          title: "业绩管理",
          component: management
        }
      },
      {
        path: "/zhu",
        name: "zhu",
        title: "运营管理",
        component: Zhu,
        meta: {
          path: "/zhu",
          name: "zhu",
          title: "运营管理",
          component: Zhu
        }
      },
      {
        path: "/operation",
        title: "系统管理",
        name: "operation",
        meta: {
          path: "/operation",
          title: "系统管理",
          name: "operation",
          component: operation
        },
        component: operation
      },
      {
        path: "/system",
        name: "system",
        title: "业绩报销",
        component: systemzhu,
        meta: {
          path: "/system",
          name: "system",
          title: "业绩报销",
          component: systemzhu
        }
      },
      {
        path: "/userzhu",
        name: "userzhu",
        title: "用户管理",
        component: Userzhu,
        meta: {
          path: "/userzhu",
          name: "userzhu",
          title: "用户管理",
          component: Userzhu
        }
      },
      {
        path: "/role",
        name: "role",
        title: "角色权限管理",
        component: Role,
        meta: {
          path: "/role",
          name: "role",
          title: "角色权限管理",
          component: Role
        }
      }
    ]
  },
  {
    path: "/",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  routes
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  store.commit("setBreadcrumb", to.meta);
  next();
});

export default router;
