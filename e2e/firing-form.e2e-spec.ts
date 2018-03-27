import {browser, by, element, ExpectedConditions as EC} from 'protractor';

describe('Firing form', () => {
  beforeAll(async() => {
    await browser.get('/firing');
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

  it('should click ready and fire', async() => {
    let fireButton = await element(by.buttonText('Fire'));

    // TODO(milestone #3): Fix the wait for the test.
    expect(await EC.elementToBeClickable(fireButton)()).toBeTruthy();
    await fireButton.click();
  });
});