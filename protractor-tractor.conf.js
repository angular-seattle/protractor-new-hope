
let config = require('./protractor.conf.js').config;

let protractorConf = config;
protractorConf.specs = ['./e2e/tractor.e2e-spec.ts'];
protractorConf.directConnect = true;

exports.config = protractorConf;
