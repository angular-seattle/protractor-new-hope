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
    await rightOf('User:').click(by.css('input'));
    await type('TestPassword');
    await click(by.id('proceed'))

    browser.waitForAngularEnabled(true);
    await click('Login');

    const prisoners:string = await element(by.tagName('app-prisoner-manifest')).getText();
    expect(prisoners).toContain('Leia Organa');
  });
});
