import $ from 'jquery'
require('./jquery3.js')

function pro(){
	console.log("q");
}

window.showFrame=function(){
	// var f=popFrame("你确定要删除吗？").clickBtn(deleMen);
	popFrame("你确定要删除吗？")
}
function popFrame(str,key,data){
	$("#modelFrame").show();
	$("#defineWord").html(str);
	/*return {
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
				if(e.target.id=="cancel"||e.target.id=="close"){
					$("#modelFrame").hide();
					return false;
				}
			})
		}
	}*/
}
/*function deleMen(){
	console.log("show confirm");
}*/