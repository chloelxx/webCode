/**
 * Created by chloe on 2017/5/26.
 */
var express = require('express');
var app = express();

var mysql = require('mysql');
//配置模块
var settings = require('./setting');
//连接数据库
var connection = mysql.createConnection(settings.db);
connection.connect();
var insertSQL='INSERT INTO student(name,age,sex) VALUES(?,?.?)';
var selectSQL = 'select * from student';

app.get('/register', function(req, res) {
    var param = req.body;
    console.log("req.body  "+req.body);
    connection.query(insertSQL,[param.name,param.age,param.sex], function(err, result) {
        if(err){
            throw err
        }else{
            res.end(JSON.stringify({status:'100',msg:'注册成功!'}));
        }
    });
});

app.listen(8889)