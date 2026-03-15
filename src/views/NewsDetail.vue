<script setup>

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOneNews } from '../services/newsService'
import Navbar from '../components/Navbar.vue'

const route = useRoute()

const news = ref(null)

onMounted(async () => {

news.value = await getOneNews(route.params.id)

})

</script>

<template>

<Navbar/>

<div class="container mt-5">

<div v-if="news">

<h2>{{ news.title }}</h2>

<span class="badge bg-success">
{{ news.category }}
</span>

<p class="mt-4">
{{ news.content }}
</p>

</div>

<div v-else>

<p>Cargando noticia...</p>

</div>

</div>

</template>