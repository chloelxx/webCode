var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'content': 'love imooc',
    'mid': 8837,
})
/*var server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
})*/
var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path:'/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Content-Length': postData.length,
        'Cookie': 'imooc_uuid=083e26cc-3ee7-4465-a61b-8a61665a11e9; imooc_isnew_ct=1487851519; PHPSESSID=p5d8ker85qs5r8n8c218mf6ca3; loginstate=1; apsid=RhOGIzOThlYzI3ZGNlZDRiYWY2NDJhYWQ5NDdkZWYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjM5NjUyMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNDgzMzA4MTMzQHFxLmNvbQAAAAAAAAAAAAAAAAAAADFmYzY2YzU3YzVlNjI1NjY1MjkxYTdlNjZhZGE1ZDQ3ZacdWWWnHVk%3DYm; last_login_username=1483308133%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1495114763; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1495119782; imooc_isnew=2; cvde=591da409be568-32',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
    }

};
var req = http.request(options, function (res) {
	console.log('status'+res.statusCode)
	console.log('headers'+JSON.stringify(res.headers))
    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk)
    })
    res.on('end', function () {
        console.log('comment finish')
    })
    req.on('error', function () {
        console.log('fail');
    })
})
req.write(postData);
req.end();