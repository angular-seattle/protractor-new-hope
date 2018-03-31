let config = require('./protractor.conf.js').config;

let protractorConf = config;
protractorConf.specs = ['./e2e/prisoners.e2e-spec.ts'];
protractorConf.directConnect = true;
protractorConf.jasmineNodeOpts.defaultTimeoutInterval = 1000 * 60 * 15; // 15 minutes timeout

exports.config = protractorConf;
