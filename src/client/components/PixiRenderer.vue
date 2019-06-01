<template>
<!--https://alligator.io/vuejs/custom-component-renderers/-->
  <div class="pixi-renderer">
    <canvas ref="renderCanvas"></canvas>
    <!-- All child <template> elements get added in here -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as PIXI from 'pixi.js';

@Component
export default class PixiRenderer extends Vue {
  pixiWrapper = {
    PIXI,
    PIXIApp: <PIXI.Application|null> null
  };

  eventBus = new Vue();

  mounted() {
    // Determine the width and height of the renderer wrapper element.
    const renderCanvas = this.$refs.renderCanvas as HTMLCanvasElement;
    const w = renderCanvas.offsetWidth;
    const h = renderCanvas.offsetHeight;

    // Create a new PIXI app.
    this.pixiWrapper.PIXIApp = new PIXI.Application({
      width:1,
      height:1,
      view: renderCanvas,
      backgroundColor: 0x1099bb
    });

    this.eventBus.$emit('ready');
  }
}
</script>

<style scoped>
.pixi-renderer, canvas {
  width: 100%;
  height: 100vh;
  overflow:hidden;
}
</style>