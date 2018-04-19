# Protractor: A New Hope

This is the demo app for our ng-conf 2018 talk - Protractor: A New Hope.

It's the admin interface for the Death Star. You can run the different milestones from our 
talk with the following scripts:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Milestones

Easter Egg: If you click the Rebel icon in the home page, you'll get a control panel for a Sphero R2D2. 
The code for this is in `src/app/home/droid.ts` - you'll need to edit that and put the name of your
droid there in order to control it.

## The Tractor Beam Lever (Screenshot Testing)
Run `1-screenshots.sh`

Compares images at `/tractor` using blue-harvest node module.

- Prerequisite, download browser driver with `npm run webdriver-update` 
- Prior to running the test, generate golden images with `./update-goldens.sh`. The shell command runs protractor spec file `e2e/tractor.e2e-spec.ts` with environment variable `UPDATE_GOLDENS` set to `true`.
- Compare screenshots with `./1-screenshots.sh`. The shell command compares the golden screenshot against the actual screenshot. If there are diffs, the file we be written to `diff.png` and the test will fail.

## Firing Form (Action Helpers)
Run `2-action-helpers.sh`

The finished example test is `e2e/firing-form.e2e-spec.complete.ts`. It uses Action Helpers to test
the firing form.

## Prisoner Manifest (Debugging)
Run `3-debugging.sh` to debug the test with Chrome Devtools. You'll need to open chrome to `chrome://inspect`

You can also debug with VSCode, as we did in the demo. The launch configuration is in `./vscode/launch.json`

The Prisoner manifest is behind an auth guard which requires a "I'm not a droid" captcha. 
