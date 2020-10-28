#! /usr/bin/env node

const fs = require('fs-extra');
const package = require('../package.json');

const staticPath = 'static';
const tamuComponentsPath = 'static/tamu-library-components';
const docPath = `${tamuComponentsPath}/docs`;
const reportPath = `${tamuComponentsPath}/reports`;
const basePath = 'dist/bundle';

(async function build() {
  fs.ensureDir(`${docPath}/`);
  fs.ensureDir(`${reportPath}`);

  fs.copy("src/index-static.html", `${tamuComponentsPath}/index.html`);
  fs.copy("src/assets", `${tamuComponentsPath}/assets`);
  fs.copy(basePath, `${tamuComponentsPath}/${basePath}`);

  fs.copy("src/index-static.html", `${staticPath}/index.html`);
  fs.copy("src/assets", `${staticPath}/assets`);
  fs.copy(basePath, `${staticPath}/${basePath}`);

  fs.copy("src/index-docs.html", `${docPath}/index.html`);
  fs.copy("src/assets", `${docPath}/assets`);
  fs.copy(basePath, `${docPath}/${basePath}`);

  fs.copy("src/index-reports.html", `${reportPath}/index.html`);
  fs.copy("src/assets", `${reportPath}/assets`);
  fs.copy(basePath, `${reportPath}/${basePath}`);

})();
