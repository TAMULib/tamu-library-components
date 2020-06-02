const fs = require('fs-extra');
const staticPath = 'static/tamu-library-components';
const docPath = `${staticPath}/docs`;
const reportPath = `${staticPath}/reports`;

(async function build() {
  fs.ensureDir(`${docPath}/`);
  fs.ensureDir(`${reportPath}`);

  fs.copy("index-static.html", `${staticPath}/index.html`);
  fs.copy("index-docs.html", `${docPath}/index.html`);
  fs.copy("index-reports.html", `${reportPath}/index.html`);
  fs.copy("src/assets", `${docPath}/assets`);

})();