const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function upload() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://filebin.net/");
    //await driver.manage().window().maximize();
    await driver.sleep(5000)

    let input = await driver.findElement(By.id("fileField"))
    let actions=await driver.actions({async:true});
    await actions.doubleClick(input).perform();

    await input.sendKeys("C:\\Users\\kemal\\Desktop\\All Files\\New Frameworks\\seleniumTutorial\\test\\upload.js")

   await driver.manage().getCookies().then(function(cookies){
    console.log("cookie details => ",cookies)
   })

    //await driver.quit();

}

upload();