const fsPromises = require('fs').promises;

const getDataFromFile = (dataWay) =>
{fsPromises.readFile(dataWay, { encoding: 'utf8' })
.then((data) => {return JSON.parse(data)})
.catch((err) => console.log(err));
}

module.exports = getDataFromFile;