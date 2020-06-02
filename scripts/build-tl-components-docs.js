const fs = require('fs-extra');

(async function build() {
  fs.ensureDir("docs");
  fs.copy("index-docs.html", "docs/index.html");
})();
