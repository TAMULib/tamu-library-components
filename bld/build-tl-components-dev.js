const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    'dist/tl-components/runtime.js',
    'dist/tl-components/polyfills.js',
    'dist/tl-components/scripts.js',
    'dist/tl-components/main.js'
  ];

  await concat(files, 'dist/tl-components.js');

  // await fs.remove("dist/tl-components");

})();