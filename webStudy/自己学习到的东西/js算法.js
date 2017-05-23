/**
 * Created by chloe on 2016/11/24.
 */
function Array(){
}
Array.prototype.deleteMore=function() {
    var arr = [];
    for (var i = 0; i < Array.length; i++) {
        var temp = Array[i];
        arr.push(temp);
        var j=i+1;
        while(j < Array.length) {
            if (temp == Array[j]) {
                j++;
            }
        }
    }
    return arr;
}
/****
 * 去重对于数组中重复的数组删除，只保留一个，
 * 1、如果数据是无序的可以利用快速排序对数据排序，然后再去重
 * 2、如果数据是有序的直接可以去重
 * ****/
//实现快速排序
function qiuckSort(left,right,arr){
    if(left<right){
        var p=position(left,right,arr);
        qiuckSort(left,p-1,arr);
        qiuckSort(p+1,right,arr);
    }
}
function position(left,right,a){
    var p=a[left];
    var i= left,j=right;
    while(i<j){  //注意这个是while语句，不要写成了if语句
        while(i<j&&a[j]>=p){
            j--;
        }
        //  if(i<j){
        a[i]=a[j];
        //    i++;
        // }
        while(i<j&&a[i]<=p){
            i++;
        }
        //  if(i<j){
        a[j]=a[i];
        //   j--
        //   }
    }
    a[i]=p;
    return i;
}
var arr=[1,2,7,8,3,5,6,9,0,11,1,2,11];
qiuckSort(0,12,arr);
console.log(arr)
function deleteMoreThanOne(){
    var i, j,temp= 0,arr=[];
    var arr=arguments,len=arr.length;
    console.log("1arr==="+len);
    console.log(arr);
    qiuckSort(0,len-1,arr);
    console.log("arr===");
    console.log(arr);
    var sum= 0,count=len;
    for(i=0;i+sum<len;i++){
        temp=arr[i];
        j=i+1;
        sum=0;
        while(j<len){
            if (temp == arr[j]) {
                j++
                sum++;
                count--;
            }else{
                if(sum>0){
                    arr[j-sum]=arr[j];
                }
                j++;
            }
        }
    }
    console.log("count=="+count)
    arr.length=len;
    return arr;
}
var a=deleteMoreThanOne(1,2,7,8,3,5,6,9,0,11,1,2,11);
console.log("去重之后的数据结果===");
console.log(a);
//请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。
//交换排序 时间复杂度O(n^2);对于数据量比较的数据不适合用来做排序
function mySort() {
    var i= 0;
    var j=0;
    var min=0;
    for(i=0;i<arguments.length;i++){
        var min=i;
        for(j=i+1;j<arguments.length;j++){
            if(arguments[min]>arguments[j]){
                min=j;
            }
        }
        if(min!=i){
            var temp=arguments[i];
            arguments[i]=arguments[min];
            arguments[min]=temp;
        }
    }
    return arguments;//返回已经排序的数组
}
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.log("run")
console.log(result);//显示结果