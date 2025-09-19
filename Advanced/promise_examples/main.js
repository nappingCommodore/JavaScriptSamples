const fs = require('fs');

function readTheFile(){
    return new Promise(function(resolve, reject) {
        fs.readFile('./file1.txt', {encoding:'utf8', flag:'r'}, function(err, data) {
            if(err) {
                console.log("here error " + err);
                reject(err);
            } else {
                // console.log(data);
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

async function read() {
    try {
    var response = await readTheFile()
    console.log("Response::", response);
    } catch (error) {
        console.log("Error::", error);
    }
    console.log("Read execution completed");
}

// function main() {
//     readTheFile().then((res) => {
//         console.log("Response::", res);
//     }).catch((err) => {
//         console.log("Error::", err);
//     });
//     console.log("Main is executing");
// }

function main() {
    read();
    console.log("Main is executing");
}

main();
