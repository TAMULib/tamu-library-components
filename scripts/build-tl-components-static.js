const fs = require('fs-extra');
const package = require('../package.json');

const staticPath = 'static';
const tamuComponentsPath = 'static/tamu-library-components';
const docPath = `${tamuComponentsPath}/docs`;
const reportPath = `${tamuComponentsPath}/reports`;
const basePath = 'dist/bundle';
const majorVersion = package.version.split('.')[0];
const dirName = `${majorVersion}x`;
const dirPath = `${basePath}/${dirName}`;

(async function build() {
  fs.ensureDir(`${docPath}/`);
  fs.ensureDir(`${reportPath}`);

  fs.copy("src/index-static.html", `${tamuComponentsPath}/index.html`);
  fs.copy("src/assets", `${tamuComponentsPath}/assets`);
  fs.copy(`${dirPath}/tl-components.js`, `${tamuComponentsPath}/${dirPath}/tl-components.js`);

  fs.copy("src/index-static.html", `${staticPath}/index.html`);
  fs.copy("src/assets", `${staticPath}/assets`);
  fs.copy(`${dirPath}/tl-components.js`, `${staticPath}/${dirPath}/tl-components.js`);

  fs.copy("src/index-docs.html", `${docPath}/index.html`);
  fs.copy("src/assets", `${docPath}/assets`);
  fs.copy(`${dirPath}/tl-components.js`, `${docPath}/${dirPath}/tl-components.js`);

  fs.copy("src/index-reports.html", `${reportPath}/index.html`);
  fs.copy("src/assets", `${reportPath}/assets`);
  fs.copy(`${dirPath}/tl-components.js`, `${reportPath}/${dirPath}/tl-components.js`);
})();
