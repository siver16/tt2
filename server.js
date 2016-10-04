var http = require("http");
var dbquery = require('./dif/dbq');
var ejs = require('ejs');
var fs = require('fs');
var index='./views/index.ejs';
var str=fs.readFileSync(index,'utf8');
var mime = require('mime');
var path = require('path');

var server=http.createServer(function(req, res) {
    var filePath;
    console.log(req.url);
    if(req.url=='/bootstrap/css/bootstrap.css'){
        filePath='./public'+req.url;
    fs.readFile(filePath,function(err,data){
        res.writeHead(200,{"content-type":mime.lookup(path.basename(filePath))});
        console.log(data);
        res.end(data);
    });
    }

    console.log(req.method);
    switch(req.method){
        case 'POST':
            //create
            
            break;
        case 'GET':
            //read
           
            dbquery("SELECT * FROM users",function(err, ress, fields) {
                if (err) throw err;
                console.log(ress);
                var html=ejs.render(str,{res:ress});
               res.end(html);
            });
                
            break;
        case 'PUT':
            //update
            
            break;
        case 'DELETE':
            
            //delete
            break;
    }

});
server.listen(3000);
