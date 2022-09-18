//import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
/* import { useAuthStore } from "./stores/auth.js"; */
//import NotFound from "./pages/NotFound.vue";

/* const authStore = useAuthStore(); */
/* const UserAuth = defineAsyncComponent(() =>
  import("./pages/auth/UserAuth.vue")
); */

//const Pizza = defineAsyncComponent(() => import("./pages/pizza/Pizza.vue"));
//import CoachesList from "./pages/CoachesList.vue";
/* const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: UserAuth },
    { path: "/pizzastore", component: Pizza },
    { path: "/:noFound(.*)", component: NotFound },
  ],
}); */

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/register" },
    {
      path: "/register",
      name: "register",
      component: () => import("../src/pages/auth/Register.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("../src/pages/auth/SignIn.vue"),
    },
    {
      path: "/:notFound(.*)",
      component: () => import("../src/pages/NotFound.vue"),
    },
    {
      path: "/pizzastore",
      name: "pizzastore",
      component: () => import("../src/pages/pizza/Pizza.vue"),
      meta: {
        //estas son las condiciones con la que se accede a la pagina
        requiresAuth: true, //requiere que este logeado
      },
    },
    {
      path: "/pizzaindividual/:id",
      name: "Pizza-Individual",
      component: () => import("../src/pages/pizza/PizzaIndividual.vue"),
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user); //todo esto se usa para verificar al usuario y ver si ya estaba logeado
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  //como se va a usar una promesa del getCurrentUser la funcion debe ser asincrona
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    //verifica si la pagina necesita verificacion
    if (await getCurrentUser()) {
      //se verifica con la anterior promesa que el usuario esta logeado o no cuando se reinicia la pagina
      next(); //si esta logeado y verificado, procede a la siguiente pagina
    } else {
      alert("you dont have access!"); //sino muestra alerta
      next("/");
    }
  } else {
    next();
  }
});

/* router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && authStore.isAuth) {
    next("/home");
  } else {
    next();
  }
}); */
export default router;
