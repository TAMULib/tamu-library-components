#!/usr/bin/env node

const fs = require('fs-extra');
const concat = require('concat');
const cp = require('child_process');

const componentsPath = 'dist/tamu-library-components';
const elementsPath = 'dist/tl-elements';

const bundlePath = 'dist/bundle';
const usagePath = 'dist/static/docs/usage';

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

  fs.ensureDir(usagePath);

  await concat(files, `${bundlePath}/tl-components.js`);

  fs.copy(`${componentsPath}/assets`, `${usagePath}/assets`);
  fs.copy(`${componentsPath}/assets`, `${bundlePath}/assets`);

  fs.copy('projects/tl-elements/src/lib/shared/styles', `${elementsPath}/styles`);
  fs.copy('scripts', `${elementsPath}/scripts`);
  fs.copy('.tl-ud', `${elementsPath}/.tl-ud`);

})();
