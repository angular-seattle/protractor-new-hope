#!/bin/bash
npm install
npm run ng build

git checkout gh-pages

rm -rf e2e/ examples/ src/
rm .angular-cli.json .editorconfig karma.conf.js
rm package-lock.json package.json protractor.conf.js
rm README.md tsconfig.json tslint.json

cp -r dist/* .

rm -rf dist/ node_modules/

git add -A
git commit -m "release gh-pages"
git push origin gh-pages
