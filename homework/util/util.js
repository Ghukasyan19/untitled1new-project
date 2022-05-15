const fs = require('fs');

// const  array = ['Ani', 'Minas', 'Gayane', 'Lysine'];
//fs.appendFileSync('./homework/file.txt', 'simple text', 'utf-8');

function  writeToFile(data, filePath, encoding = 'utf-8'){
    for (let i = 0; i < data.length; i++) {
    fs.appendFileSync(filePath, data[i] + ' ', encoding);
    }
}
// writeToFile(array, './homework/file.txt');


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

// console.log(readFromFile('./homework/file.txt'));
// console.log(toArray(readFromFile('./homework/file.txt')));

module.exports = {
    writeToFile,
    readFromFile,
    toArray
}
