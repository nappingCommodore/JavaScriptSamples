const fs = require('fs');

function readTheFile(){
    return new Promise(function(resolve, reject) {
        fs.readFile('./file.txt', {encoding:'utf8', flag:'r'}, function(err, data) {
            if(err) {
                //console.log(err);
                reject(err);
            } else {
                //console.log(data);
                resolve(data);
            }
        });
    });
}


// readTheFile().then(function(res){
//     console.log("Response::", res);
// }, function(err){
//     console.log("Error::", err);
// });

readTheFile().then((res) => {
    console.log("Response::", res);
}).catch((err) => {
    console.log("Error::", err);
});


