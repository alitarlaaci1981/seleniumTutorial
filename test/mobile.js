const { Builder, By, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// Set up the capabilities for a mobile device
const capabilities = Capabilities.chrome();
capabilities.set('deviceName', 'Pixel 2');
capabilities.set('platformVersion', '11');
capabilities.set('platformName', 'Android');

describe('Mobile Web Test', function () {
  let driver;

  before(function () {
    const service = new chrome.ServiceBuilder(chromedriver.path).build();
    chrome.setDefaultService(service);
  });

  it('should open website and verify title', async function () {
    driver = await new Builder()
      .withCapabilities(capabilities)
      .forBrowser('chrome')
      .build();

    // Navigate to the website
    await driver.get('https://www.example.com');

    // Verify the title of the website
    const title = await driver.getTitle();
    expect(title).to.equal('Example Domain');

    await driver.quit();
  });

  
});
