/**
 * Created by chloe on 2017/8/16.
 */
function a(){
    console.log(11)
}
function listIsAs(){
    var arr=[].slice.call(arguments);
    var n=arr.splice(0,1);
    console.log("n==",n);
    console.log("args==",arr);
    arr.sort()
    var min=arr[0],len=arr.length-1,max=arr[len];
    var d=(max-min)/(n-1);
    console.log("d==",d)
    for(var i=1;i<n-1;i++){
        if(arr[i]!=min+d*i){
            s="Impossible";
            return s;
        }
    }
    if(i==n-1){
        s="Possible";
        return s;
    }
}
console.log(listIsAs(5,1,2,8,4,5));
function sum(){
    var len=arguments.length,sum=0,arg=arguments;
    for(var i=0;i<len;i++){
        if(typeof arg[i] !="boolean"&&arg[i]!=null&&Number(arg[i])){
            if(sum<1&&sum>0){
                sum=sum*10+Number(arg[i])*10;
                sum=sum/10;
            }else {
                sum = sum + Number(arg[i]);
            }
        }
    }
    console.log("sum="+sum);
}
// Should equal 15
sum(1, 2, 3, 4, 5);
// Should equal 0
sum(5, null, -5);
// Should equal 10
sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
    '11E', 1, 'F', 1, 'G', 1);
// Should equal 0.3, not 0.30000000000000004
sum(0.1, 1.2);
function traverse(){
    var body=document.body;
    var node=body.getElementsByTagName("*");
    for(var i=0;i<node.length;i++){
        if(node[i].width>50&&node[i].height>50){
            console.log(node[i]);
        }
    }
}
function showMoney( ) {
    console.log(this);
    return this.money;
};

var personA = new Object;
var personB = new Object;

personA.money= "100";
personB.money= "150";

personA.showMoney= showMoney;
personB.showMoney= showMoney;
console.log(personA.showMoney( )); //"100"
console.log(personB.showMoney( )); //"150"
/*
写一个traverse函数，输出所有页面宽度和高度大于50像素的节点。
*/
function traverse(){
    return Array.prototype.filter.call(document.querySelectorAll('body *'), function(node){
        return node.offsetWidth > 50 && node.offsetHeight > 50;
    });
}
var a={
    bar:1,
    methodA:function(){
        console.log(this.bar);
    }
}
var b={
    bar:2,
    methodB:function(){
        console.log(this.bar);
    }
}
a.methodA();
a.methodB= b.methodB.bind(b);
a.methodB();
b.bar=3;
a.method=b.methodB.bind(b);
a.method()
var output=function(n){
    for(var i=1;i<=n;i++) {
        printNum(i);
    }
}
function printNum(i){
    setTimeout(function () {
        console.log(new Date().toLocaleString(),i)
    }, 1000*i)
}
output(5);

function parseURLParam(url){
    var obj=new Map();
  //  var url=location.search;
    if(url){
        var param=url.split("?")[1];
        var arr=param.split(/&|=/);
        for(var i=0;i<arr.length;i=i+2){
                if (i % 2 == 0) {
                    /*if (obj.hasOwnProperty(arr[i])) {
                        obj[arr[i]].push(arr[i + 1])
                    }
                    obj[arr[i]] = arr[i + 1];*/
                    if(obj.has(arr[i])){
                        console.log("ssss")
                        var a=[];
                        a.push(obj.get(arr[i]));
                        a.push(arr[i+1]);
                        obj.set(arr[i], a);
                    }else {
                        obj.set(arr[i], arr[i + 1]);
                    }
                }
        }
    }
    var o={};
    obj.forEach(function(v,k,map){
        o[k]=v;
    })
    return o;
}
var url="https://www.nowcoder.com/question/next?pid=6408831&qid=55786&tid=10031649&dddd=33&dddd=11";
console.log(parseURLParam(url));
Array.prototype.deleteData=function(){
    var arr=this;
    arr=[...new Set(arr)];
    console.log("arr==",arr);
    return arr;
}
var data=[1,1,2,2,3,3,4,5,6,7];
data.deleteData();
console.log("去重方法1==",data);
Array.prototype.distinct = function(){
    var ret = [];
    for(var i=0; i<this.length;i++){
        for(var j=i+1;j<this.length;j++){
            if(this[j]==this[i]){
                console.log("j=="+j);
                ret.push(this.splice(j,1)[0]);
                console.log(this);
                //这步骤是最重要的this.splice(j,1)删除重复的元素，splice返回的是被删除的数组，加[0]就是
                //这个被删除的元素，ret.push(这个元素)，把这个重复的元素加入到数组ret中
            }
        }
    }
}
var data=[1,1,2,2,3,3,4,5,6,7];
data.distinct();
console.log("去重",data);
/****
 *
 * 请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。
 function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    请补充你的代码
    return tags;//返回已经排序的数组
}

 var result = mySort(50,11,16,32,24,99,57,100);/传入参数个数不确定
 console.info(result);//显示结果
 **/
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    tags=[].slice.call(arguments)
    console.log("tags==",tags);
    tags.sort(function(a,b){
        if(a<b){
            return -1;
        }else if(a==b){
            return 0;
        }else{
            return 1;
        }
    });
    return tags;//返回已经排序的数组
}

var result = mySort(50,11,16,32,24,99,57,100);
console.info(result);//显示结果

/**** 写个JavaScript函数来判断是否大于18岁，比如传入1993-6-3，返回true，传递2001-6-3返回false；***/
function ageJudge(birth){
    var data = new Date();
    var year = data.getFullYear();
    var month = data.getMonth()+1;
    var day = data.getDate();

    var year2 = parseInt( birth.split("-")[0] );
    var month2 = parseInt( birth.split("-")[1] );
    var day2 =  parseInt( birth.split("-")[2] );
    if((year-year2)>18){
        return true;
    }
    else if((year-year2)>=17&&(year-year2)<=18){
        if((month-month2)<0){
            return false;
        }else if((month-month2)>0){
            return true;
        }else{
            if((day-day2)<0){
                return false;
            }else if((day-day2)>=0){
                return true;
            }
        }
    }else{
        return false;
    }
}

ageJudge("2001-8-9");
/***
 * 判断一个对象是里面有没有环，如果有环则返回false，没环返回true***/
function cycleDetector(obj) {
    var i=0;
    for(var key in obj){
        i++;
        if(i==0){
            var t=obj[key]
        }
        if(obj.hasOwnProperty(key)&&i!=0){
            if(obj[key]==t){
                return false;
            }
            return cycleDetector(obj[key])
        }
    }
    return true;
}
function cycleDetectorData(obj){
    let hasCircle=false,cache=[];
    (function(obj){
        Object.keys(obj).forEach(key =>{
            const value=obj[key];
            if(typeof value=="object"&&value!=null){
                const index=cache.indexOf(value)
                if(index!=-1){
                    hasCircle=true;
                }else{
                    cache.push(value);
                    arguments.callee(value);
                }
            }
        })
    })(obj)
    return hasCircle
}
var obj={
    foo:{
        name:11,
        age:22,
        bar:{
            sex:0,
        }
    }
}
console.log("环==",cycleDetectorData(obj));
/***
 2.实现一个EventEmitter类，这个类包含以下方法：
 on（监听事件，该事件可以被触发多次）
 once（也是监听事件，但只能被触发一次）
 fire（触发指定的事件）
 off（移除指定事件的某个回调方法或者所有回调方法）
 ***/
class EventEmitter {
    constructor(){
       this.client=[];
    }
    on(eventType,fn){
        if(!this.client[eventType]){
            this.client[eventType]=[];
        }
        this.client[eventType].push(fn);
    }
    fire(type,param){
        if(this.client[type]){
            for(var i=0;i<this.client[type].length;i++){
                this.client[type][i](param);
            }
        }
    }
    once(){

    }
}
const event = new EventEmitter()
const drank = (person) => {
    console.log(person + '喝水')
}
event.on('drank', drank)
event.on('eat', (person) => {
    console.log(person + '吃东西')
})
event.once('buy', (person) => {
    console.log(person + '买东西')
})
event.fire('drank', '我')   // 我喝水
event.fire('drank', '我')   // 我喝水
event.fire('eat', '其它人')   // 其它人吃东西
event.fire('eat', '其它人')   // 其它人吃东西
event.fire('buy', '其它人')  //其它人买东西
event.fire('buy', '其它人')  //这里不会再次触发buy事件，因为once只能触发一次
event.off('eat')  //移除eat事件
event.fire('eat', '其它人')  //这里不会触发eat事件，因为已经移除了


/***有一批并发的异步方法，
如果在限定的时间内全部执行完，
则输出它们的执行结果，
否则输出'timeout'。
参考下面的代码，
请在runTasks中实现上述功能
（不依赖第三方库）：***/
function runTasks(options) {
// 请实现此处代码
}

/* callback(error, result) */
function asyncFuncA(param1, param2, callback) { /* async code */ }
function asyncFuncB(callback) { /* async code */ }
function asyncFuncC(param1, callback) { /* async code */ }
runTasks({
    duration: 1000,
    tasks: [
        [asyncFuncA, 'foo', 'bar'],
        asyncFuncB,
        [asyncFuncC, 'baz']
    ],
    done: function(resultA, resultB, resultC) {
        console.log(resultA, resultB, resultC);
    },
    fail: function(err) {
        console.error(err);
    },
    timeout: function() {
        console.log('timeout');
    }
});
