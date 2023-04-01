var path = require('path');
var fs = require('fs');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, 'utf-8', function(err, data){
        if(err){
            return callback(err)
        }else{
            data = data.filter(function(file){
                if(path.extname(file) == ('.' + ext)){
                    return file;
                }
            });
            callback(null, data)
        }
    })
} 