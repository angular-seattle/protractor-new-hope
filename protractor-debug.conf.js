let config = require('./protractor.conf.js').config;	

// When debugging, use a super long Jasmine timeout so we don't time out while paused.
config.jasmineNodeOpts.defaultTimeoutInterval = 1000 * 60 * 60; // 1 hour timeout
config.specs = ['./e2e/prisoners.e2e-spec.ts'],
	
exports.config = config;
