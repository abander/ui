// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
/*import './assets/fonts/btn_icon/iconfont.css'
import './assets/fonts/dialog_icon/iconfont.css'
import './assets/fonts/input_icon/iconfont.css'*/
import hhhUI from '../packages'
Vue.use(hhhUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
