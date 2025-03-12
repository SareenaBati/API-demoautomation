const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    
    get login_menu(){
        return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Recycler view for menu"]/android.view.ViewGroup[11]');
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
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.login_menu.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}
module.exports = new LoginPage();