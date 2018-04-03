#!/usr/bin/env bash
set +x -u -e -o pipefail

BOLD=`tput bold`
GREEN=`tput setaf 2`
WHITE=`tput setaf 7`

echo "${BOLD}Navigate to ${GREEN}chrome://inspect${WHITE} to open the inspector."
tput sgr0

# Set a ridiculously large timeout, so Jasmine doesn't throw an error while
# we're paused in the debuggier
JASMINE_TIMEOUT=999999 node --inspect-brk $(npm bin)/protractor --specs='e2e/prisoners.e2e-spec.ts'
