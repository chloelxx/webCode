import Vue from 'vue'
import app from './test.vue'

/* eslint-disable no-new */
new Vue({
	el: '#test',
	render: h => h(app)
})


/*
const app=function(){
	console.log("111");
}
new app();*/
