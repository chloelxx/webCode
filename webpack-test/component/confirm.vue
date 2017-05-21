<template>
    <div>
        <button class="btn" @click="showFrame">show</button>
             <!-- 路由出口 -->
           <!-- 路由匹配到的组件将渲染在这里 -->
           <router-view name="a" style="color:orange"></router-view>
    </div>
</template>
