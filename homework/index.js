const {writeToFile, readFromFile, toArray} = require('./util/util');
const constants = require('./util/constants');

const  array = ['Ani', 'Minas', 'Gayane', 'Lysine'];

writeToFile(array, constants.FILE_PATH, constants.ENCODING);
const tmpData = readFromFile(constants.FILE_PATH, constants.ENCODING);
const result = toArray(tmpData);
console.log(result);



