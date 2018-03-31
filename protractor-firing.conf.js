let config = require('./protractor.conf.js').config;

let protractorConf = config;
protractorConf.specs = ['./e2e/firing-form.e2e-spec.ts'];
protractorConf.highlightDelay = 3000;

exports.config = protractorConf;
