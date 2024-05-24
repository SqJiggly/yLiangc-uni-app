
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import uView from 'uview-ui'
import apiRequest from "./config/request.js"

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
// Vue.prototype.$store = store

const app = new Vue({
    ...App,
	store
})
apiRequest(app)

// 引入请求封装，将app参数传递到配置中

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	store
  }
}
// #endif