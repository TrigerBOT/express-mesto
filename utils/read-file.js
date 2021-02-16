const fsPromises = require('fs').promises;

const getDataFromFile = (dataWay) =>
{return fsPromises.readFile(dataWay, { encoding: 'utf8' })
.then((data) => JSON.parse(data));
}

module.exports = getDataFromFile;