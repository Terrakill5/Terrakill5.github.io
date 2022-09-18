import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrth4YTWZBocqzBGsc_sc1XembnR7Y3eI",
  authDomain: "pizzeria-de7c0.firebaseapp.com",
  databaseURL: "https://pizzeria-de7c0-default-rtdb.firebaseio.com",
  projectId: "pizzeria-de7c0",
  storageBucket: "pizzeria-de7c0.appspot.com",
  messagingSenderId: "577530152561",
  appId: "1:577530152561:web:ab205eb8a2b231c8a5fdd0",
  measurementId: "G-NBMEXYH3G0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
