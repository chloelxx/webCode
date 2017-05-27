import Vue from 'vue'
import VueRouter from "vue-router"
import Hello from './../../component/hello.vue'
import Word from './../../component/word.vue'
import Show from './../../component/show.vue'
import Confirm from './../../component/confirm.vue'
import fa from  './../../component/frame.vue'

import {obj} from './exportTest.js'
console.log("exportTest==");
console.log(obj);
console.log(obj.a());

let re=require("./exportTest");
console.log("re11===");
console.log(re);
console.log(re.obj.a());
Vue.use(VueRouter)


const routes = [{
    path: '/hello',
    components: { a:Confirm},
    children:[
        {
            path: '/hello/frame', component: fa
        },
    ],
}, {
    path: '/word',
    components: {
            a:Show
        }
}];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const App = Vue.extend(require('./index.vue'))

new Vue({
    el: '#test',
    router,
    render: h => h(App),
}).$mount('#app');

