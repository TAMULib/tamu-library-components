#!/usr/bin/env node

const fs = require('fs-extra');

(async function build() {
  fs.ensureDir("docs");
  fs.copy("src/index-docs.html", "docs/index.html");
})();
