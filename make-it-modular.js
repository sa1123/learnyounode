const myFunc = require('./mymodule')

myFunc(process.argv[2], process.argv[3], function(err, data){
    if(!err){
        data.forEach(function(file){
            console.log(file)
        });
    }
})