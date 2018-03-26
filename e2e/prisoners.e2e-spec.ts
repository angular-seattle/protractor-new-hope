import {browser, by, element, ExpectedConditions as EC} from 'protractor';

describe('Prisoner manifest', () => {
  it('should redirect to the login', async() => {
    browser.waitForAngularEnabled(false);
    await browser.get('/prisoners');
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