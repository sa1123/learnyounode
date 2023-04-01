var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], 'utf-8', function(err, data){
    if(!err){
        data.forEach(function(file){
            if(path.extname(file) === ('.' + process.argv[3])){
                console.log(file)
            } 
        });
    }
})