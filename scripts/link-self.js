#!/usr/bin/env node

const fs = require('fs-extra');
const shell = require('shelljs')
const angularCli = require('@angular/cli');
const elementsPath = 'dist/tl-elements';

const next = process.argv[2] ? '--tag next' : '';

angularCli.default({
  cliArgs: ['b', '--project=tl-elements'],
  inputStream: process.stdin,
  outputStream: process.stdout
}).then(c => {
  fs.copySync('projects/tl-elements/src/lib/shared/styles', `${elementsPath}/styles`);
  fs.copySync('scripts', `${elementsPath}/scripts`);
  fs.copySync('.wvr-ud', `${elementsPath}/.wvr-ud`);
  shell
    .cd(elementsPath)
    .exec('npm link');
  shell.exit();
});
