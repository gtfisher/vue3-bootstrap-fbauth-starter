<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <h1>Home page created with Vue 3(Vite) and Bootstrap</h1>

  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <img alt="Vue logo" class="logo" src="@/assets/bootstrap-logo.svg" width="125" height="125" />

  <p>Some home page content</p>

  <p>Button showing we got bootstrap</p>
  <button class="btn btn-primary">Primary button from BS</button>

  <p>a view component</p>
  <HelloWorld msg="You did it!" />

  <h3>
    You’ve successfully created a project with
    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
  </h3>
</template>
