'use strict';

const fs = require(`fs`);
const chalk = require(`chalk`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const writeFileJson = async (filename, offers) => {
  const content = JSON.stringify(offers);
  await fs.writeFile(filename, content, (err) => {
    if (err) {
      return console.error(chalk.red(`Can't write data to file...`, err));
    }
    return console.info(chalk.green(`Operation success. File created.`));
  });
};

const readContent = async (filePath) => {
  await fs.readFile(filePath, `utf8`, (err, data) => {
    if (err) {
      console.error(chalk.red(err));
      return [];
    }
    return data.split(`\n`);
  });
};

module.exports = {
  getRandomInt,
  shuffle,
  writeFileJson,
  readContent
};

// node ./src/service/service.js --version
