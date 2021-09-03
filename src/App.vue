<script setup lang="ts">
// This starter template is using Vue 3  SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import TsxComponent from './components/TsxComponent'
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <TsxComponent />
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
