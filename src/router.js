import Vue from "vue";
import Router from "vue-router";
import Students from "./components/Students.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Students
    },
    {
      path: "/student/add",
      name: "addStudent",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/AddStudent.vue")
    },
    {
      path: "/student/:id",
      name: "student",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Student.vue")
    },
    {
      path: "/student/:id/edit",
      name: "editStudent",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/EditStudent.vue")
    }
  ]
});
