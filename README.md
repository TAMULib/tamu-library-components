[![Build Status](https://github.com/TAMULib/tamu-library-components/workflows/Build/badge.svg)](https://github.com/TAMULib/tamu-library-components/actions?query=workflow%3ABuild)
[![Coverage Status](https://coveralls.io/repos/github/TAMULib/tamu-library-components/badge.svg?branch=master)](https://coveralls.io/github/TAMULib/tamu-library-components?branch=master)
[![Compodoc Coverage](https://tamulib.github.io/tamu-library-components/docs/development/images/coverage-badge-documentation.svg)](https://tamulib.github.io/tamu-library-components/docs/development/coverage.html)
[![Performance](https://tamulib.github.io/tamu-library-components/reports/audit/assets/performance.svg)](https://tamulib.github.io/tamu-library-components/reports/audit/#performance)
[![Accessibility](https://tamulib.github.io/tamu-library-components/reports/audit/assets/accessibility.svg)](https://tamulib.github.io/tamu-library-components/reports/audit/#accessibility)
[![Best Practices](https://tamulib.github.io/tamu-library-components/reports/audit/assets/best-practices.svg)](https://tamulib.github.io/tamu-library-components/reports/audit/#best-practices)
[![SEO](https://tamulib.github.io/tamu-library-components/reports/audit/assets/seo.svg)](https://tamulib.github.io/tamu-library-components/reports/audit/#seo)
[![Progressive Web App](https://tamulib.github.io/tamu-library-components/reports/audit/assets/pwa.svg)](https://tamulib.github.io/tamu-library-components/reports/audit/#pwa)

# TAMU Library Components

Copyright © 2020-2025 Texas A&M University Libraries under the [MIT](LICENSE).

TAMU Library Components is an extension both on top of and perpendicular to [Weaver Components](https://github.com/TAMULib/weaver-components).
This either extends components, providing custom styles, or provides entirely new components.

## Installation

TAMU Library Components may be installed by either referencing a CDN or by using [NpmJs](https://www.npmjs.com/).

### Installation via NpmJs

The latest pre-built package may be found in the [TAMU Library Elements NpmJs Repository](https://www.npmjs.com/package/@wvr/tl-elements).

Using the `npm` command (from [NpmJs](https://www.npmjs.com/)), install this project as a dependency to an existing project:
```
npm install @wvr/tl-elements
```

### Installation via CDN

The files `tl-components.js` and `styles.css` need to be available on some server.
See the **Building** section below for details on how to build these files.

The CSS file should be added as an HTML `<link>` element to the HTML `<header>` element, such as:
```
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://localhost/styles.css">
  </head>
</html>
```

The Javascript file should be added an HTML `<script>` element to the HTML `<bottom>` element at the very end, such as:
```
<html>
  <body>
    ...
    <script src="https://localhost/tl-components.js"></script>
  </body>
</html>
```

## Building

To build this project use the `npm` command (from [NpmJs](https://www.npmjs.com/)).

This project can be built to run locally for development purposes be built to get the `tl-components.js` and `styles.css` files needed to run on a CDN.
More detailed documentation about the build process may be found via the referenced links in the **Documentation** section below.

### Building the `tl-components.js` and the `styles.css`

The `tl-components.js` and the `styles.css` files are needed if intending to utilize this project via a CDN.

These files are built using the `build` command from within the project root directory:
```
  cd tamu-library-components
  npm run build
```

Once this has successfully completed the `tl-components.js` and `styles.css` files should be located under the `dist/bundle/` sub-directory:
```
  dist/bundle/styles.css
  dist/bundle/tl-components.js
```

### Building for a NpmJs Package

Building this for a NpmJs Package is the same as building this for a CDN.

These files are built using the `build` command from within the project root directory:
```
  cd tamu-library-components
  npm run build
```

### Building against a Local Weaver Components

When wanting to run against a locally built Weaver Components, the [Verdaccio](https://verdaccio.org/) service in Weaver Components should be used.
Follow the Weaver Components documentation to set this up.

Once Weaver Components is properly set up, the `npm-local` command can be used to fetch only the local Weaver Components from the [Verdaccio](https://verdaccio.org/) service.
The `npm install` command will overwrite the local version which will result in loss of changes made by `npm-local`.
Once Weaver Components is properly setup, the `build` and even `start` commands may be performed.
```
  npm install
  npm run npm-local
  npm run build
  npm run start
```

## Documentation

Detailed [documentation](https://tamulib.github.io/tamu-library-components/docs) may be found:
- [Usage Documentation](https://tamulib.github.io/tamu-library-components/docs/usage)
- [Development Documentation](https://tamulib.github.io/tamu-library-components/docs/development/index.html)
- [Wiki](https://github.com/TAMULib/tamu-library-components/wiki)

Detailed [reports](https://tamulib.github.io/tamu-library-components/reports) may be found:
- [Audit](https://tamulib.github.io/tamu-library-components/reports/audit/index.html)
- [Coverage](https://tamulib.github.io/tamu-library-components/reports/coverage/tl-elements/index.html)
