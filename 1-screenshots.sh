#!/usr/bin/env bash
echo ""
echo "npm run e2e -- --specs='e2e/tractor.e2e-spec.ts'"
echo ""
read

# Only run the tractor beam specs
npm run e2e -- --specs='e2e/tractor.e2e-spec.ts'
