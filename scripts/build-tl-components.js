// const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    'dist/tl-components/runtime-es5.js',
    'dist/tl-components/polyfills-es5.js',
    // 'dist/tl-components/styles-es5.js',
    'dist/tl-components/scripts.js',
    // 'dist/tl-components/vendor-es5.js',
    'dist/tl-components/main-es5.js'
  ];

  await concat(files, 'dist/tl-components.js');

  // await fs.remove("dist/tl-components");

})();