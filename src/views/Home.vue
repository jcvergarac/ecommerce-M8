<script setup>

import { ref, onMounted } from 'vue'
import { getNews } from '../services/newsService'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'

const news = ref([])

onMounted(async ()=>{

news.value = await getNews()

})

</script>

<template>

<Navbar/>
<Hero/>

<div class="container mt-4">

<h2>Noticias recientes</h2>

<div
v-for="n in news"
:key="n.id"
class="card mt-3 p-3">

<h4>

<router-link :to="'/news/'+n.id">
{{ n.title }}
</router-link>

</h4>

<span class="badge bg-success">
{{ n.category }}
</span>

<p class="mt-2">
{{ n.content }}
</p>

</div>

</div>

</template>