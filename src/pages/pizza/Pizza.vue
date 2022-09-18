<template>
  <div class="arreglo">
    <modal-user :show="show" @tryClose="cerrarModal"></modal-user>
    <div class="padre-user">
      <svg @click="abrirModal"
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
    <p class="pizzerias">Pizzerias</p>

    <h1>Tiendas</h1>
    <p class="subtitulo">Escoge tu pizzeria favorita</p>
    <div class="grupoInput">
      <input
        type="text"
        class="buscador"
        placeholder="Busca una pizzeria"
        v-model="buscador"
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
        />
      </svg>
    </div>

    <div class="grid">
      <pizza-item
        v-for="tienda in tiendaFiltrada"
        :key="tienda.id"
        :id="tienda.id"
        :nombre="tienda.nombre"
        :imagen="tienda.imagen"
        :direccion="tienda.direccion"
        :descripcion="tienda.descripcion"
        :redSocialF="tienda.redSocialF"
        :redSocialT="tienda.redSocialT"
        :inventario="tienda.inventario"
      ></pizza-item>
    </div>
  </div>
</template>

<script setup>
import PizzaItem from "../../components/PizzaItem.vue";
import { useStore } from "../../store/PizzaStore.js";
import { ref, computed } from "vue";
import ModalUser from "../../ui/ModalUser.vue";
const usarTienda = useStore();
const tiendas = usarTienda.obtenerTienda;
let buscador = ref("");
let show = ref(false);

const tiendaFiltrada = computed(() =>
  tiendas.filter((obj) => obj.nombre.includes(buscador.value))
);

const abrirModal = () => {
  show.value = true;
}

const cerrarModal = () => {
  show.value = false;
}
</script>

<style scoped>
.padre-user {
  position: relative;
}
.user {
  position: absolute;
  right: calc(5%);
  width: 30px;
  height: 30px;
  cursor: pointer;
}
input {
  border-radius: 10px;
  width: calc(40%);
  height: 23px;
  padding-left: 10px;
}
.grid {
  padding-top: 35px;
  display: grid;
  grid-template-columns: repeat(3, 33%);

  row-gap: 60px;
}

.arreglo {
  padding-left: calc(5%);
}

.pizzerias {
  padding-top: 60px;
  border-bottom: 2px solid orange;
  display: inline-block;
  color: darkgray;
}

h1 {
  margin-bottom: 10px;
}

.grupoInput svg {
  height: 15px;
  width: 15px;
}

.subtitulo {
  color: darkgray;
  margin-top: 0;
  font-size: 0.9rem;
}

.grupoInput {
  position: relative;
}

.grupoInput svg {
  position: absolute;
  top: 6px;
  right: calc(50% + 27px);
}

@media (max-width: 768px) {
  
}
</style>
