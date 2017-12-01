const fs = require('fs');
const jsonSass = require('json-sass');

const jsonConfigPath = 'config/theme-config.json';
const sassConfigDest = 'styles/theme-config.scss';

fs.createReadStream(jsonConfigPath)
  .pipe(jsonSass({
    prefix: '$theme: ',
  }))
  .pipe(fs.createWriteStream(sassConfigDest));
