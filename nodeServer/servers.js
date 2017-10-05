var http = require("http");//引入http模块
var fs = require("fs");

var documentRoot = "C:/Users/longJ/Desktop";//此处配置localhost:8080所对应的地址

//开启服务 打开端口
var server = http.createServer(function(req,res){

	console.log("已经链接");

	var url = req.url;

	var file = documentRoot + url;

	fs.readFile(file,function(err,data){
		if(err){
			res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
		}else{
			res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
		}
	})
}).listen(8080);

console.log("服务器已经开启");
