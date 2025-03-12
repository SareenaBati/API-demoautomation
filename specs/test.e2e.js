const { expect, browser } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const catalog = require('../pageobjects/catalog.js');
const SecurePage = require('../pageobjects/secure.page');
const Webview=require('../pageobjects/webview.js')
const Drawing=require('../pageobjects/drawing.js')
describe('API Demos', () => {
  it('should click the menu', async () => {
    await catalog.clickMenu();
    await catalog.clickCatalog();
    await catalog.clickMenu();
    await LoginPage.login("bod@example.com", "10203040")
    await catalog.clickMenu();
    await Webview.click_webview("https://www.google.com/");
    
    
  });
  it.only('should click the drawing', async () => {
    await catalog.clickMenu()
    await Drawing.clickDrawing();
    await Drawing.drawRectangle();
    });
 
  
});