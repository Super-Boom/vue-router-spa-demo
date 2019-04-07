import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import index from './components/index.vue';
import hello from './components/hello.vue';
import navList from './components/navList.vue';
//定义路由
const routes = [
  { path: '/', component: App },
  { path: '/navList', component: navList },
  { path: '/index', component: index },
  { path: '/hello', component: hello }
]
//创建 router 实例，然后传 routes 配置
const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
