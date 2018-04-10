import {browser, by, element, ExpectedConditions as EC} from 'protractor';
import {type, go, see, slow, click, under, leftOf, below, rightOf} from 'blue-harvest';

async function waitForEnabled(label) {
  browser.waitForAngularEnabled(false);
  await browser.wait(EC.elementToBeClickable(element(by.buttonText(label))));
  browser.waitForAngularEnabled(true);
}

describe('Firing form', () => {
  beforeEach(async() => {
    await go('/firing');
  });

  fit('should add a name with gold using action helpers', async() => {
    // Test goes here...

    await waitForEnabled('Ready');
    await click('Fire');
    await slow.see('Destroyed');
  });

  afterAll(async () => {
    await browser.sleep(5000);
  })
});