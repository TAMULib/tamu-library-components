const fs = require('fs-extra');
const concat = require('concat');
const package = require('../package.json');

const majorVersion = package.version.split('.')[0];
const dirName = `${majorVersion}x`;
const dirPath = `dist/bundle/${dirName}`;

(async function build() {
  const files = [
    'dist/tl-components/runtime-es5.js',
    'dist/tl-components/polyfills-es5.js',
    // 'dist/tl-components/styles-es5.js',
    'dist/tl-components/scripts.js',
    // 'dist/tl-components/vendor-es5.js',
    'dist/tl-components/main-es5.js'
  ];

  fs.ensureDir(dirPath);

  await concat(files, `${dirPath}/tl-components.js`);

})();
