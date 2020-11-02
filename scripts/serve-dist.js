#!/usr/bin/env node

const fs = require('fs');
const process = require('process');
const StaticServer = require('static-server');

const basePath = `dist`;
const bundlePath = `${basePath}/bundle`;

const server = new StaticServer({
  rootPath: 'dist/bundle',
  port: 8080,
  name: 'tl-component-dist-server',
  followSymlink: true,
});

server.start(function () {
  console.log('Server listening to', server.port);
  fs.copyFileSync(`src/index.html`, `${bundlePath}/index.html`);
});

process.on('exit', function () {
  fs.unlink(`${bundlePath}/index.html`, err => {
    if (err) throw err;
  });
  fs.unlink(`${bundlePath}/config.json`, err => {
    if (err) throw err;
  });
  console.log('Cleaning up');
});

process.on('SIGINT', function () {
  process.exit();
});

process.on('uncaughtException', function (e) {
  console.log(e.stack);
  process.exit(99);
});
