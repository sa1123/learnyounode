const fs = require('fs')

let temp = fs.readFileSync(process.argv[2]).toString().split('\n')

console.log(temp.length-1)