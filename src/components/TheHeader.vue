<template>
    <div class="navigation">
        <ul>
            <li class="list" :class="{active: router.currentRoute.value.name === 'register'}">
                <router-link to="/register">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M223.1 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 223.1 256zM274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512h286.4c-1.246-5.531-1.43-11.31-.2832-17.04l14.28-71.41c1.943-9.723 6.676-18.56 13.68-25.56l45.72-45.72C363.3 322.4 321.2 304 274.7 304zM371.4 420.6c-2.514 2.512-4.227 5.715-4.924 9.203l-14.28 71.41c-1.258 6.289 4.293 11.84 10.59 10.59l71.42-14.29c3.482-.6992 6.682-2.406 9.195-4.922l125.3-125.3l-72.01-72.01L371.4 420.6zM629.5 255.7l-21.1-21.11c-14.06-14.06-36.85-14.06-50.91 0l-38.13 38.14l72.01 72.01l38.13-38.13C643.5 292.5 643.5 269.7 629.5 255.7z"/></svg></span>
                    <span class="text">Register</span>
                </router-link>
            </li>
            <li class="list" :class="{active: router.currentRoute.value.name === 'sign-in'}">
                <router-link to="/sign-in">
                    <span class="icon" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg></span>
                    <span class="text">Sign-in</span>
                </router-link>
            </li>
            <li class="list" :class="{active: router.currentRoute.value.name === 'pizzastore'}">
                <router-link to="pizzastore">
                    <span class="icon" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M100.4 112.3L.5101 491.7c-1.375 5.625 .1622 11.6 4.287 15.6c4.127 4.125 10.13 5.744 15.63 4.119l379.1-105.1C395.3 231.4 276.5 114.1 100.4 112.3zM127.1 416c-17.62 0-32-14.38-32-31.1c0-17.62 14.39-32 32.01-32c17.63 0 32 14.38 32 31.1C160 401.6 145.6 416 127.1 416zM175.1 271.1c-17.63 0-32-14.38-32-32c0-17.62 14.38-31.1 32-31.1c17.62 0 32 14.38 32 31.1C208 257.6 193.6 271.1 175.1 271.1zM272 367.1c-17.62 0-32-14.38-32-31.1c0-17.62 14.38-32 32-32c17.63 0 32 14.38 32 32C304 353.6 289.6 367.1 272 367.1zM158.9 .1406c-16.13-1.5-31.25 8.501-35.38 24.12L108.7 80.52c187.6 5.5 314.5 130.6 322.5 316.1l56.88-15.75c15.75-4.375 25.5-19.62 23.63-35.87C490.9 165.1 340.8 17.39 158.9 .1406z"/></svg></span>
                    <span class="text">Pizza Store</span>
                </router-link>
            </li>
            <li class="list">
                <a @click="handleSignOut" v-if="appProps.isLoggedIn">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/></svg></span>
                    <span class="text">Sign out</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</template>

<script setup>
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { defineProps} from "vue";

const appProps = defineProps({
  auth: {
    required: true,
  },
  isLoggedIn: {
    type: Boolean,
    required: true,
  }
});

const router = useRouter();
/* let name = router.currentRoute.value.name;
console.log(router.currentRoute.value.name); */

const handleSignOut = () => {
  signOut(appProps.auth).then(() => {
    router.push("/"); //lo envia a la pagina principal
  });
};


</script>

<style scoped>
/* body {
    display:flex;
    justify-content: center;
    align-items: center;
    min-height:100vh;
    background: #222327;
} */
.navigation {
    position: relative;
    width:  400px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.navigation ul {
    display: flex;
    width: 350px;
}

.navigation ul li {
    position: relative;
    list-style:none;
    width: 70px;
    height: 70px;
    z-index:1;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align:center;
    font-weight: 500;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5rem;
    text-align: center;
    transition: 0.5s;
    color: #222327;
}

.navigation ul li.active a .icon {
    transform: translateY(-32px);
}

.navigation ul li a .text {
    position: absolute;
    color: #222327;
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
}

.navigation ul li.active a .text {
    opacity: 1;
    transform: translateY(10px);
}

.indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #29fd53;
    border-radius: 50%;
    border: 6px solid #222327;
    transition: 0.5s;
}

.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 #222327;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 #222327;
}

.navigation ul li:nth-child(1).active ~ .indicator {
    transform: translateX(calc(70px * 0));
}

.navigation ul li:nth-child(2).active ~ .indicator {
    transform: translateX(calc(70px * 1));
}

.navigation ul li:nth-child(3).active ~ .indicator {
    transform: translateX(calc(70px * 2));
}
.icon {
    height: 20px;
    width: 20px;
}
</style>