<template>
  <div class="container">
    <section class="left">
      <img class="imagenPizza" src="https://thefoodtech.com/wp-content/uploads/2022/02/pizza-con-diversos-ingredientes.jpg" alt="Pizza de presentacion">
    </section>
    <section class="right">
      <div class="enfoque">
        <!-- <div class="theHeader">
          <the-header :auth="auth" :isLoggedIn="isLoggedIn"></the-header>
        </div> -->
        <base-modal></base-modal>

        <div class="right__center">
          <router-view v-slot="{ Component }">
            <transition
              enter-active-class="animate__animated animate__fadeInLeft"
              leave-active-class="animate__animated animate__fadeOutLeft"
              mode="out-in"
            >
              <!--  en la transicion, se usa el nombre para poder nombrar los estilos con fade, luego con el mode, se usa out-in para primero desaparezca el primer elemento y luego sale el segundo, para evitar solapamiento -->
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseModal from "./ui/BaseModal.vue";
//import TheHeader from "./components/TheHeader.vue";
//import { useAuthStore } from "./store/Auth.js";
import { onMounted} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
//import { getAuth, onAuthStateChanged } from "firebase/auth";
//const usarAuth = useAuthStore();
//const isLoggedIn = ref(false); para  verificar que esta logeado
//let auth;
/* onMounted(() => {
  //fase donde se comprueba si el usuario esta logeado
  auth = getAuth(); //recibimos de firebase el usuario en cuestion
  onAuthStateChanged(auth, (user) => {
    //cada vez que se cambie el estado del usuario, se modifica en la pagina si esta o no logeado
    if (user) {
      usarAuth.cambiarLog(true);
      //isLoggedIn.value = true;
    } else {
      usarAuth.cambiarLog(false);
      //isLoggedIn.value = false;
    }
  });
}); */

onMounted(() => {
  router.beforeEach(async (to)=> {
    if (to.name === "register" && localStorage.getItem("token")) {
      router.push("/pizzastore");
    } 
    
  })
})
</script>

<style>
body {
  margin: 0;
}

a {
  text-decoration: none;
}
</style>

<style scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr; /* fracciona en dos la pantalla principal */
  height: 100vh; /* hace que la altura sea igual a lo que se ve en pantalla  */
}

.right {
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

.imagenPizza {
  width:100%;
  height:100%;
}

.theHeader {
  text-align: center;
}

.right__center {
  height: 800px;
}

/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
} */

@media (max-width: 450px) {
  .left {
    display: none;
  }
}

@media (min-width:365px) and (max-width: 450px) {
  .container {
    display:block;
  }
}

@media (min-width: 1024px) {

}
</style>

