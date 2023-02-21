let http = require('http')

let fs = require('fs')


http.createServer((req,res)=>{
    if(req.url==="/"){
        
        fs.readFile('index.html', function (err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end();
        })
    }
    if(req.url==="/about"){
        fs.readFile('about.html', function (err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end();
        })
    }
    if(req.url==="/contact-me"){
        fs.readFile('contact-me.html', function (err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end();
        })
    }
    fs.readFile('404.html', function (err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end();
    })
}).listen(8080);