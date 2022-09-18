<template>
  <div class="pagina">
    <div class="icono-top">
      <svg
        class="icono-top-icono"
        @click="atras"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
        />
      </svg>
    </div>
    <div class="centro">
      <div class="margen-centro">
        <img :src="tiendaIndividual[0].imagen" alt="" width="90" height="90" />
        <h1>{{ tiendaIndividual[0].nombre }}</h1>
        <p>{{ tiendaIndividual[0].direccion }}</p>
        <p>{{ tiendaIndividual[0].descripcion }}</p>
        <div class="iconos">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="grid">
      <pizza-desglosada
        v-for="inventario in tiendaIndividual[0].inventario"
        :key="inventario.nombre"
        :nombre="inventario.nombre"
        :imagen="inventario.imagenPizza"
      ></pizza-desglosada>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../store/PizzaStore.js";
import PizzaDesglosada from "../../components/PizzaDesglosada.vue";
const router = useRouter();
const usarTienda = useStore();

const id = computed(() => router.currentRoute.value.params.id);
const tiendaIndividual = usarTienda.obtenerTiendaIndividual(
  parseInt(id.value, 10)
);
const atras = () => {
  router.push("/pizzastore");
};
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
p {
  color: darkgray;
  margin-top: 10px;
  text-align: center;
}

.icono-top {
  position: relative;
  height: 20px;
  width: 100%;
}

.icono-top-icono {
  position: absolute;
  height: 20px;
  width: 20px;
  right: calc(5%);
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 47%);

  row-gap: 20px;
  column-gap: 40px;
  margin: 40px 20px;
}
.pagina {
  margin-top: 20px;
}
.centro {
  width: 45%;
  margin: 0 auto;
  box-shadow: 5px 5px 15px 5px darkgray;
  border-radius: 10px;
}

.margen-centro {
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centro img {
  border: 1px solid black;
}

.iconos {
  margin-top: 10px;
}

svg {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
