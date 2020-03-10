import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import * as fb from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  store,
  router,
  vuetify,
//   // created() {
//   //   // eslint-disable-next-line no-unused-vars
//   //   var firebaseConfig = {
//   //     apiKey: "AIzaSyCTYCS8Cxw0vVkf290Aqd-NgxXLgcnjYrw",
//   //     authDomain: "itc-ads-6b7e7.firebaseapp.com",
//   //     databaseURL: "https://itc-ads-6b7e7.firebaseio.com",
//   //     projectId: "itc-ads-6b7e7",
//   //     storageBucket: "itc-ads-6b7e7.appspot.com",
//   //     messagingSenderId: "491811108049",
//   //     appId: "1:491811108049:web:297d45936997db6e9081f0"
//   //   };
//   },
//   vuetify,
//   componente:
  render: h => h(App)
}).$mount('#app')
