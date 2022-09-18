<template>
  <div>
    <div v-if="pizzaProps.show" @click="tryClose" class="backdrop"></div>
    <div class="modal" v-show="pizzaProps.show">
      <div class="div-usuario">
        <svg
          class="user"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"
          />
        </svg>
      </div>

      <p>Bienvenido</p>

      <button @click="handleSignOut">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M568.9 143.5l-150.9-138.2C404.8-6.773 384 3.039 384 21.84V96C241.2 97.63 128 126.1 128 260.6c0 54.3 35.2 108.1 74.08 136.2c12.14 8.781 29.42-2.238 24.94-16.46C186.7 252.2 256 224 384 223.1v74.2c0 18.82 20.84 28.59 34.02 16.51l150.9-138.2C578.4 167.8 578.4 152.2 568.9 143.5zM416 384c-17.67 0-32 14.33-32 32v31.1l-320-.0013V128h32c17.67 0 32-14.32 32-32S113.7 64 96 64H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.0013c35.35 0 64-28.66 64-64V416C448 398.3 433.7 384 416 384z"
          />
        </svg>
        Cerrar sesión
      </button>

      <button @click="clickCuenta">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"
          />
        </svg>
        Cuenta
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import router from "../router.js";
import { useAuthStore } from "../store/Auth.js";
import { useStore } from "../store/Modal.js";
const useAuth = useAuthStore();
const store = useStore();

const pizzaProps = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["tryClose"]);

const tryClose = () => {
  emit("tryClose");
};

const handleSignOut = () => {
  useAuth.handleSignOut();
  store.cambiarMostrar();
  store.ponerCondicion("cerrarSesion");
  setTimeout(function () {
    store.cambiarMostrar();
  }, 2000);
  router.push("/");
};

const clickCuenta = () => {
  store.cambiarMostrar();
  store.ponerCondicion("contrasena");
  setTimeout(function () {
    store.cambiarMostrar();
  }, 2000);
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
svg {
  width: 15px;
  height: 15px;
}

.modal {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  background-color: white;
  right: 0;
  top: 0;
  border: 1px solid black;
}

.div-usuario {
  position: relative;
}

.user {
  position: absolute;
  left: calc(4%);
  padding-top: 10px;
  width: 40px;
  height: 40px;
}

p {
  margin-top: 0;
  text-align: center;
  padding-top: 60px;
}

button {
  width: 100%;
  height: 40px;
  background: none;
  border: none;
}

button:hover {
  background: rgb(245, 184, 71);
}
</style>
