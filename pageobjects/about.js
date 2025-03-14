const { $ } = require('@wdio/globals')
const Page = require('./page');

class About extends Page {
    get about(){
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="About"]');
    }

    get go_to_the_sauce_labs_website(){
        return $('//android.widget.TextView[@content-desc="Tap to view content of given url"]');
    }

    async click_about(){
        await this.about.click();
    }
    async click_go_to_the_sauce_labs_website(){
        await this.go_to_the_sauce_labs_website.click();
    }
    
}
module.exports=new About(); 