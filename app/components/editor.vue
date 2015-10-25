<template>
  <div id="editor">{}</div>
</template>
<script type="es6">
  let editor;
  export default {
    ready() {
      // init the ace editor
      editor = ace.edit("editor");
      editor.setTheme("ace/theme/monokai");
      editor.session.setMode("ace/mode/json");
      editor.getSession().setTabSize(2);
    },
    events: {
      'format-editor': () => {
        let val = editor.session.getValue(); // get the json
        val = JSON.stringify(JSON.parse(val), null, 2); // format the json
        editor.session.setValue(val); // put the json back to editor
      }
    },
    data () {
      return {}
    }
  }
</script>
