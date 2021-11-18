#!/usr/bin/env node

const fs = require('fs-extra');
const shell = require('shelljs')
const angularCli = require('@angular/cli');
const elementsPath = 'dist/tl-elements';

shell.exec('npm --registry http://localhost:4873 install --no-save @wvr/elements');

angularCli.default({
  cliArgs: ['b'],
  inputStream: process.stdin,
  outputStream: process.stdout
}).then(c => {
  shell.exit();
});
