#! /usr/bin/env node

const fs = require('fs-extra');
const concat = require('concat');
const cp = require('child_process');

const assetPath = 'dist/tl-components';
const bundlePath = 'dist/bundle';

cp.fork(__dirname + '/build-tl-config-template.js');

(async function build() {
  const files = [
    'dist/tl-components/runtime-es5.js',
    'dist/tl-components/polyfills-es5.js',
    'dist/tl-components/styles-es5.js',
    'dist/tl-components/scripts.js',
    // 'dist/tl-components/vendor-es5.js',
    'dist/tl-components/main-es5.js'
  ];

  fs.ensureDir(bundlePath);

  await concat(files, `${bundlePath}/tl-components.js`);
  fs.copy('dist/tl-components/assets', "dist/static/docs/usage/assets");
  fs.copy(`${assetPath}/assets`, `${bundlePath}/assets`);

})();
