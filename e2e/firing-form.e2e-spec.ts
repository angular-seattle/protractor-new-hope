import {browser, by} from 'protractor';
import {type, go, see, slow,
    click, under, leftOf,
    below, rightOf} from 'blue-harvest';

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