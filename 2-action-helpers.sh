#!/usr/bin/env bash
set +x

BOLD=`tput bold`
GREEN=`tput setaf 2`
WHITE=`tput setaf 7`
RESET=`tput sgr0`

echo -e "${GREEN}Running firing form tests with highlightDelay${RESET}\n"
echo -e "npm run e2e -- protractor-highlight.conf.js --specs='e2e/firing-form.e2e-spec.ts'\n"
read
npm run e2e -- protractor-highlight.conf.js --specs='e2e/firing-form.e2e-spec.ts'

