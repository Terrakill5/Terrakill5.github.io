import { defineStore } from "pinia";

export const useStore = defineStore("pizza", {
  state: () => ({
    tiendas: [
      {
        id: 1,
        nombre: "Mimiz Pizza",
        imagen: "https://i.imgur.com/T3AXlpn.png",
        direccion: "calle 1",
        descripcion: "Esta pizzeria se especializa en ingredientes salados",
        redSocialF: "",
        redSocialT: "",
        inventario: [
          {
            nombre: "pizza de pollo",
            imagenPizza: "https://i.imgur.com/Aff2UO6.jpg",
          },
          {
            nombre: "pizza de carne",
            imagenPizza: "https://i.imgur.com/KJ4LeOp.jpg",
          },
        ],
      },
      {
        id: 2,
        nombre: "Garibaldis Pizza",
        imagen: "https://i.imgur.com/EnSm0Ud.jpg",
        direccion: "calle 2",
        descripcion: "Esta pizzeria se especializa en ingredientes salados",
        redSocialF: "",
        redSocialT: "",
        inventario: [
          {
            nombre: "pizza de carne",
            imagenPizza: "https://i.imgur.com/KJ4LeOp.jpg",
          },
        ],
      },
      {
        id: 3,
        nombre: "Paolo Pizza",
        imagen: "https://i.imgur.com/UbV5JOY.jpg",
        direccion: "calle 3",
        descripcion: "Esta pizzeria se especializa en ingredientes salados",
        redSocialF: "",
        redSocialT: "",
        inventario: [
          {
            nombre: "pizza de jamon",
            imagenPizza: "https://i.imgur.com/4gzxyGB.jpg",
          },
          {
            nombre: "pizza de carne",
            imagenPizza: "https://i.imgur.com/KJ4LeOp.jpg",
          },
          {
            nombre: "pizza de pollo",
            imagenPizza: "https://i.imgur.com/Aff2UO6.jpg",
          },
        ],
      },
      {
        id: 4,
        nombre: "Roppotos Pizza",
        imagen: "https://i.imgur.com/lb2PIwS.png",
        direccion: "calle 4",
        descripcion: "Esta pizzeria se especializa en ingredientes salados",
        redSocialF: "",
        redSocialT: "",
        inventario: [
          {
            nombre: "pizza de piña",
            imagenPizza: "https://i.imgur.com/zzrSWEo.jpg",
          },
          {
            nombre: "pizza de jamon",
            imagenPizza: "https://i.imgur.com/4gzxyGB.jpg",
          },
          {
            nombre: "pizza de carne",
            imagenPizza: "https://i.imgur.com/KJ4LeOp.jpg",
          },
          {
            nombre: "pizza de pollo",
            imagenPizza: "https://i.imgur.com/Aff2UO6.jpg",
          },
        ],
      },
      {
        id: 5,
        nombre: "Pizzeria Carlos",
        imagen: "https://i.imgur.com/0yjanli.jpg",
        direccion: "calle 5",
        descripcion: "Esta pizzeria se especializa en ingredientes salados",
        redSocialF: "",
        redSocialT: "",
        inventario: [
          {
            nombre: "pizza de cerdo",
            imagenPizza: "https://i.imgur.com/c9CZwQV.jpg",
          },
        ],
      },
      {
        id: 6,
        nombre: "Super Pizza",
        imagen: "https://i.imgur.com/fejjLsZ.jpg",
        direccion: "calle 6",
        descripcion: "Esta pizzeria se especializa en ingredientes salados",
        redSocialF: "",
        redSocialT: "",
        inventario: [
          {
            nombre: "pizza de pescado",
            imagenPizza: "https://i.imgur.com/VDpsffC.jpg",
          },
        ],
      },
    ],
  }),
  getters: {
    obtenerTienda: (state) => state.tiendas,
  },
  actions: {
    obtenerTiendaIndividual(id) {
      return this.tiendas.filter((obj) => obj.id == id);
    },
  },
});
