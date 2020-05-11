<template>
  <button
    class="wkl-btn"
    :class="type ? 'wkl-btn-' + type : ''"
  >
    按钮
  </button>
</template>

<script>
export default {
  name: 'WklButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="less">
@import "./style/index";
</style>
