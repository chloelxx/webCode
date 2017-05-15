
<template>
  <div id="app">
   <h1 v-text="title"></h1>
   <ul>
      <li v-for="i in items">{{i.message}}</li>
   </ul>
  </div>
</template>
<style>
  ul{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
    width:200px;
    height:50px;
  }
  li:nth-child(odd){
     background-color:yellow;
  }
  li:nth-child(even){
      background-color:blue;
  }
</style>
<script>
  export default {
     data(){
        return {
           items:[
             { message:"chloe"},
             { message:"liu"},
             { message:"xingxing"},
           ],
           title:"这是vue&vue-loader&webpack实例"
        }
     }
  }
  </script>