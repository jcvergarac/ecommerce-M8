<script setup>

import { ref } from 'vue'
import { db } from '../firebase/firebase'
import { collection, getDocs } from "firebase/firestore"
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const mensaje = ref('')

const login = async () => {

try {

const querySnapshot = await getDocs(collection(db,"users"))

let encontrado = false

querySnapshot.forEach((doc) => {

const user = doc.data()

if(user.email === email.value && String(user.password) === password.value){

encontrado = true

localStorage.setItem("user", user.email)

router.push('/')

}

})

if(!encontrado){

mensaje.value = "Usuario o contraseña incorrectos"

}

} catch(error){

console.log(error)
mensaje.value = "Error conectando con Firebase"

}

}

</script>

<template>

<div class="container mt-5">

<h2>Login</h2>

<input
class="form-control mb-2"
placeholder="email"
v-model="email"
/>

<input
type="password"
class="form-control mb-2"
placeholder="password"
v-model="password"
/>

<button
class="btn btn-primary"
@click="login">

Ingresar

</button>

<p class="text-danger mt-3">
{{ mensaje }}
</p>

</div>

</template>