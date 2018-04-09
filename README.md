# Protractor: A New Hope

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Milestones

## The Tractor Beam Lever

Compares images at `/tractor` using blue-harvest node module.

- Prerequisite, download browser driver with `npm run webdriver-update` 
- Prior to running the test, generate golden images with `./update-goldens.sh`. The shell command runs protractor spec file `e2e/tractor.e2e-spec.ts` with environment variable `UPDATE_GOLDENS` set to `true`.
- Compare screenshots with `./1-screenshots.sh`. The shell command compares the golden screenshot against the actual screenshot. If there are diffs, the file we be written to `diff.png` and the test will fail.

## Prisoner Manifest

- RouteGuard authentication
- OnPush component?
- Debug this test using Chrome devtools?

## Planet destruction order form

- Reactive form
- weird timing requirements
- Highlight delay for debugging
