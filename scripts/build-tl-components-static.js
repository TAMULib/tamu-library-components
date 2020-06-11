const fs = require('fs-extra');
const package = require('../package.json');

const staticPath = 'static/tamu-library-components';
const docPath = `${staticPath}/docs`;
const reportPath = `${staticPath}/reports`;
const basePath = 'dist/bundle';
const majorVersion = package.version.split('.')[0];
const dirName = `${majorVersion}x`;
const dirPath = `${basePath}/${dirName}`;

(async function build() {
  fs.ensureDir(`${docPath}/`);
  fs.ensureDir(`${reportPath}`);

  fs.copy("index-static.html", `${staticPath}/index.html`);
  fs.copy("index-docs.html", `${docPath}/index.html`);
  fs.copy("index-reports.html", `${reportPath}/index.html`);
  fs.copy("src/assets", `${docPath}/assets`);
  fs.copy(`${dirPath}/tl-components.js`, `${staticPath}/docs/${dirPath}/tl-components.js`);
  fs.copy(`${dirPath}/tl-components.js`, `${staticPath}/reports/${dirPath}/tl-components.js`);

})();
