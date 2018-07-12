<template>
  <div id="app">
    <router-view/>
    <Dialog></Dialog>
  </div>
</template>

<script>
import $store from './store'
import Dialog from './components/Home/Dialog.vue'
export default {
  name: 'App',
  $store,
  components: {
    Dialog
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
</style>
