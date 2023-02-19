const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.com/");
    await driver.manage().window().maximize();

    await driver.findElement(By.partialLinkText("Sign in")).click();

    //display the title
    let title = await driver.getTitle();
    console.log(title);

    if (title === "GitHub: Let’s build from here · GitHub") {
        console.log("Title test case successfull");
    } else {
        console.log("Title test case is failed");
        return
    }

    await driver.sleep(2000);

    await driver.findElement(By.id("login_field")).sendKeys("kemal_tar@hotmail.com");
    await driver.findElement(By.name("password")).sendKeys("123450", Key.RETURN);

    if(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
        console.log("Test #2 success")
    }else{
        console.log("Something went wrong and error text is not displayed")
    }

    





    // setInterval(function () {
    //     driver.quit();

    // }, 3000)


}

test_case();