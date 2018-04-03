#!/usr/bin/env bash
set -u -e -o pipefail

$(npm bin)/protractor --specs='e2e/prisoners.e2e-spec.ts' --highlightDelay=1000
