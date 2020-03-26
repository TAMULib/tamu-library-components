const fs = require('fs-extra');
const concat = require('concat');
const package = require('../package.json');

const majorVersion = package.version.split('.')[0];
const dirName = `${majorVersion}x`;
const basePath = 'dist/bundle';
const dirPath = `${basePath}/${dirName}`;
const latestPath = `${basePath}/latest`;

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
  // TODO: this should only happen when building docs
  // the docs script is not aware of the dir path with version
  fs.copy(`${dirPath}/tl-components.js`, `${latestPath}/tl-components.js`);
  fs.copy(`${dirPath}/tl-components.js`, `docs/${dirPath}/tl-components.js`);

})();
