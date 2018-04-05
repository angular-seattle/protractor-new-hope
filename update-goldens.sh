#!/usr/bin/env bash

echo ""
echo "npm run e2e -- protractor-update-goldens.conf.js"
echo ""

read

# Run the tests, updating the goldens.
npm run e2e -- protractor-update-goldens.conf.js
