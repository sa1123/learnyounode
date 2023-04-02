const http = require('http')
const bl = require('bl')

const result = []
let count = 0

function printResults(results){
    for(let i = 0; i < 3; i++){
        console.log(results[i])
    }
}

function getData(index){
    http.get(process.argv[2 + index], function(response){
        response.setEncoding('utf-8')
        response.on('error', console.error)

        response.pipe(bl(function(err, data){
            result[index] = data.toString()
            count++
            
            if(count === 3){
                printResults(result)
            }
        }))
    }
    ).on('error', console.error)
}

for(let i = 0; i<3; i++){
    getData(i)
}