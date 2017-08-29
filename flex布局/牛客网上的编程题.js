/**
 * Created by chloe on 2017/8/29.
 */
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