const { $, browser } = require('@wdio/globals');
const Page = require('./page');

class Product extends Page {
    get product() {
        return $('(//android.widget.ImageView[@content-desc="Product Image"])[1]');
    }

    get add_to_cart() {
        return $('//android.widget.Button[@content-desc="Tap to add product to cart"]');
    }

    get my_cart() {
        return $('//android.widget.RelativeLayout[@content-desc="Displays number of items in your cart"]/android.widget.ImageView');
    }
    get proceed_to_checkout(){
        return $('//android.widget.Button[@content-desc="Confirms products for checkout"]');
    }

    get inputUsername () {
        return $('id:com.saucelabs.mydemoapp.android:id/nameET');
    }
    get inputPassword () {
        return $('id:com.saucelabs.mydemoapp.android:id/passwordET');
    }

    get btnSubmit () {
        return $('~Tap to login with given credentials');
    }
    get FullName(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/fullNameET"]');
    }
    get input_address_line1(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/address1ET"]');
    }
    get input_address_line2(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/address2ET"]');
    }
    get input_city(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cityET"]');
    }
    get input_state(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/stateET"]');
    }
    get input_zip_code(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/zipET"]');
    }

    get input_country(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/countryET"]')
    }
    get to_payment_button(){
        return $('//android.widget.Button[@content-desc="Saves user info for checkout"]');
    }
    
    //payment method
    get input_full_name(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
    }

    get input_card_number(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cardNumberET"]');
    }

    get input_expiration_date(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/expirationDateET"]');
    }

    get input_security_code(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/securityCodeET"]');
    }

    get review_order_button(){
        return $('//android.widget.Button[@content-desc="Saves payment info and launches screen to review checkout data"]');
    }

    get place_order_button(){
        return $('//android.widget.Button[@content-desc="Completes the process of checkout"]');
    }

    get continue_shopping_button(){
        return $('//android.widget.Button[@content-desc="Tap to open catalog"]');
    }
    async click_product() {
        await this.product.click();
    }

    async click_add_to_cart() {
        await this.add_to_cart.click();
    }

    async click_my_cart() {
        await this.my_cart.click();
    }
    async click_proceed_to_cart(){
        await this.proceed_to_checkout.click();
    }

    async cart (username, password) {
        
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async checkout(full_name, address_line1,address_line2,city,state,zip_code,country){
        await this.FullName.setValue(full_name);
        await this.input_address_line1.setValue(address_line1);
        await this.input_address_line2.setValue(address_line2);
        await this.input_city.setValue(city);
        await this.input_state.setValue(state);
        await this.input_zip_code.setValue(zip_code);
        await this.input_country.setValue(country);
        await this.to_payment_button.click();

    } 
    async payment_method(fullname,cardnumber,expirationdate,securitycode){
        await this.input_full_name.setValue(fullname);
        await this.input_card_number.setValue(cardnumber);
        await this.input_expiration_date.setValue(expirationdate);
        await this.input_security_code.setValue(securitycode);
        await this.review_order_button.click();
    }
    async click_place_order(){
        await this.place_order_button.click();
        
    }
    async click_continue_shopping(){
        await this.continue_shopping_button.click();
        
    }
}

module.exports = new Product();
