const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const fs = require("fs")

async function scrape() {
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("https://www.youtube.com/");

    await driver.manage().window().maximize();
    await driver.navigate().refresh()

    let links = await driver.findElements(By.tagName("a"));

    driver.sleep(2000
    )

    for (let link of links) {
        console.log( await link.getText());
    }

    driver.quit();

}

scrape();