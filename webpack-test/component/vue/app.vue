<template>
  <div id="app">
   <h1 v-text="title"></h1>
   <ul>
      <li v-for="i in items">{{items.message}}</li>
   </ul>
  </div>
</template>

<script>
  export default {
     data:function(){
        return:{
           items:[
             { message:1},
             { message:2},
             { message:3},
           ]
        }
     }
  }
<script>