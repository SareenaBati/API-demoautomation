const { $, browser } = require('@wdio/globals');
const Page = require('./page');

class web_view extends Page {
    get webview_menu () {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="WebView"]')
    }
   
    get input_url(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/urlET"]')
    }
    get go_to_site_button(){
        return $('//android.widget.Button[@content-desc="Tap to view content of given url"]')
    }

    async click_webview (url) {
        await this.webview_menu.click()
        await this.input_url.setValue(url);
        await this.go_to_site_button.click();
    }

}
module.exports=new web_view();
