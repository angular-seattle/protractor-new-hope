import {browser, by, element, ExpectedConditions as EC} from 'protractor';

describe('Prisoner manifest', () => {
  beforeEach(async() => {
    await browser.manage().deleteAllCookies();
  });

  describe('with login page', () => {
    it('should redirect to the login', async() => {  
      browser.waitForAngularEnabled(false);
      await browser.get('/#/prisoners');
      expect(await browser.getCurrentUrl()).toBe(browser.baseUrl + 'assets/login.html');
    });
  
    it('should log in with fake credentials', async() => {
      await element(by.css('.user')).sendKeys('foo');
      await element(by.css('.password')).sendKeys('bar');
      await element(by.css('button#login')).click();
      browser.waitForAngularEnabled(true);
      await browser.wait(() => {
        return browser.getCurrentUrl().then(url => {
          return url !== browser.baseUrl + 'assets/login.html';
        });
      }, 3000);
      expect(await browser.getCurrentUrl()).toBe(browser.baseUrl + 'prisoners');
    });
  });

  describe('with a cookie', () => {
    it('should automatically load prisoners', async() => {
      // TODO (milestone #2): Run through chrome://inspect and debug.
      await browser.get('/#/prisoner');
      await (browser.manage() as any).addCookie({name: 'userflame', value: 'spock'});
      await browser.get('/#/prisoner');
      expect(await browser.getCurrentUrl()).toBe(browser.baseUrl + 'prisoner');
    })
  });
  
});