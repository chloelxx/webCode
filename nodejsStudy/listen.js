/**
 * Created by chloe on 2017/5/18.
 */
var http = require("http")
var url=require("url");
var querystring=require("querystring");
http.createServer(function (request, response) {
	//response.setHeader('Content-Type','text/javascript;charset=UTF-8');
    response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write("这个是node.js的简单例子","utf8");
    console.log("这是一个node的实例")
    response.end('response输出Hello World\n');
}).listen(8008);
console.log('Server running at http://127.0.0.1:8008/');


var postData = querystring.stringify({
  'msg' : 'Hello World!'
});

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();