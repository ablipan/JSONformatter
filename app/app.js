require('./css/photon.css');
require('./shared.styl');
import Vue from 'vue'
import App from './components/app.vue'
new Vue({
  el: 'body',
  components: {
    app: App
  }
});
