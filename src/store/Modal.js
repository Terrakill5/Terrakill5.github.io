import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    show: false,
    condicion: "",
  }),
  getters: {
    mostrar: (state) => state.show,
    estado: (state) => state.condicion,
  },
  actions: {
    cambiarMostrar() {
      this.show = !this.show;
    },
    ponerCondicion(variable) {
      this.condicion = variable;
    },
  },
});
