const fs = require('fs');

function  writeToFile(data, filePath, encoding = 'utf-8'){
    for (let i = 0; i < data.length; i++) {
    fs.appendFileSync(filePath, data[i] + ' ', encoding);
    }
}

function readFromFile(filePath, encoding = 'utf-8'){
try {
    if (fs.existsSync(filePath)){
        return fs.readFileSync(filePath, encoding);
    }
} catch (err){
    console.error(err.message);
}
}

function toArray(str) {
    if (typeof str === 'string') {
        return str.split(' ').filter(Boolean).sort();
    }
}

module.exports = {
    writeToFile,
    readFromFile,
    toArray
}
