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

cat(process.argv[2]);