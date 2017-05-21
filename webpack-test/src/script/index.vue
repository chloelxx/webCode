<template>
   <div id="app">
       <h1>Hello App!</h1>
       <p>
           <!-- 使用 router-link 组件来导航. -->
           <!-- 通过传入 `to` 属性指定链接. -->
           <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
           <router-link class="coR" to="/hello">Go to Foo</router-link>
           <router-link class="coY" to="/word">Go to Bar</router-link>
       </p>
       <!-- 路由出口 -->
       <!-- 路由匹配到的组件将渲染在这里 -->
       <router-view name="a" style="color:orange"></router-view>
   </div>
</template>
<script>
require('jquery')
 export default {
     name:"index",
     data(){
        return {
           items:[
             { message:"chloe"},
             { message:"liu"},
             { message:"xingxing"},
           ],
           title:"这是vue&vue-loader&webpack实例"
        }
     },
     methods:{
       confirm(){
        $("#modelFrame").hide();
          console.log("confirm")
       },
       cancel(){
          $("#modelFrame").hide();
          console.log("cancel");
       }
     }
  }
</script>