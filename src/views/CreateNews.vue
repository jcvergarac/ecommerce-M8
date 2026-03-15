<script setup>

import { ref } from 'vue'
import { createNews } from '../services/newsService'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const content = ref('')
const category = ref('solar')

const save = async ()=>{

await createNews({

title:title.value,
content:content.value,
category:category.value,
date:new Date()

})

router.push('/')

}

</script>

<template>

<div class="container mt-5">

<h2>Publicar noticia</h2>

<input
class="form-control mb-2"
placeholder="Título"
v-model="title">

<select
class="form-control mb-2"
v-model="category">

<option value="solar">Solar</option>
<option value="eolica">Eólica</option>
<option value="hidrogeno">Hidrógeno Verde</option>
<option value="geotermica">Geotérmica</option>

</select>

<textarea
class="form-control mb-2"
placeholder="Contenido"
v-model="content"></textarea>

<button
class="btn btn-success"
@click="save">

Publicar

</button>

</div>

</template>