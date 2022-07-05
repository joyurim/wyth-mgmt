import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import './tailwind.css'
import '@/assets/scss/_common.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'


Vue.config.productionTip = false
Vue.component('v-select', vSelect)

Vue.use(Element)
Vue.use(DatePicker)
Vue.use(vSelect)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
