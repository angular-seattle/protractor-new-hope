#!/usr/bin/env bash
set -u -e -o pipefail

# Only run the tractor beam specs
$(npm bin)/protractor --specs='e2e/tractor.e2e-spec.ts'
