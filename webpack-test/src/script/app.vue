<template>
<div class="modelConfirm" style="display: none;background-color:rgba(256,256,256,0);position: fixed;width:100%;height:100%;top:0;left:0;z-index:99999" id="modelFrame">
    <div style="width:400px;position: absolute;top:38%;left:50%;margin-left: -200px;border:1px solid #c6c6c6;background-color: white" id="modelBody" class="text18">
        <div id="tipsHeader" style="background-color: #7c00ff;color:white;padding:10px">
            提示
            <p class="right" style="cursor: pointer;float:right" onclick="$('#modelFrame').hide()">X</p>
        </div>
        <div id="content" style="min-height: 100px;display: table;width:100%">
            <div style="display: table-cell;vertical-align:middle;text-align: center;" id="defineWord">
                sdfasdfasdf
            </div>
        </div>
        <div id="modelFooter" style="border-top:1px solid #c6c6c6;padding:10px 0;text-align: right;">
            <button style="margin-right: 20px;background-color: #7c00ff;color: #fff;" id="confirm" @click="confirm">确定</button>
            <button style="margin-right: 20px;background-color: #7c00ff;color: #fff;" id="cancel" @click="cancel">取消</button>
        </div>
    </div>
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
     color:yellow;
  }
  li:nth-child(even){
     color:blue;
  }
</style>
