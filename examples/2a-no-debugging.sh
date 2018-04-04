#!/usr/bin/env bash
set +x -u -e -o pipefail

$(npm bin)/protractor --specs='e2e/prisoners.e2e-spec.ts'
