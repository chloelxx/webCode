import Vue from 'vue'
import app from './app.vue'
require('./jquery3.js')
function pro(){
	console.log("q");
}
new Vue({
	el: '#show',
	render: h => h(app)
})
function showFrame(){
	var f=popFrame("你确定要删除吗？").clickBtn(deleMen);
}
function popFrame(str,key,data){
	$("#modelFrame").show();
	$("#defineWord").html(str);
	return{
		clickBtn:function(fn){
			$("#modelFrame").click(function(e){
				e=e||window.event;
				console.log(e)
				if(e.target.id=="confirm"){
					$("#modelFrame").hide();
					if(fn){
						fn();
					}
					return true;
				}
				if(e.target.id=="cancel"){
					$("#modelFrame").hide();
					return false;
				}
			})
		}
	}
}
function deleMen(){
	console.log("show confirm");
}