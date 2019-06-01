<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <pixi-renderer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import PixiRenderer from './components/PixiRenderer.vue';

@Component({
  components: {
    HelloWorld,
    "pixi-renderer": PixiRenderer
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}
</style>
