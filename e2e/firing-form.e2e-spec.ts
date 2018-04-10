import {browser, by, element, ExpectedConditions as EC} from 'protractor';
import {type, go, see, slow, click, under, leftOf, below, rightOf} from 'blue-harvest';

async function waitForEnabled(label) {
  await browser.wait(EC.elementToBeClickable(element(by.buttonText(label))));
}

describe('Firing form', () => {
  beforeEach(async() => {
    await go('/firing');
  });

  it('should add a name with gold using action helpers', async() => {
    // Test goes here...
  });

  afterAll(async () => {
    await browser.sleep(5000);
  })
});