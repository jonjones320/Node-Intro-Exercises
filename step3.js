const fs = require('fs');
const process = require('process');
const axios = require('axios');

function output(input, out) {
    if (out) {
        try {
            fs.writeFileSync(out, input);
            console.log('Successfully wrote to file!');
          } catch (error) {
            console.error(`File write failed: ${error}`)
            process.exit(1);
          }
    }
}

function cat(path, out) {
    try {
        let contents = fs.readFile(path, 'utf8', function(error, data){
            if (error) {
                console.error("Error: ", error);
                process.exit(1);
            }
            else {output(contents, out)}
        }) 
      } catch(err) {
        console.error(`File write failed: ${error}`)
        process.exit(1);
      }      
};

async function webCat(url, out) {
    try {
        contents = await axios.get(url)
        output(contents.data, out)
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
};

let path = process.argv[2];
let out = process.argv[3];

if (path.slice(0,4) === 'http') {
    let content = webCat(path);
    return content;
} else {
    let content = cat(path);
    return content;
};

