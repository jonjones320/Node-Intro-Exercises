const fs = require('fs');
const process = require('process');

function cat(path) {
    try {
        let contents = fs.readFileSync(path, 'utf8');
        console.log(`file contents are "${contents}"`);
      } catch (error) {
        console.error("Error: ", error);
        process.exit(1);
      }      
};

async function webCat(url) {
    try {
        contents = await axios.get(url)
        console.log("URL contents: ", contents)
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}