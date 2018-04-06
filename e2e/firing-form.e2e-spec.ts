import {browser, by, element, ExpectedConditions as EC} from 'protractor';
import {type, go, see, slow, click, under, leftOf, below, rightOf} from 'blue-harvest';

describe('Firing form', () => {
  beforeEach(async() => {
    await go('/firing');
  });

  fit('should add a name with gold using action helpers', async() => {
    // Test goes here...

    // You can mix traditional WebDriver with action helpers
    await browser.waitForAngularEnabled(false);
    await browser.wait(EC.elementToBeClickable(element(by.buttonText('Fire'))));
    await click('Fire');
    await slow.see('Destroyed');
    await browser.waitForAngularEnabled(true);
  });

  afterAll(async () => {
    await browser.sleep(5000);
  })
});