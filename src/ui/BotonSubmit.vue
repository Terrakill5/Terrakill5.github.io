<template>
    <button class="amarillo" :to="anyProps.link">
        <slot></slot>
    </button>

</template>

<script setup>
import {defineProps} from "vue";
const anyProps = defineProps({
    link: String
});

</script>


<style scoped>

button {
  height: 25px;
  width: 177px;
  border: 0px solid;
}
.amarillo {
  background-color:rgba(237, 237, 72, 0.67);
  
}

.amarillo:hover {
  background-color: rgb(202, 121, 14);
}
</style>