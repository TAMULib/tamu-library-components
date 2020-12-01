#!/usr/bin/env node

const fs = require('fs-extra');
const concat = require('concat');
const cp = require('child_process');

const componentsPath = 'dist/tl-components';

const assetPath = 'dist/tl-components';
const bundlePath = 'dist/bundle';

cp.fork(__dirname + '/build-tl-config-template.js');

(async function build() {

  // options: es5 and es2015
  const esv = 'es2015';

  const files = [
    `${componentsPath}/polyfills-${esv}.js`,
    `${componentsPath}/styles-${esv}.js`,
    `${componentsPath}/main-${esv}.js`
  ];

  fs.ensureDir(bundlePath);

  await concat(files, `${bundlePath}/tl-components.js`);
  fs.copy('dist/tl-components/assets', "dist/static/docs/usage/assets");
  fs.copy(`${assetPath}/assets`, `${bundlePath}/assets`);

})();
