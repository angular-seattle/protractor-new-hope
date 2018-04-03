#!/usr/bin/env bash
set +x -u -e -o pipefail

# Only run the tractor beam specs
export UPDATE_SCREENSHOTS='0'
$(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'
