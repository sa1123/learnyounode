const http = require('http')

function parsetime(time){
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time){
    return{
        unixtime: time.getTime()
    }
}

const server = http.createServer(function (req, res){

    const parsedURL = new URL(req.url, 'http://example.com')
    const time = new Date(parsedURL.searchParams.get('iso'))
    let result

    if(/^\/api\/parsetime/.test(req.url)){
        result = parsetime(time)
    } else if(/^\/api\/unixtime/.test(req.url)){
        result = unixtime(time)
    } else {
        result = unixtime(time)
    }

    if(result){
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify(result))
    }

})

server.listen(process.argv[2])