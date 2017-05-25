<template>
    <div id="confirm">
        <button class="btn" >show</button>
             <!-- 路由出口 @click="showFrame"-->
           <!-- 路由匹配到的组件将渲染在这里 -->
           <router-view name="a" style="color:orange"></router-view>
    </div>
</template>
<script>
import Vue from 'vue'
 require("jquery")
 import ac from './frame.vue'
    export default {
        data(){
            return {
                active:0,
                msg:'我是发现模块'
            }
        },
        methods:{
            showFrame:function(){
               $("#modelFrame").show();
                console.log("000")
            },
            confirm:function(){
                $("#modelFrame").hide()
                console.log("111")
            },
            cancel:function(){
                $("#modelFrame").hide()
                console.log("222")
            },

        }
    }
   //动态代理
    console.log($(".btn"))
    $("body").on("click",".btn",function(){
        $("#modelFrame").show();
        console.log("000");
    })
</script>