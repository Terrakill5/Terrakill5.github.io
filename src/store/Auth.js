import { defineStore } from "pinia";
import { useStore } from "./Modal.js";
/* import {
  //getAuth,
  //onAuthStateChanged,
  //createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //GoogleAuthProvider,
  //signInWithPopup,
  //signOut,
} from "firebase/auth"; */
let timer;
export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLog: false,
    auth: null,
    cambiarPagina: false,
    token: "",
    id: "",
    didAutoLogout: false,
  }),
  getters: {
    estado: (state) => state.isLog,
    isAuth: (state) => state.isAuth,
    permite: (state) => state.cambiarPagina,
  },
  actions: {
    cambiarLog(valor) {
      this.isLog = valor;
    },
    falsoPagina() {
      this.cambiarPagina = false;
    },
    setUser(token, id) {
      this.token = token;
      this.id = id;
      this.didAutoLogout = false;
    },
    setAutoLogout(valor) {
      this.didAutoLogout = valor;
    },
    autoLogout() {
      this.handleSignOut;
      this.setAutoLogout;
    },
    /* comprobacionAuth() {
      this.auth = getAuth(); //recibimos de firebase el usuario en cuestion
      onAuthStateChanged(this.auth, (user) => {
        //cada vez que se cambie el estado del usuario, se modifica en la pagina si esta o no logeado
        if (user) {
          this.cambiarLog(true);
        } else {
          this.cambiarLog(false);
        }
      });
    }, */
    /* async register(email, password) {
      const store = useStore();
      this.auth = getAuth(); //recibimos de firebase el usuario en cuestion
      await createUserWithEmailAndPassword(this.auth, email, password).then(
        () => {
          this.cambiarLog(true);
          console.log("Registro completado");
          store.cambiarMostrar();
          store.ponerCondicion("logeo");
          setTimeout(function () {
            store.cambiarMostrar();
          }, 2000);
          this.cambiarPagina = true;
        }
      );
    }, */
    /* async logear(email, password) {
      const store = useStore();
      let errMsg;
      this.auth = getAuth(); //recibimos de firebase el usuario en cuestion
      await signInWithEmailAndPassword(this.auth, email, password)
        .then(() => {
          this.cambiarLog(true);
          console.log("Te has logeado exitosamente!");
          store.cambiarMostrar();

          store.ponerCondicion("logeo");
          setTimeout(function () {
            store.cambiarMostrar();
          }, 2000);

          this.cambiarPagina = true;
        })
        .catch((error) => {
          //en caso el correo sea invalido
          console.log(error.code);
          console.log(errMsg);
          switch (error.code) {
            case "auth/invalid-email": //caso que el email sea invalido
              errMsg = "Invalid email";
              break;
            case "auth/user-not-found": //no se encuentra al usuario
              errMsg = "No account with that email was found";
              break;
            case "auth/wrong-password": //contraseña incorrecta
              errMsg = "Incorrect password";
              break;
            default: //el correo o la clave es errada
              errMsg = "Email or password was incorrect";
              break;
          }
        });
    }, */
    async handleSignOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");

      clearTimeout(timer); //limpia el timer de la expiracion cada vez que deslogea
      this.setUser("", "");
      this.cambiarLog(false);
    },
    async auth(email, password, mode) {
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrth4YTWZBocqzBGsc_sc1XembnR7Y3eI";
      if (mode === "register") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrth4YTWZBocqzBGsc_sc1XembnR7Y3eI";
      }
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });
      const resData = await response.json();
      console.log(resData);
      if (!response.ok) {
        console.log(resData);
        const error = new Error(resData.message || "Failed to authenticate.");
        throw error;
      } else {
        const expiresIn = +resData.expiresIn * 1000; //Transforma en numero la duracion del token en milisegundos
        //const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn; // esto hace que tenga una duracion de 1 hora el token
        localStorage.setItem("token", resData.idToken); //Se guarda en localStorage el token y userId al volver a recargar la pagina para no tener que logearse nuevamente
        localStorage.setItem("userId", resData.localId);
        localStorage.setItem("tokenExpiration", expirationDate);

        timer = setTimeout(function () {
          this.handleSignOut();
        }, expiresIn); //crea un timer cada vez que se logea para deslogearlo pasado la hora

        this.setUser(resData.idToken, resData.localId);
        const store = useStore();
        this.cambiarLog(true);
        if (mode === "register") {
          console.log("Registro completado");
          store.cambiarMostrar();
          store.ponerCondicion("logeo");
          setTimeout(function () {
            store.cambiarMostrar();
          }, 2000);
        } else {
          console.log("Registro completado");
          store.cambiarMostrar();
          store.ponerCondicion("logeo");
          setTimeout(function () {
            store.cambiarMostrar();
          }, 2000);
        }
        this.cambiarPagina = true;
      }
    },
    tryLogin() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      setTimeout(function () {
        this.handleSignOut();
      }, expiresIn);

      if (token && userId) {
        this.setUser(token, userId);
      }
    },
    /* async signInWithGoogle() {
      const store = useStore();
      const provider = new GoogleAuthProvider();
      this.auth = getAuth(); //recibimos de firebase el usuario en cuestion
      await signInWithPopup(this.auth, provider)
        .then((result) => {
          store.cambiarMostrar();

          store.ponerCondicion("logeo");
          setTimeout(function () {
            store.cambiarMostrar();
          }, 2000);
          console.log(result.user);

          console.log("llego hasta aca");
          console.log("luego aca");
          this.cambiarLog(true);
          this.cambiarPagina = true;
        })
        .catch(() => {
          //handle error
        });
    }, */
  },
});
