
const {test, expect } = require('@playwright/test');

test('Search Sky Glass', async({page}) => {

    //Got to sky.com
    await page.goto('https://www.sky.com/');

    //Locate the cookies pop up iFrame and click the agree button
    const cookiePop = page.frameLocator('#sp_message_iframe_474555').locator('text=Agree');
    await cookiePop.click();

    //Click the search glass
    await page.locator('data-test-id=masthead-search-toggle-button').click();

    //Fill the input box and click the search icon
    await page.locator('data-test-id=input-box').fill('Glass');
    await page.waitForTimeout(2000);
    await page.locator('data-test-id=submit-button').click();

    //Confirm the page loads correctly
    const searchResult = page.locator('.c-editorial-layer__title');
    await expect(searchResult).toHaveText('Sky Glass');   

});