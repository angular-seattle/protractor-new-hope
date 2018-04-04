import {browser, by, element, ExpectedConditions as EC} from 'protractor';

describe('Prisoner manifest', () => {
  it('should require authentication', async() => {
    debugger;
    // The SSO login page isn't an Angular page, so we need to disable waitForAngular.
    browser.waitForAngularEnabled(false);
    await browser.get('/prisoners');
    await element(by.css('.user')).sendKeys('TestAccount');
    await element(by.css('.password')).sendKeys('TestPassword');

    // Click the button to accept TOS
    // await element(by.id('proceed')).click();

    await element(by.css('button#login')).click();

    // Turn on waitForAngular before logging in again
    browser.waitForAngularEnabled(true);
    await browser.get('/prisoners');

    const prisoners:string = await element(by.tagName('app-prisoner-manifest')).getText();
    expect(prisoners).toContain('Leia Organa');
  });
});
