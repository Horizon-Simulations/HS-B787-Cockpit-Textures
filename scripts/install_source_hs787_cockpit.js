require('dotenv').config();
const fs = require('fs-extra');

const source = process.env.BUILD_DIR_NAME ? 'external/hs787-cockppit-texture/' + process.env.BUILD_DIR_NAME : 'external/hs787-cockppit-texture';
console.log('installManifest source is: ' + source);

const installManifest = fs.readJSONSync('./build/horizonsim-787-Cockpit-Textures/install.json');
installManifest.source = source;
fs.writeJSONSync('./build/horizonsim-787-Cockpit-Textures/install.json', installManifest);