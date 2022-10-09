import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const app = createApp()
// app.use(Button)
app.$mount()
// #endif


import { createSSRApp } from 'vue'
// 全局引入vant及样式
import vant from 'vant'
import 'vant/lib/index.css';

export function createApp() {
  const app = createSSRApp(App)
  app.use(vant)
  return {
    app
  }
}
