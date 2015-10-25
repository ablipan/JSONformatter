<template>
  <div class="toolbar toolbar-header" id="header">
    <h1 class="title">Web dev tools</h1>

    <div class="toolbar-actions">
      <button class="btn btn-default" v-on:click="menuClick('format')">
        <span class="icon icon-list"></span>
      </button>
    </div>
  </div>
</template>
<script type="es6">
  let self;
  export default {
    ready() {
      self = this;
    },
    methods: {
      menuClick: (action)=> {
        self.$dispatch('header-msg', action)
      }
    },
    data () {
      return {}
    }
  }
</script>
