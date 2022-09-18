<template>
  <div class="orden-pizza">
    <img :src="pizzaIndividualProps.imagen" alt="" width="140" height="120" />
    <p>{{ pizzaIndividualProps.nombre }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const pizzaIndividualProps = defineProps({
  nombre: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.orden-pizza {
  display: flex;
  align-items: center;
  background: rgb(223, 175, 80);
  box-shadow: 3px 3px 8px darkgray;
}

img {
  margin: 0;
}

p {
  margin-left: 20px;
  display: inline-block;
}
</style>
