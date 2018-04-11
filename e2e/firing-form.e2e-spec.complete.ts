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
    await click('System:');
    await type('Alderaan');
    await click('Orbit:');
    await type('3');

    await click('Add an officer');
    await click('Name');
    await type('Tarkin');
    await click('Command Code');
    await type('Gold 1');
    await rightOf('Gold 1').see('check circle');

    await click('Fire');
    await slow.see('Destroyed');
  });

  afterAll(async () => {
    await browser.sleep(5000);
  })
});