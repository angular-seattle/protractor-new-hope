#!/usr/bin/env bash

echo ""
echo "export UPDATE_SCREENSHOTS=1"
echo "\$(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'"
echo ""

# Run the tests, updating the goldens.
export UPDATE_SCREENSHOTS=1
$(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'
