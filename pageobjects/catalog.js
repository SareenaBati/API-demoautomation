const { $, browser } = require('@wdio/globals');
const Page = require('./page');

class Catalog extends Page {
    get viewMenu () {
        return $('~View menu');
    }
    get catalog_menu(){
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Catalog"]');
    }
    async clickMenu () {
        await this.viewMenu.click();
    }
    async clickCatalog(){
        await this.catalog_menu.click()
    }
}
module.exports = new Catalog();