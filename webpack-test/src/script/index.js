import Vue from 'vue'
import VueRouter from "vue-router"
import Hello from './../../component/hello.vue'
import Word from './../../component/word.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/hello',
    component: Hello
}, {
    path: '/word',
    component: Word
}];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const App = Vue.extend(require('./index.vue'))

new Vue({
    el: '#test',
    router,
    render: h => h(App)
}).$mount('#app');