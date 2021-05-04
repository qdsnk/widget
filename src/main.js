import '@/styles/reset.css';
import '@/styles/main.css';
// import LoadScript from 'vue-plugin-load-script';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    // data :{
    //     display:false
    // },
  render: h => h(App),
}).$mount('#app')


// Vue.use(LoadScript);
// Vue.loadScript("/assets/js/detect.js");