import {browser, by, element, ExpectedConditions as EC} from 'protractor';
import {type, go, see, slow, click, under, leftOf, above, below, rightOf} from 'blue-harvest';

describe('Prisoner manifest', () => {
  it('should require authentication', async() => {
    debugger;
    // The SSO login page isn't an Angular page, so we need to disable waitForAngular.
    browser.waitForAngularEnabled(false);
    await go('/prisoners');
    await rightOf('User:').click(by.css('input'));
    await type('Test User');
    await element(by.css('.password')).sendKeys('TestPassword');
    await element(by.css('button#login')).click();

    // Turn on waitForAngular before logging in again
    browser.waitForAngularEnabled(true);
    await browser.get('/prisoners');

    const prisoners:string = await element(by.tagName('app-prisoner-manifest')).getText();
    expect(prisoners).toContain('Leia Organa');
  });
});
