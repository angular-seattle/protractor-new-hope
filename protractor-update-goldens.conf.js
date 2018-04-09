let config = require('./protractor.conf.js').config;	
    
// If UPDATE_GOLDENS is "1" or "true", blue-harvest will update the reference
// screenshots instead of comparing against them.
process.env['UPDATE_GOLDENS'] = "true";

// Only run the specs that do screenshot comparison.
config.specs = ['./e2e/tractor.e2e-spec.ts'];
config.directConnect = true;

exports.config = config;
