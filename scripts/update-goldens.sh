#!/usr/bin/env bash

set -u -e -o pipefail

# For demonstration purposes, we break the screenshots in the demo.
# Before updating the goldens, copy the correct frame in place. 
cp src/assets/frame4-correct.png src/assets/frame4.png

# Run the tests, updating the goldens.
npm run webdriver-update
UPDATE_SCREENSHOTS=1 $(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'

# So the tests fail during the demo, replace frame 4 with frame 1.
cp src/assets/frame1.png src/assets/frame4.png
