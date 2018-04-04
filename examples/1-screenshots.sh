#!/usr/bin/env bash
echo ""
echo "export UPDATE_SCREENSHOTS=0"
echo "\$(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'"
echo ""
read -t 10

# Only run the tractor beam specs
export UPDATE_SCREENSHOTS=0
$(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'
