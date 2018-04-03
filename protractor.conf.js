// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: (process.env.GITHUB_PAGES || 'http://localhost:4200/protractor-new-hope/'),
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: process.env['JASMINE_TIMEOUT'] || 12000,
    print: function() {}
  },
  SELENIUM_PROMISE_MANAGER: false, // Disable the Control Flow
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
