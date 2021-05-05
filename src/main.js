import '@/styles/reset.css';
import '@/styles/main.css';
import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false
import 'document-register-element/build/document-register-element'
import vueCustomElement from 'vue-custom-element'

Vue.use (vueCustomElement)

// new Vue({
//     // data :{
//     //     display:false
//     // },
//   render: h => h(App),
// }).$mount('#app')

Vue.customElement('vue-widget', App)