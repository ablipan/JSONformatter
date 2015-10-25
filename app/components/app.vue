<style scoped>
  #app {
    height: 100%;
  }

  .editor {
    height: 100%;
    width: 100%;
  }
</style>
<template>
  <div id="app">
    <app-header class="header" v-on:header-msg="performHeaderAction"></app-header>
    <app-editor class="editor"></app-editor>
  </div>
</template>
<script type="es6">
  let self;
  export default {
    ready(){
      self = this;
    },
    components: {
      appEditor: require('./editor.vue'),
      // if the name is header...it can not visible !!! why????
      // so i changed the name to appHeader
      appHeader: require('./header.vue')
    },
    methods: {
      performHeaderAction: (action)=> {
        switch (action) {
          case 'format':
            self.$broadcast('format-editor');
            break;
          default :
            break;
        }
      }
    },
    data () {
      return {}
    }
  }
</script>
