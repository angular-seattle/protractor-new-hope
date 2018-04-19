let config = require('./protractor.conf.js').config;	

// Use a longer Jasmine timeout when running with highlight delay.
config.jasmineNodeOpts.defaultTimeoutInterval = 1000 * 60 * 5; // 5 minute timeout
config.highlightDelay = 1000;
	
exports.config = config;
