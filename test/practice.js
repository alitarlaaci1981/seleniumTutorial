const { Builder, By } = require('selenium-webdriver');
const { DevTools } = require('selenium-adapter');
const assert = require('assert');
require("chromedriver");


describe('DevTools Tests', async function () {
    this.timeout(100000)
    let driver, devTools;


    // Create a new WebDriver instance and DevTools session before each test
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        //devTools = await DevTools.createSession(driver);
    });

    // Close the DevTools session and WebDriver instance after each test
    afterEach(async function () {
        //await devTools.close();
       // await driver.quit();
    });

    it('Navigate to the website', async function () {

        //   try {
        // Navigate to a URL
        await driver.get('https://www.idealimage.com/');

        await driver.manage().window().maximize();

        await driver.wait(() => driver.executeScript('return document.readyState').then(state => state === 'complete'), 50000);

        await driver.findElement(By.id('FC_Nav')).click();
        await driver.get('https://www.idealimage.com/schedule')

        // const currentUrl = await driver.getCurrentUrl();
        // assert.equal(currentUrl, 'https://www.idealimage.com/free-consultation?c=1')

        //await driver.executeScript('prospect.metas.flow')

        const variable = await driver.executeScript('return window.sessionStorage')
        //console.log(variable)

        await driver.navigate().refresh();
        await driver.manage().getCookie('prospect_id').then(function(cookie){
            console.log(`prospect id is : ${cookie.value}`);
        })

        await driver.manage().deleteCookie('prospect_id');

        // await driver.manage().getCookie('prospect_id').then(function(cookie){
        //     console.log(`prospect id is : ${cookie.value}`);
        // })


        

        





        //    for(let key in variable){
        //     if(key.includes('prospectId')){
        //         console.log(variable[key]);

        //     }
        //    }




        // const value =await driver.executeScript('return window.prospect.metas')
        // console.log(value.serviceTypeCode.value)
        //     let actual=value.flow.value;
        //     let expected='organic-botox-ss-treatment'
        //    if(actual == 'organic-botox-ss-treatment'){
        //     console.log('this is SS-botox flow')
        //    }
        //    else if(actual == 'organic'){
        //     console.log('this is free consultation flow')
        //    }
        //    else{
        //     console.log("Undefined flow")
        //    }
        //     assert.equal(actual,expected)


        // } catch (error) {
        //     console.error(`Error occured: ${error}`)

        // }




    });
});
