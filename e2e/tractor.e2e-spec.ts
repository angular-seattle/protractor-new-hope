import * as path from 'path';
import {browser, by, element, ExpectedConditions as EC} from 'protractor';

import {compareScreenshot} from './screenshot_helper';

const GOLDEN_IMAGES = [1,2,3,4].map((i) => {
  return path.join(__dirname, `goldens/tractor_control${i}.png`)
});

describe('Tractor beam control page', () => {

  beforeEach(async() => {
    await browser.get('/tractor');
  });

  it('display the right images', async() => {
    console.log(GOLDEN_IMAGES)
    for(let golden of GOLDEN_IMAGES) {
      console.log('Checking golden ', golden)
      let data = await browser.takeScreenshot()
      let result = await compareScreenshot(data, golden);
      expect(result).toBeTruthy();
      await element(by.css('img.lever')).click();
    }
  });
});
