import {browser, by, element, ExpectedConditions as EC} from 'protractor';
import {type, go, see, slow, click, under, leftOf, below, rightOf} from 'blue-harvest';

describe('Firing form', () => {
  beforeAll(async() => {
    await browser.get('/#/firing');
  });

  it('should fillout the required fields', async() => {
    let systemInput = element(by.css('[formcontrolname="system"]'));
    let orbitInput = element(by.css('[formcontrolname="orbit"]'));
    await orbitInput.sendKeys('100');
    expect(await systemInput.getAttribute('value')).toBe('Alderaan');
    expect(await orbitInput.getAttribute('value')).toBe('100');
  });

  it('should click the add button (1st)', async() => {
    let name = element(by.css('[formcontrolname="name"]'));
    let commandCode = element(by.css('[formcontrolname="commandCode"]'));
    expect(await EC.invisibilityOf(name)).toBeTruthy();
    expect(await EC.invisibilityOf(commandCode)).toBeTruthy();
    
    await element(by.buttonText('Add an officer')).click();
    expect(await name.isDisplayed()).toBeTruthy();
    expect(await commandCode.isDisplayed()).toBeTruthy();
  });

  it('should add a name without gold', async() => {
    let name = element(by.css('[formControlName="name"]'));
    let commandCode = element(by.css('[formControlName="commandCode"]'));
    expect(await name.getAttribute('value')).toBe('');
    expect(await commandCode.getAttribute('value')).toBe('');

    await name.sendKeys('Mr. Newton');
    expect(await name.getAttribute('value')).toBe('Mr. Newton');

    await commandCode.sendKeys('Paws');
    expect(await commandCode.getAttribute('value')).toBe('Paws');

    // check if we can fire.
    let readyButton = await element(by.buttonText('Ready'));
    expect(await EC.elementToBeClickable(readyButton)()).not.toBeTruthy();
  });

  it('should click the add button (2nd)', async() => {
    await element(by.buttonText('Add an officer')).click();
    let name = element.all(by.css('[formControlName="name"]')).last();
    let commandCode = element.all(by.css('[formControlName="commandCode"]')).last();
    expect(await name.getAttribute('value')).toBe('');
    expect(await commandCode.getAttribute('value')).toBe('');
  });

  it('should add a name with gold', async() => {
    let name = element.all(by.css('[formControlName="name"]')).last();
    let commandCode = element.all(by.css('[formControlName="commandCode"]')).last();
    await name.sendKeys('Mr. Blondie');
    expect(await name.getAttribute('value')).toBe('Mr. Blondie');

    await commandCode.sendKeys('Gold');
    expect(await commandCode.getAttribute('value')).toBe('Gold');

    // check if we can fire.
    let readyButton = element(by.buttonText('Ready'));
    expect(await EC.elementToBeClickable(readyButton)()).toBeTruthy();
  });

  fit('should add a name with gold using action helpers', async() => {
    await click('Orbit:');
    await type('3');

    await below('Authorizing Officers').click('Add an officer');
    await click('Name');
    await type('Mr.Blondie');
    await click('Command Code');
    await type('Gold 1');

    // check if we can fire.
    await slow.see('Ready');
    await click('Ready');

    await browser.waitForAngularEnabled(false);
    await browser.wait(EC.elementToBeClickable(element(by.buttonText('Fire'))));
    await slow.click('Fire');
    await browser.waitForAngularEnabled(true);
    await see('BOOM');
  });

  it('should click ready and fire', async() => {
    let readyButton = element(by.buttonText('Ready'));
    await readyButton.click();

    let fireButton = element(by.buttonText('Fire'));

    // TODO(milestone #3): Fix the wait for the test.
    // Since Angular is not stable, we should set
    // browser.waitForAngularEnabled(false)
    await fireButton.click();

    await browser.wait(EC.elementToBeClickable(see('Fire')));
    await click('Fire');
    await browser.sleep(6000);
  });
});