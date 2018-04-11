#!/usr/bin/env bash
set +x

BOLD=`tput bold`
GREEN=`tput setaf 2`
WHITE=`tput setaf 7`
RESET=`tput sgr0`

echo -e "${GREEN}Running tests with debugging${RESET}\n"
echo -e "npm run e2e starts protractor with 'node --inspect'\n"
echo -e "\n${BOLD}Navigate to ${GREEN}chrome://inspect${WHITE} to open the inspector.${RESET}\n"
echo -e "\nnpm run e2e-debug -- --hightlightDelay=750"
read
npm run e2e-debug --  --specs='e2e/prisoners.e2e-spec.ts'
