import {browser, by, element, ExpectedConditions as EC} from 'protractor';

describe('Prisoner manifest', () => {
  it('should redirect to the login', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/prisoners');
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'assets/login.html');
  });

  it('should log in with fake credentials', () => {
    element(by.css('.user')).sendKeys('foo');
    element(by.css('.password')).sendKeys('bar');
    element(by.css('button#login')).click();
    browser.waitForAngularEnabled(true);
    browser.wait(() => {
      return browser.getCurrentUrl().then(url => {
        return url !== browser.baseUrl + 'assets/login.html';
      });
    }, 3000);
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'prisoners');
  });
});