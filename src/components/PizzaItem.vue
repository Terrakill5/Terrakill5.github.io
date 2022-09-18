<template>
  <div class="orden">
    <img
      @click="enviarPagina"
      :src="pizzaProps.imagen"
      alt=""
      width="120"
      height="120"
    />
    <span>{{ pizzaProps.nombre }}</span>
    <p>{{ pizzaProps.direccion }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const pizzaProps = defineProps({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  redSocialF: {
    type: String,
    required: true,
  },
  redSocialT: {
    type: String,
    required: true,
  },
  inventario: {
    required: true,
  },
});

const enviarPagina = () => {
  router.push({ name: "Pizza-Individual", params: { id: pizzaProps.id } });
};
</script>

<style scoped>
img {
  border: 1px solid rgb(180, 178, 178);
  cursor: pointer;
}

p {
  color: darkgray;
  margin: 0;
  font-size: 0.9rem;
}

span {
  display: block;
  font-weight: bold;
}
</style>
