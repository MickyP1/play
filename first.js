
const {firefox} = require ('playwright');
const {test, expect } = require('@playwright/test');

(async() => {

    //Got to sky.com
    const browser = await firefox.launch({headless: false, slowMo:300});
    const page = await browser.newPage();
    await page.goto('https://www.sky.com/');

    //Locate the cookies pop up iFrame and click the agree button
    const cookiePop = page.frameLocator('#sp_message_iframe_474555').locator('text=Agree');
    await cookiePop.click();

    //Click the search glass
    await page.locator('data-test-id=masthead-search-toggle-button').click();

    //Fill the input box in search and fill
    await page.locator('data-test-id=input-box').fill('Glass');
    await page.locator('data-test-id=submit-button').click();

    //Confirm the page loads correctly
    const searchResult = page.locator('.c-editorial-layer__title');
    await expect(searchResult).toHaveText('Sky Glass');   
    
    //Close the browser
    await browser.close();

})();