<template>
    <div>
       this is a vue-router simple case
        <router-link class="coR" style="color:#000;font-weight: bold;" to="/hello/frame">
            <button class="btn" @click="showFrame">show</button>
        </router-link>
        <router-view style="color:pink"></router-view>
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
        }
    }
   //动态代理
    console.log($(".btn"))
    $("body").on("click",".btn",function(){
        $("#modelFrame").show();
        console.log("动态代理的点击事件");
    })
</script>