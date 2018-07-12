<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import $store from './store'
export default {
  name: 'App',
  $store
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
</style>
