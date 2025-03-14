const { $, browser } = require('@wdio/globals');
const Page = require('./page');

class Sort_By extends Page {
    get sort(){
        return $('//android.widget.ImageView[@content-desc="Shows current sorting order and displays available sorting options"]');
    }
    get name_ascending(){
        return $('//android.widget.TextView[@text="Name - Ascending"]');
    }

    get name_descending(){
        return $('//android.widget.TextView[@text="Name - Descending"]');
    }
    get price_ascending(){
        return $('//android.widget.TextView[@text="Price - Ascending"]');
    }
    get price_descending(){
        return $('//android.view.ViewGroup[@content-desc="Descending order by price"]')
    }
    async scrolldown(){
         browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: 360, y: 500 },
                    { type: "pointerDown", button: 0 },
                    { type: "pause", duration: 500 },
                    { type: "pointerMove", duration: 3000, x: 360, y: -6000 },
                    {type:"pointerMove", duration: 3000,x:360,y:6000},
                    { type: "pointerUp", button: 0 }
                ]
            }
        ]);
    }
    
    async sorting(){
        await this.sort.click();
        await this.name_ascending.click();
        await this.scrolldown();
        await this.sort.click();
        await this.name_descending.click();
        await this.scrolldown();
        await this.sort.click();
        await this.price_ascending.click();
        await this.scrolldown();
        await this.sort.click();
        await this.price_descending.click();
        await this.scrolldown();


    }

}
module.exports=new Sort_By();



    