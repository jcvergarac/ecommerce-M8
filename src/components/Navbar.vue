<script setup>

import { ref } from 'vue'

const user = ref(localStorage.getItem("user"))

const logout = () => {

localStorage.removeItem("user")
location.reload()

}

</script>

<template>

<nav class="navbar navbar-dark bg-dark">

<div class="container">

<router-link class="navbar-brand" to="/">
EcoNews
</router-link>

<div>

<!-- si NO está logueado -->
<router-link
v-if="!user"
class="btn btn-light me-2"
to="/login">

Login

</router-link>

<!-- si está logueado -->
<span
v-if="user"
class="text-white me-3">

Bienvenido {{ user }}

</span>

<button
v-if="user"
class="btn btn-danger me-2"
@click="logout">

Salir

</button>

<!-- publicar noticia -->
<router-link
class="btn btn-success"
to="/create">

Publicar

</router-link>

</div>

</div>

</nav>

</template>