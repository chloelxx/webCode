/**
 * Created by chloe on 2017/8/29.
 */
/***以下题目全都来此剑指Offer 以下的算法全都在牛客网上AC通过了**/
/***
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
 n<=39
 0 1 2 3 4 5 6 7 ..... n
 0 1 1 2 3 5 8 13..... f(n-1)+f(n-2)
 **/
//方法一：如果用递归，当n数数字大的时候会重复计算了子问题，运行会超时
//方法二：可以直接用for循环，直接可以求的n项的值
function f(n)
{
    var a=0,b=1;
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        for(var i=2;i<=n;i++){
            var t=b;
            b=a+b;
            a=t;

        }
    }
    return b;
}
console.log(f(7));
/****
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法;
 * 青蛙跳台阶问题其实也是一个斐波那咧问题，只是他们的初始值不同而已。一个台阶青蛙跳1级，一个中跳法，
 * 两个台阶青蛙跳 1,1或者2。青蛙两种跳法。
 * k= 0 1 2 3 4 .....n
 * fn=0 1 2 3 5 ....f(n-1)+f(n-2)
 * ***/
/***
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * 和这个问题和青蛙跳台阶的问题是一样的。都可以用jumpFloor()方法。
 * **/
function jumpFloor(n)
{
    var a=1,b=2;
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        for(var i=2;i<n;i++){
            var t=b;
            b=a+b;
            a=t;

        }
    }
    return b;
}
console.log(jumpFloor(6))
/***
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * 其实上和面都差不多同一类方法，只不过算法公式是：fn(n)=fn(n-1)+fn(n-2)+1;
 * k= 0 1 2 3 4 ..... n
 * fn=0 1 2 4 7 ..... 2^n
 * ***/
function jumpFloorII(n)
{
    var b=2,sum=2;
    if(n==0){
        sum=0;
        return sum;
    }else if(n==1){
        sum=1;
        return sum;
    }else{
        for(var i=2;i<n;i++){
            sum=sum+b;
            b=sum;
        }
        return sum;
    }

}
console.log(jumpFloorII(4),jumpFloorII(5),jumpFloorII(6))
/***美团的几个算法题
 * 1、合并两个数组并且他们都是升序的,合并之后的数组要是升序的
 * **/
function joinArray(arr1,arr2){
    var arr3=[],i=0,j=0,k=0;;
    if(arr1[0]>arr2[arr2.length-1]){
        arr3=arr2.concat(arr1);
    }else if(arr1[arr1.length-1]<arr2[0]){
        arr3=arr1.concat(arr2);
    }else{
       while(i<arr1.length&&j<arr2.length){
            if(arr1[i]<arr2[j]){
                arr3.push(arr1[i]);
                i++;
            }else if(arr1[i]>=arr2[j]){
                arr3.push(arr2[j]);
                j++;
            }
        }
        while(i<arr1.length){
            arr3.push(arr1[i]);
            i++;
        }
        while(j<arr2.length){
            arr3.push(arr2[j]);
            j++;
        }
    }
    return arr3;
}
var arr1=[1,2,3,4,5,6,7],arr2=[7,8,9];
console.log(joinArray(arr1,arr2));

function reOrderArray(a)
{
    var i=0,len=a.length,arr=[];
    for(i=0;i<len;i++){
        if(a[i]%2==1){
            arr.push(a[i]);
        }
    }
    for(i=0;i<len;i++){
        if(a[i]%2==0){
            arr.push(a[i]);
        }
    }
    return arr;
}
console.log(reOrderArray([1,2,3,4,5,6,7,8,9,10,11,12,13]))
/***
 * 题目描述
 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 ***/
function printMatrix(matrix)
{

}
/***
 * 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 * **/
function GetLeastNumbers_Solution(input, k)
{
    var arr=[];
    input=input.sort(function(a,b){
        if(a<b){
            return -1;
        }else if(a==b){
            return 0;
        }else{
            return 1;
        }
    })
    console.log("input==",input);
    var i=1,len=input.length,sum=1;
    if(k>0){
        arr.push(input[0]);
        while(i<len){
            if(input[i]!=input[i-1]&&sum<k){
                arr.push(input[i]);
                sum++;
            }
            i++;
        }
        if(sum<k){
            return [];
        }
        return arr;
    }else{
        return arr;
    }
}
console.log("sum==",GetLeastNumbers_Solution([11,2,3,4,5,6,7,3,4,2],1));
/***
 * 连续子数组最大和***/
function FindGreatestSumOfSubArray(array)
{
    var i=0,len=array.length,sum=array[0],max=array[0];
    for(i=1;i<len;i++){  //注意这个i一定是从1开始的，特别注意
        if(sum<=0){
            sum=array[i];
        }else if(sum>0){
            sum=sum+array[i];
        }
        if(sum>max){
            max=sum;
        }
    }
    return max;
}
console.log("连续子数组最大和=="+FindGreatestSumOfSubArray([-1,-1,-1,0,-1,-1]));
function main(param_1, param_2, param_n){
    //请勿修改main()的函数名称
    //输入数据时，字符串数据前后需加英文引号。输入多个数据时请用英文逗号隔开，并且与main()中参数个数相同
    var i=0,len=arguments.length,sum=1;
    var obj=[{}];
    var arr=[]
    for(i=0;i<len;i++){
        if(arguments[i]==arguments[i-1]){
            sum++;
            obj[arguments[i]]={name:arguments[i],sum:sum};
        }else{
            obj[arguments[i]]={name:arguments[i],sum:1};
        }
    }
    for(i=0;i<obj.length;i++){
        if(obj[i]&&obj[i].name){
            console.log(obj[i].name+"("+obj[i].sum+")");
        }
    }
}

/*丑数：只能含有2,3,5因子的就是丑数，但是1时丑数*/
function GetUglyNumber_Solution(index)
{
    var i=0,uglySum=1;
    while(uglySum<=index){
        i++;
        if(isUgly(i)){
            uglySum++;
        }
    }
    return i;
}
function isUgly(n){
    while(n%2==0){
        n=n/2;
    }
    while(n%3==0){
        n=n/3;
    }
    while(n%5==0){
        n=n/5;
    }
    if(n==1){
        return true;
    }else{
        return false;
    }
}
console.log("第"+8+"个丑数:"+GetUglyNumber_Solution(8));

function GetUglyNumber_Solution1(index)
{
    var arr=[],sumUgly=1;
    arr.push(1);
    var p2=0,p3=0,p5=0;
    if(index<=0){
        return 0;
    }
    while(sumUgly<index){
        var min=minUgly(arr[p2]*2,arr[p3]*3,arr[p5]*5);
        console.log("p2,p3,p5",p2,p3,p5);
        arr[sumUgly]=min;
        while(arr[p2]*2<=arr[sumUgly]){
            ++p2;
        }
        while(arr[p3]*3<=arr[sumUgly]){
            ++p3;
        }
        while(arr[p5]*5<=arr[sumUgly]){
            ++p5;
        }
        sumUgly++;
    }
    return arr[sumUgly-1];
}
function minUgly(n1,n2,n3){
    var min=n1>n2?n2:n1;
    min=min>n3?n3:min;
    return min
}
console.log("第"+8+"个丑数:"+GetUglyNumber_Solution1(8));
/***
 * 在一个字符串(1<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置
 * **/
function FirstNotRepeatingChar(str)
{
    var arr=[],i=0,index=0,sum=0,min=str.length-1;
    for(i=0;i<128;i++){
        arr[i]=0;
    }
    for(var i=0;i<str.length;i++){
        if(!arr[str.charCodeAt(i)].count){
            sum=1;
        }else{
            sum=arr[str.charCodeAt(i)].count+1;
        }
        arr[str.charCodeAt(i)]={index:i,count:sum};
        console.log("code==",str.charCodeAt(i),arr[str.charCodeAt(i)]);
    }
    for(i=0;i<128;i++){
        if(arr[i].count&&arr[i].count==1){
             min=min>arr[i].index?arr[i].index:min;
        }
    }
    return min;
}
console.log("字符串中第一个出现一次的字符的位置==",FirstNotRepeatingChar("hello h"));
/****
 * 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。**/
function FindNumsAppearOnce(array)
{
    var x,y,i,j,sum=0,m=1,mut=1,count=0;
    for(i=0;i<array.length;i++){
        count=count+array[i];
        m=m*array[i];
       for(j=0;j<array.length;j++){
           if(i!=j&&array[i]==array[j]){
               console.log("daa",array[i]);
               sum=array[i]+sum;
               mut=mut*array[i];
               break;
           }
       }
    }
var n=count-sum,k=m/mut;
    x=(n+Math.sqrt(n*n-4*k))/2;
    y=n-x;
    console.log("x==",x,"y==",y);

    console.log("n==",count-sum);
    console.log("k==",m/mut);
    return [x,y];
}
console.log(FindNumsAppearOnce([2,4,3,6,3,2,5,5]));
/***
 * 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
 * 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
 * 要注意输出格式**/
function FindContinuousSequence(sum)
{
    var i=0,j,count=0,len=sum/2+1,arr=[];
    if(sum<=1){
        return sum;
    }
    for(i=1;i<len;i++){
        count=0;
        for(j=i;j<len;j++){
            if(!arr[i-1]){
                arr[i-1]=[];
            }
            arr[i-1].push(j);
            count=j+count;
            if(count==sum){
                break;
            }
        }
        if(count!=sum){
            arr[i-1]=[];
        }
    }
    var b=[];
   for(i=0;i<arr.length;i++){
       if(arr[i].length>0){
           b.push([arr[i]]);
       }
   }
    console.log("b==",b)
    return b;
}
FindContinuousSequence(9);
/****
 * 题目描述
 输入一个递增排序的数组和一个数字S，在数组中查找两个数，
 是的他们的和正好是S，如果有多对数字的和等于S，
 输出两个数的乘积最小的。
 输出描述:
 对应每个测试案例，输出两个数，小的先输出
 **/
function FindNumbersWithSum(array, sum)
{
    var i=0,j=array.length-1,count=0,mut=1,min=array[j]*array[j],arr=[];
    while(i<j){
        count=array[i]+array[j];
        if(count<sum){
            i++;
        }
        else if(count>sum){
            j--;
        }else{
            mut=array[i]*array[j];
            if(min>mut){
                min=mut;
                arr.push(array[i]);
                arr.push(array[j]);
            }
            console.log("i,j",array[i],array[j]);
            i++;j--;
        }
    }
    console.log("arr==",arr);
    return arr;
}
FindNumbersWithSum([1,2,4,7,11,15],15);
/***
 * 汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，
 * 就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。
 * 例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
 * ***/
function LeftRotateString(str, n)
{
    if(str){
        var len=str.length-1,s1=str.substring(0,n),s2=str.substring(n);
        str=s2.concat(s1);
        return str;
    }
    return ""
}
/***
 * 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。***/
function Sum_Solution(n)
{
    var ret = 0;
    n == 0 || (ret = Sum_Solution(n-1));
    return n + ret;
}
/***写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。**/
/***
 * 5 的二进制是101, 17 的二进制是10001 。还是试着把计算分成三步：
 * 第一步各位相加但不计进位， 得到的结果是10100 （ 最后一位两个数都是1,相加的结果是二进制的10 。
 * 这一步不计进位， 因此结果仍然是0 。
 * 第二步记下进位。在这个例子中只在最后一位相加时产生一个进位，结果是二进制的10 。
 * 第三步把前两步的结果相加，得到的结果是10110 ， 转换成十进制正好是22。由此可见三步走的策略对二进制也是适用的。
 接下来我们试着把二进制的加法用位运算来替代。第一步不考虑进位对每一位相加。0加0 、1加1的结果都0。
 0加1 、1 加0的结果都是1 。我们注意到，这和异或的结果是一样的。对异或而言， 0和0、1和1异或的结果是0，
 而0和1 、1和0的异或结果是1 。接着考虑第二步进位，对加0 、0 加1 、1加0而言， 都不会产生进位，只有1加1 时，
 会向前产生一个进位。此时我们可以想象成是两个数先做位与运算，然后再向左移动一位。只有两个数都是1的时候，
 位与得到的结果是1，其余都是0。第三步把前两个步骤的结果相加。第三步相加的过程依然是重复前面两步，
 直到不产生进位为止。***/
function Add(x,y)
{
    var sum=x^y,carry=(x&y)<<1;
    while(y!=0) {
        sum = x ^ y;
        // x&y的某一位是1说明，它是它的前一位的进位，所以向左移动一位
        carry = (x & y) << 1;

        x = sum;
        y = carry;
    }

    return x;
}
console.log("Add(4,6)=="+Add(4,6));
/***
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0**/
function MoreThanHalfNum_Solution(a)
{
    var times=1,i=0,result=a[0];
    for(i=0;i<a.length;i++){
        if(times==0){
            result=a[i];
            times=1;
        }else if(a[i]==result){
            times++;
        }else{
            times--;
        }
    }
    if(times>1){
        return result;
    }else{
        return 0
    }
}
/***找出数组 arr 中重复出现过的元素**/
function duplicates(arr) {
    var index,a=[];
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(i!=j&&arr[i]==arr[j]){
                if(a.indexOf(arr[i])==-1){
                    a.push(arr[i]);
                }
            }
        }
    }
    return a;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));
/***
 * 实现一个打点计时器，要求
 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
 3、第一个数需要立即输出***/
function count(start, end) {
    var timer,t,k;
    console.log(start);
    for(var i=start+1;i<=end;i++){
        timer=(function(j){
            k=i-start;
            t= setTimeout(function(){
                console.log(j);
            },100*k)
            return t;
        })(i)
    }
    return {
        cancel:function(){
            clearTimeout(timer);
        }
    };
}
//count(12, 22).cancel();
/***
 * 题目描述
 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
 2、如果 num 能被 3 整除，返回字符串 fizz
 3、如果 num 能被 5 整除，返回字符串 buzz
 4、如果参数为空或者不是 Number 类型，返回 false
 5、其余情况，返回参数 num**/
function fizzBuzz(num) {
    var n=Number(num);
    if(!isNaN(n)){
        var s=judge(n);
        return s;
    }else
        return false;
}
function judge(n){
    var s=n%15==0?"fizzbuzz":n%3==0?"fizz":n%5==0?"buzz":n;
    return s;
}
fizzBuzz(15);
/***
 * 题目描述
 将数组 arr 中的元素作为调用函数 fn 的参数
 输入
 function () {return this.greeting + ', ' + this.name + '!!!';},
 {greeting: 'Hello', name: 'Rebecca'}

 输出
 Hello, Rebecca!!!
 **/
function argsAsArray(fn, obj) {
    this.greeting=obj.greeting;
    this.name=obj.name;
   var s= fn();
    return s;
}
/***
 * 实现函数 functionFunction，调用之后满足如下条件：
 1、返回值为一个函数 f
 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
 3、所有函数的参数数量为 1，且均为 String 类型
 输入
 functionFunction('Hello')('world')
 输出
 Hello, world
 **/

function functionFunction(str) {
    var arg=str;
    console.log("str==",str);
    return function(s){
        return arg+", "+s;
    }
}
functionFunction('Hello')('world')
/***
 * 题目描述
 实现函数 makeClosures，调用之后满足如下条件：
 1、返回一个函数数组 result，长度与 arr 相同
 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
 输入
 [1, 2, 3], function (x) {
	return x * x;
}
 输出
 4
 **/
function makeClosures(arr, fn) {
    var a=[]
    for(let i=0;i<arr.length;i++){
        a[i]=function(){
            return fn(arr[i]);
        }
    }
    return a;
}
var s=makeClosures([2, 3, 4], function (x) {
    return x * x;
})
console.log("s[i]()"+s[2]());
function makeClosures1(arr, fn) {
    var a=[],j;
    for(var i=0;i<arr.length;i++){
        a[i]=(function(j){
            return function(){
               return fn(arr[j]);
            }
        })(i)
    }
    return a;
}
var s1=makeClosures1([2, 3, 4], function (x) {
    return x * x;
})
console.log("s1[i]()"+s1[1]());
/***
 * 题目描述
 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
 1、返回一个函数 result，该函数接受一个参数
 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
 输入
 var sayIt = function(greeting, name, punctuation) {
       return greeting + ', ' + name + (punctuation || '!');
   };
 partial(sayIt, 'Hello', 'Ellie')('!!!');
 输出
 Hello, Ellie!!!
 **/
function partial(fn, str1, str2) {
    var arg1=str1,arg2=str2;
    return function(param){
            return fn(arg1,arg2,param)
    }
}
var sayIt = function(greeting, name, punctuation) {
    return greeting + ', ' + name + (punctuation || '!');
};
var s3=partial(sayIt, 'Hello', 'Ellie')('!!!');
console.log("s3==",s3);
/***题目描述
 实现函数 partialUsingArguments，调用之后满足如下条件：
 1、返回一个函数 result
 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数***/
function partialUsingArguments(fn) {
    var ars=Array.prototype.slice.call(arguments,1);
    return function(){
        var p=Array.prototype.slice.call(arguments,0);
        var a=ars.concat(p);
        //return fn(a);
        return fn.apply(this,a);/*如果这里直接是fn(a)运行是不能通过的,调用apply控制执行问上下环境，这中写法才是最正确的。*/
    }
}
var result= partialUsingArguments(function(){
    console.log(arguments);
},1,2,3,4,5);
result(6,7,8);
/***
 * 题目描述
 给定一个构造函数 constructor，请完成 alterObjects 方法，
 将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
 输入
 var C = function(name) {this.name = name; return this;};
 var obj1 = new C('Rebecca');
 alterObjects(C, 'What\'s up'); obj1.greeting;
 What's up
 ***/
function alterObjects(constructor, greeting) {
    constructor.prototype.greeting=greeting;
}
var C = function(name) {
    this.name = name;
    return this;
}
var obj1 = new C('Rebecca');
alterObjects(C, 'What\'s up');
console.log(new C("11"))
/**** constructor 的所有实例的 greeting 属性指向给定的 greeting 变量:
 说明greeting在constructor的原型对象上的一个属性。
 * */
console.log(obj1.greeting);

function captureThreeNumbers(str) {
    var s="",i=0,exg=/[0-9]/,j;
    while(i<str.length){
        j=i;s="";
        while(exg.test(str[j])){
            s=s+str[j];
            if(s.length==3){
                return s
            }
            i=j;
            j++
        }
        i++;
    }
    return false;
}
console.log(captureThreeNumbers('absd11asdsd53454'));

/***题目描述
 获取 url 中的参数
 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回数组
 输入
 http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe
 输出
 [1, 2, 3]
 ***/
function getUrlParam(sUrl, sKey) {
    if(sUrl.indexOf("?")==-1){
        return {};
    }
   var str=sUrl.substring(sUrl.indexOf("?")+1),param=[],val,index,obj={},num;
    var key,value;
    if(str){
        var arr=str.split("&");
        for(var i=0;i<arr.length-1;i++){
            index=arr[i].indexOf("=");
            console.log("sKey==",sKey);
              if(sKey!=undefined){
                  if(arr[i].indexOf(sKey)!=-1){
                      num=arr[i].substring(index + 1);
                      if(Number(num)){
                          num=Number(num);
                      }
                      param.push(num);
                  }
              }else{
                  key=  arr[i].substring(0,index);
                  value= arr[i].substring(index + 1);
                  if(Number(value)){
                      value=Number(value);
                  }
                  if(obj.hasOwnProperty(key)) {
                     if(Object.prototype.toString.call(obj[key]) === '[object Array]'){
                          obj[key].push(value);
                      }else{
                          var temp=obj[key];
                          obj[key]=[];
                          obj[key].push(temp);
                          obj[key].push(value);
                      }
                  }else{
                      obj[key] = value;
                  }
              }
        }
        var hash=arr[i].lastIndexOf("#");
        console.log("i==",i);
        index=arr[i].indexOf("=");
        key=  arr[i].substring(0,index);
        value = arr[i].substring(index + 1);
        if(hash!=-1) {
            value = arr[i].substring(index + 1, hash);
        }
        console.log("value==",value);
        if(sKey){
            if(sKey==key) {
                param.push(value);
            }
            if(param.length>0){
                var len=param.length;
                if(len==1){
                    return param[len-1];
                }
                return param;
            }else{
                return "";
            }
        }else{
            if(!obj[key]) {
                obj[key] = value;
            }else if(Object.prototype.toString.call(obj[key]) === '[object Array]'){
                obj[key].push(value);
            }else{
                var temp=obj[key];
                obj[key]=[];
                obj[key].push(temp);
                obj[key].push(value);
            }
            return obj;
        }
    }
}
console.log("param=",getUrlParam("http://www.nowcoder.com?key=ghj1&key=2&key=3&key=&test=4&test=#sdf&ee=#hehe","dfgdg"));
/***
 * 题目描述
 根据包名，在指定空间中创建对象
 输入描述:
 namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
 输出描述:
 {a: {test: 1, b: {c: {d: {}}}}}
 **/
function namespace(oNamespace, s){
    var obj=oNamespace,key,index;
    while(s){
        index=s.indexOf(".");
        if(index!=-1){
            key=s.substring(0,index);
            console.log("key==",key)
            obj=obj[key]=obj[key] instanceof Object?obj[key]:{};
            s=s.substring(index+1);
        }else{
            console.log("onj==", oNamespace);
            obj=obj[s]=obj[s] instanceof Object?obj[s]:{};
           break;
        }
    }
    return oNamespace;
}
console.log("obj",namespace({a: {test: 1, b: 2}}, 'a.b.c.d.e'));

function namespace11(oNamespace, s){
    var obj=oNamespace,key,index;
    s=s.substring(s.indexOf(".")+1);
    while(s){
        index=s.indexOf(".");
        if(index!=-1){
            key=s.substring(0,index);
            obj=obj[key]={};
        }else{
            obj=obj[s]={};
            break;
        }
        s=s.substring(index+1);
    }
    return oNamespace;
}
console.log("objsdf=",namespace11({a: {test: 1, b: 2}}, 'a.b.c.d.e.f'));

Array.prototype.uniq = function () {
   var flag=false;
    var arr=[{},{},NaN];
    console.log(arr[0]===arr[0],arr[0]===arr[1]); //arr[0],都是指向同一个对象，arr[0]和arr[1]分别指向两个不同的对象
    console.log(arr[2]===arr[2]) //false,因为NaN值和自己本身并不相等
    for(var i=0;i<this.length;i++){
        if(this[i] !== this[i]){
            console.log(this[i] !== this[i],this[i]);
            flag = true;
        }
        for(var j=i+1;j<this.length;) {
            if(this[i] === this[j] ||(flag && this[j] !== this[j])){
               console.log("this[j]==",j);
                this.splice(j, 1);
            }else{
               j++;
           }
        }
    }
    return this;
}
console.log("sssss=",[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN,{},34,5,6,7,8].uniq())
/**题目描述
 按所给的时间格式输出指定的时间
 格式说明
 对于 2014.09.05 13:14:20
 yyyy: 年份，2014
 yy: 年份，14
 MM: 月份，补满两位，09
 M: 月份, 9
 dd: 日期，补满两位，05
 d: 日期, 5
 HH: 24制小时，补满两位，13
 H: 24制小时，13
 hh: 12制小时，补满两位，01
 h: 12制小时，1
 mm: 分钟，补满两位，14
 m: 分钟，14
 ss: 秒，补满两位，20
 s: 秒，20
 w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
 示例1
 输入
 new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'
 输出
 2014-09-05 13:14:20 星期五
 ***/
function formatDate(t, str) {
    var date=t,week=["天","一","二","三","四","五","六"],len=0;
    var year=date.getFullYear(),mo=date.getMonth()+1,d=date.getDate(),
        h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),
        w=date.getDay();
    var obj = {
        yyyy:t.getFullYear(),
        yy:t.getFullYear(),
        MM:t.getMonth()+1,
        dd:t.getDate(),
        HH:t.getHours(),
        hh:t.getHours() % 12,
        mm:t.getMinutes(),
        ss:t.getSeconds(),
        ww:week[t.getDay()]
    };
    return str.replace(/([a-z]+)/ig,function($1){
        //$1是yyyy的时候yyyyyyyy有效，不会进入补零操作，w同理
        return (obj[$1+$1]===0?'0':obj[$1+$1])||('0'+obj[$1]).slice(-2);
    });
   // return year+"-"+judgePrefixZero(mo)+"-"+judgePrefixZero(d)+" "+judgePrefixZero(h)+":"+judgePrefixZero(m)+":"+judgePrefixZero(s)+" 星期"+week[w];

}
function judgePrefixZero(data){
    return data>10?data:'0'+data;
}
console.log("date",formatDate(new Date(1509894060000), 'yyyy-MM-dd HH:mm:ss 周w'))
/**如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
 否则如果字符 Unicode 编码 > 255 则长度为 2
 输入
 'hello world, 牛客', false
 输出
 17
 AC通过***/
function strLength(s, bUnicode255For1) {
    var unicode=/\u4E00-\u9FA5/,sum=0;
    if(bUnicode255For1){
        return s.length;
    }else{
        for(var i=0;i<s.length;i++){
            if(s.charCodeAt(i)>255){
                sum=sum+2;
            }else{
                sum++;
            }
        }
        return sum;
    }
}
/***
 * 题目描述
 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 1. rgb 中每个 , 后面的空格数量不固定
 2. 十六进制表达式使用六位小写字母
 3. 如果输入不符合 rgb 格式，返回原始输入
 示例1
 输入

 'rgb(255, 255, 255)'
 输出

 #ffffff
 */
function rgb2hex(sRGB) {
    var reg=/[0-9]{1,3}/g,str="",flag=true,rgb=[];
    var pa=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    if(!pa.test(sRGB)){
        return sRGB
    }
    var arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    sRGB.replace(reg,function(s){
        var data=Number(s);
        str="";
        if(data<0||data>255){
            flag=false;
        }else if(data==0){
            rgb.push('00');
        }else{
            while (data) {
                var mod = data % 16;
                str = arr[mod]+str;
                data = Math.floor(data / 16);
            }
            rgb.push(str);
        }
    })
    str=rgb.join("");
    return flag?"#"+str:sRGB;
}
console.log(rgb2hex('rgb(16,17,        00)'));

function cssStyle2DomStyle(str) {
    var pa=/-[a-zA-Z]{1}/g;
   var domStyle= str.replace(pa,function(s,index){
        if(index==0){
            return s=s.slice(1);
        }else{
            if(s.length>1){
                s=s.slice(1)
                s=s.toUpperCase();
                return s;
            }else{
                return "";
            }
        }
    })
    if(domStyle.indexOf("-")!=-1){
        domStyle=domStyle.substring(0,domStyle.indexOf("-"));
    }
    return domStyle;
}
console.log(cssStyle2DomStyle('-font-size-'));
/**题目描述
 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
 1. 不限制 key 的顺序
 2. 输入的字符串参数不会为空
 3. 忽略空白字符
 示例1
 输入
 'hello world'
 输出
 {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 **/
function count(str) {
    var obj={},sum;
    str=str.replace(/\s/,"");
    console.log(str);
    for(var i=0;i<str.length;i++){
        sum=1;
        if(obj[str[i]]){
            sum=obj[str[i]]+1;
            obj[str[i]]=sum;
        }else{
            obj[str[i]]=sum;
        }
    }
    console.log(obj)
    return obj;
}
count('hello worldddd');
/****剑指offer上面的算法题**/
/*****/
function Find(target, array)
{
    var len=array.length,col=array[0].length;
    for(var i=0;i<len;i++){
       // for(var j=0;j<col;j++) {
        console.log("arr=",array[i]);
            var isFind = divSort(target, array[i]);
            if (isFind) {
                return isFind;
            }
       // }
    }
    return false

}
function divSort(key,arr){
    var i=0,j=arr.length-1,mid;
    console.log("二分法=",arr);
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(arr[mid]<key){
            i=mid+1;
        }else if(arr[mid]>key){
            j=mid-1;
        }else{
            return true;
        }
    }
    return false;
}
var devisioin=[[1,2,3,4],[2,3,4,5],[3,4,5,6]];
console.log(Find(9,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));

/**题目描述
 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。***/
function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 }
function reConstructBinaryTree(pre,vin)
{
    if(pre.length == 0 || vin.length == 0 ) {
        return null;
    }
    var binaryTree = new TreeNode(pre[0]);
    var index=vin.indexOf(pre[0]);
    var left=vin.slice(0,index);
    var right=vin.slice(index+1);
    var pre_left = pre.slice(1, index+1);
    var pre_right = pre.slice(index+1);
    binaryTree.val=pre[0];
    binaryTree.left=reConstructBinaryTree(pre_left,left);
    binaryTree.right=reConstructBinaryTree(pre_right,right);
    return binaryTree;
}
var pre=[1,2,4,7,3,5,6,8],vin=[4,7,2,1,5,3,8,6];
console.log(reConstructBinaryTree(pre,vin));
var arr1=[];
var arr=[];
function push(node)
{
    arr1.push();

}
function pop()
{
    for(var i=0;i<arr1.length;i++){
        arr.push(arr1.pop());
    }
    return arr.pop()
}

function minNumberInRotateArray(a)
{
    var i=0,j=a.length-1,mid;
    while(a[i]>=a[j]){
        if(j-i==1){
            mid=j;
            return a[j];
        }
         mid=Math.floor((i+j)/2);
        if(a[i]==a[j]&&a[mid]==a[j]){
           return minOrder(a,i,j);
        }
        if(a[mid]<=a[j]){
            j=mid;
        }else if(a[mid]>=a[i]){
            i=mid;
        }
    }
    return a[mid];
}
function minOrder(a,left,right){
    var min=a[left];
    for(var i=left+1;i<right+1;i++){
        if(min<a[i]){
            min=a[i];
        }
    }
    return min;
}
console.log(minNumberInRotateArray([4,4,6,1,2,3,3,3,4]));

function ListNode(x){
 this.val = x;
 this.next = null;
 }
function FindKthToTail(head, k) {
    console.log("head=",head);
    var p = head, pre = null, count = 0;
    if (k <= 0) {
        return null;
    }
    while (p) {
        count++;
        if (count == k){
            break;
        }
        p = p.next;
    }
    if (p){
        pre=head;
        p=p.next;
        while (p) {
            pre = pre.next;
            p = p.next
        }
        return pre;
    }
   return null
}
var linkHead={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
    }
}
console.log(FindKthToTail(linkHead,4));

/*链表反转，AC通过*/
function ReverseList(pHead)
{
    var obj=null,p=pHead,r=null;
    while(p){
        obj=new ListNode(p.val);
        obj.next=r;
        r=obj;
        p=p.next;
    }
    return r;
}
var linkHead1={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:null
        }
    }
}
console.log("revser==",ReverseList(linkHead1));

/*两个非单调递减的链表合并成非单调递减*/
function Merge(pHead1, pHead2)
{
    var s1=pHead1,s2=pHead2
    if(s1==null&&s2==null){
        return null;
    }
    if(s1==null&&s2){
        return s2;
    }
    if(s1&&s2==null){
        return s1
    }
    var s3=pHead1.val>pHead2.val?pHead2:pHead1;//首先要判读链表是否为空，不为空才可以这样。
    if(pHead1.val>pHead2.val){
        s2=s2.next;
    }else{
        s1=s1.next;
    }
    var t=s3;
    while(s1&&s2){
        if(s1.val<s2.val){
            t.next=s1;
            s1=s1.next;
        }else if(s1.val>s2.val){
            t.next=s2;
            s2=s2.next;
        }else {
            t.next= s1;
            s1 = s1.next;
        }
        t=t.next;
    }
    if(s1){
        t.next=s1;
    }
    if(s2){
        t.next=s2;
    }
    return s3;
}
console.log("合并==",Merge({
    val:2,
    next:{
        val:3,
        next:null
    }
},{
    val:2,
    next:null
}))
function isSubtree(root1,root2){
    if(root2 == null) return true
    if(root1 == null) return false
    if(root1.val == root2.val){
        return isSubtree(root1.left,root2.left) && isSubtree(root1.right,root2.right)
    }else{
        return false
    }
}
function HasSubtree(pRoot1, pRoot2)
{
    if(!pRoot1||!pRoot2){
        return null;
    }
    var left=pRoot1.left;
    var right=pRoot1.right;
    return isSubtree(pRoot1,pRoot2)||HasSubtree(left,pRoot2)||HasSubtree(right,pRoot2);
}
var A={
    val:8,
    left:{
      val:8,
        left:{
            val:9,
            left:null,
            right:null,
        },
        right:{
            val:2,
            left:{
                val:4,
                left:null,
                right:null,
            },
            right:{
                val:7,
                left:null,
                right:null,
            },
        }
    },
    right:{
        val:7,
        left:null,
        right:null,
    }
}
var B={
    val:8,
    left:{
        val:9,
        left:null,
        right:null,
    },
    right:{
        val:2,
        left:null,
        right:null,
    }
}
console.log("判断B是否是A的子结构==",HasSubtree(A,B))

/*顺时针打印二维数组*/
function printMatrix(a)
{
    // write code here
    var start=0,col=a[0].length,row=a.length;
    var result=[]
    while(col>start*2 && row>start*2){
        result=printfMatri(a,col,row,start,result);
        ++start;
    }
    return result;
}
function printfMatri(a,col,row,start,result){
    var endx=row-1-start,endy=col-1-start;
    for(var j=start;j<=endy;j++){
        result.push(a[start][j]);
    }
    if(start<endx){
        for(var i=start+1;i<=endx;i++){
            result.push(a[i][endy]);
        }
    }
    if(start<endy&&start<endx){
        for(var i=endy-1;i>=start;i--){
            result.push(a[endx][i]);
        }
    }
    if(start<endy&&start<endx-1){
        for(var i=endx-1;i>=start+1;i--){
            result.push(a[i][start]);
        }
    }
    return result;
}
console.log("printf",printMatrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]));


var stack=[];
var minS=[];
function push(node)
{
    stack.push(node);
    var minLen=minS.length;
    if(minLen>0){
        var min=minS[minLen-1]>node?node:minS[minLen-1];
        minS.push(min);
    }else{
        minS.push(node);
    }
}
function pop()
{
    // write code here
    if(stack.length==0){
        return null
    }
    minS.pop();
    return stack.pop();

}
function top()
{
    // write code here
    if(stack.length == 0){return null;}
    return stack[stack.length - 1];
}
function min()
{
    // write code here
    if(minS.length==0){
        return null;
    }
    return minS.pop();
}
/*输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。*/
function VerifySquenceOfBST(a)
{
    if(a.length==0){
        return "No";
    }
    return judgeBST(a,0,a.length-1);
}
function judgeBST(a,left,right){
    if(left >= right) return "Yes";
    var key=a[right];
    var i=0;
    while(a[i]<key){
        i++;
    }
    for(var j=i;j<right;j++){
        if(a[j]<key){
            return "No";
        }
    }
    return judgeBST(a,left,i-1)&&judgeBST(a,i,right-1);
}
console.log(VerifySquenceOfBST([7,4,6,5]));

/***
 * 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
 * ***/
var s=[],d=[];
function FindPath(root, expectNumber)
{
    if(!root){
        return [];
    }
    s=[];
    d=[];
    sumNumberRouter(root,expectNumber);
    return d;
}
function sumNumberRouter(r,sum){
    s.push(r.val);
    if(r.val == sum && r.left==null && r.right==null){
        d.push(s.slice());
    }
    else{
        if(r.left!=null){
            sumNumberRouter(r.left,sum-r.val);
        }
        if(r.right!=null){
            sumNumberRouter(r.right,sum-r.val);
        }
    }
    s.pop();
}
console.log(FindPath({
    val:10,
    left:{
        val:7,
        left:{
            val:8,
            left:null,
            right:null,
        },
        right:{
            val:4,
            left:null,
            right:null,
        },
    },
    right:{
        val:12,
        left:null,
        right:null,
    }
},22));

/***
 * 每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。
 * HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。
 * 然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,
 * 然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,
 * 从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到剩下最后一个小朋友,
 * 可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。
 * 请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)
 * 题目分析
 * 如果只求最后一个报数胜利者的话，我们可以用数学归纳法解决该问题，为了讨论方便，先把问题稍微改变一下，并不影响原意：
 问题描述：n个人（编号0~(n-1))，从0开始报数，报到(m-1)的退出，剩下的人继续从0开始报数。求胜利者的编号。
 我们知道第一个人(编号一定是m%n-1) 出列之后，剩下的n-1个人组成了一个新      的约瑟夫环（以编号为k=m%n的人开始）:
 k  k+1  k+2  ... n-2, n-1, 0, 1, 2, ... k-2并且从k开始报0。
 现在我们把他们的编号做一下转换：
 k     --> 0
 k+1   --> 1
 k+2   --> 2
 ...
 ...
 k-2   --> n-2
 k-1   --> n-1
 变换后就完完全全成为了(n-1)个人报数的子问题，假如我们知道这个子问题的解：
 例如x是最终的胜利者，那么根据上面这个表把这个x变回去不刚好就是n个人情 况的解吗？！！
 变回去的公式很简单，相信大家都可以推出来：x'=(x+k)%n。
 令f[i]表示i个人玩游戏报m退出最后胜利者的编号，最后的结果自然是f[n]。
 递推公式
 f[1]=0;
 f[i]=(f[i-1]+m)%i;  (i>1)
 有了这个公式，我们要做的就是从1-n顺序算出f[i]的数值，最后结果是f[n]。 因为实际生活中编号总是从1开始，我们输出f[n]+1。
 * ***/
function LastRemaining_Solution(n, m) {
    if(n === 0) {
        return -1;
    }
    if(n === 1) {
        return 0;
    }
    return (LastRemaining_Solution(n-1, m)+m) % n;
}
/***输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 * ***/
function Permutation(str)
{
    var res = []
    if(str.length <= 0)return res
    var sortTemp = ''
    var arr = str.split('')
    res = sortString(arr, sortTemp, res)
    return res
}
function sortString(arr, sortTemp, res){
    if(arr.length == 0)res.push(sortTemp)
    var isRepeted = {}
    for(var i = 0; i < arr.length; i++){
        if(!isRepeted[arr[i]]){
            var temp = arr.splice(i, 1)[0]
            sortTemp += temp
            sortString(arr, sortTemp, res)
            arr.splice(i, 0, temp)
            sortTemp = sortTemp.slice(0, sortTemp.length - 1)
            isRepeted[temp] = true
        }
    }
    return res
}
console.log("排列==",Permutation("abc"));

/***输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，
 * 则打印出这三个数字能排成的最小数字为321323。***/
function PrintMinNumber(a)
{
    for(var i=0;i<a.length;i++){
        var key=a[i].toString();
        console.log(key);
        a[i]=key;
    }
    a.sort(function(a,b){
        var s1=a,s2=b,i=0,len1=a.length,len2=b.length;
        if(a==b){
            return 0;
        }
        console.log("a,b==",a,b);
        while(i<len1||i<len2){
           if(s1[i%len1]<s2[i%len2]){
               return -1;
           }
            if(s1[i%len1]>s2[i%len2]){
               return 1;
           }
            i++;
        }
        return 0;

    });
    var s=a.join("");
    console.log(a,s);
}
PrintMinNumber([311,3112,3321]);
PrintMinNumber([3,321,32]);

/***
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
 * 重复的结点不保留，返回链表头指针。
 * 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5***/
function deleteDuplication(pHead)
{
    if(!pHead){
        return null
    }
    if(pHead&&!pHead.next){
        return pHead;
    }
    var p=pHead,pre=p.next;
    while(p&&p.next){
        console.log("0==",pre);
        if(p.val==p.next.val){
            p.next=p.next.next;
        }else{
            p=p.next;
        }
    }
    console.log("link==",pHead)
    return p;
}
console.log("链表去重只留重复的数字的一个返回去重之后的链表==",deleteDuplication(
    {
        val:1,
        next:{
            val:1,
            next:{
                val:2,
                next:{
                    val:2,
                    next:{
                        val:3,
                        next:{
                            val:4,
                            next:{
                                val:5,
                                next:{
                                    val:6,
                                    next:{
                                        val:6,
                                        next:null,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }))

function deleteDuplicationOnlyOne(pHead)
{
    if(!pHead){
        return null
    }
    if(pHead&&!pHead.next){
        return pHead;
    }
    var h = {
        val: -1,
        next: pHead
    }
    var p=pHead,pre=h;
    h.next=pHead;
    while(p&&p.next){
        console.log("0==",pre);
        if(p.val==p.next.val){
            var val=p.val;
            while(p && p.val === val){
                p = p.next;
                pre.next = p;
            }
        }else{
            pre=p;
            p=p.next;
        }
    }
    console.log("link==",pHead,pre)
    return h.next;
}
console.log("链表去重只留重复的数字的一个返回去重之后的链表==",deleteDuplicationOnlyOne(
    {
        val:1,
        next:{
            val:1,
            next:{
                val:2,
                next:{
                    val:2,
                    next:{
                        val:3,
                        next:{
                            val:4,
                            next:{
                                val:5,
                                next:{
                                    val:6,
                                    next:{
                                        val:6,
                                        next:null,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }))
/***请实现一个函数，用来判断一颗二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * 下面写出的算法在牛客网上ac通过了。
 * 题目分析：主要是利用了树的镜像。如果是二叉树是一个对称二叉树，
 * 那么根节点的左子树和根节点的右子树的镜像树相同。
 * **/
/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function isSymmetrical(pRoot)
{
    if(!pRoot)
        return true;
    var left=pRoot.left;
    var right=Mirror(pRoot.right);
    if(!left&&!right){
        return true;
    }
    return equalVal(left,right);
}
function Mirror(root){
    if(!root){
        return null;
    }
    var left=Mirror(root.left);
    var right=Mirror(root.right);
    root.left=right;
    root.right=left;
    return root;
}
function equalVal(r1,r2){
    if(!r1&&!r2){
        return true;
    }
    else if(r1&&!r2){
        return false;
    }
    else if(!r1&&r2){
        return false;
    }
    if(r1.val!==r2.val){
        return false;
    }
    return equalVal(r1.left,r2.left)&&equalVal(r1.right,r2.right);
}

/***
 * 题目描述
 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 输入描述:
 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
 Tips:这个题目是按字典顺序。
 ***/
function swap(str,a,b){
    var temp = str[a]
    str[a] = str[b]
    str[b] = temp
}
//var a = []
function swapmain (str,begin,a){
    if(begin ==str.length-1){
        a.push(str.join(''))
    }else{
        for(var i =begin;i<=str.length-1;i++){
            if(i==begin||str[i]!=str[begin]){
                swap(str,i,begin)
                swapmain(str,begin+1,a)
                swap(str,i,begin)
            }

        }
    }
}
function Permutation(str)
{
    if(str==''){
        return str
    }
    var a= []
    str = str.split('')
    // write code here
    swapmain(str,0,a);
    console.log("a==",a);
    return a.sort()
}
console.log(Permutation("abcs"));
/***
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）***/
/***
 * 解题思路：
 * 【思路】借用一个辅助的栈，遍历压栈顺序，先讲第一个放入栈中，
 * 这里是1，然后判断栈顶元素是不是出栈顺序的第一个元素，这里是4，很显然1≠4，所以我们继续压栈，
 * 直到相等以后开始出栈，出栈一个元素，则将出栈顺序向后移动一位，直到不相等，这样循环等压栈顺序遍历完成，
 * 如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。
 举例：
 入栈1,2,3,4,5
 出栈4,5,3,2,1
 首先1入辅助栈，此时栈顶1≠4，继续入栈2
 此时栈顶2≠4，继续入栈3
 此时栈顶3≠4，继续入栈4
 此时栈顶4＝4，出栈4，弹出序列向后一位，此时为5，,辅助栈里面是1,2,3
 此时栈顶3≠5，继续入栈5
 此时栈顶5=5，出栈5,弹出序列向后一位，此时为3，,辅助栈里面是1,2,3
 ….
 依次执行，最后辅助栈为空。如果不为空说明弹出序列不是该栈的弹出顺序。
 ***/
function IsPopOrder(pushV, popV)
{
    if(pushV.length == 0 || popV.length == 0)
        return false;
    var s=[];
    //用于标识弹出序列的位置
    var popIndex = 0;
    for(var i = 0; i< pushV.length;i++){
        s.push(pushV[i]);
        //如果栈不为空，且栈顶元素等于弹出序列
        while(s.length>0 &&s.slice(s.length-1) == popV[popIndex]){
            //出栈
            s.pop();
            //弹出序列向后一位
            popIndex++;
        }
    }
    if(s.length==0){
        return true;
    }
    return false
}
console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]))
/***
 * 题目描述
 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
 ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数。
 ***/
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var nHighFirst,otherSum=0,count=0;
    var str=n.toString(),len=str.length;
    if(n==0){
        return 0;
    }else if(n==1||len==1){
        return 1;
    }else if(len>=2){
        if(str[0]==1){
            var s=str.slice(1);
            nHighFirst=Number(s)+1;
        }else{
            nHighFirst=powerBase10(len-1);
        }
        count=Number(str[0])*(len-1)*powerBase10(len-2);
        otherSum=NumberOf1Between1AndN_Solution(Number(str.slice(1)));
        return nHighFirst+count+otherSum;
    }
}
function powerBase10(len){
    var result=1;
    for(var i=0;i<len;i++){
        result=result*10;
    }
    return result;
}
console.log("1到n的数字中1的个数",NumberOf1Between1AndN_Solution(100));
/***LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
 * 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！
 * “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,
 * 并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。
 * LL决定去买体育彩票啦。
 *  现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何。为了方便起见,你可以认为大小王是0。
 *  **/
function IsContinuous(numbers)
{
    var len=numbers.length,countZero=0;
    for(var i=0;i<len;i++){
        if(numbers[i]>10){
            numbers[i]=numbers[i]%10;
        }
        if(numbers[i]==0){
            countZero++;
        }
    }
    numbers.sort();
    i=1;
    if(countZero==0) {
        while (i < len && (numbers[i] == numbers[i - 1] + 1)) {
            i++;
        }
        if(i==len){
            return true;
        }
        return false;
    }else{
        i=countZero+1;
        if(countZero>=4){
            return true;
        }
        while (i < len) {
            var dd=numbers[i]-numbers[i - 1];
            if(dd==0){
                return false;
            }
            if(dd==1){
                i++;
            }else{
                countZero=countZero-dd+1;
                i++;
            }
        }
        if(countZero>=0){
            return true;
        }
        return false;
    }
}
console.log(IsContinuous([0,3,2,6,4]));