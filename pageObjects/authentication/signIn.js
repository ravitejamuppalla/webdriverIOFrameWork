// const { default: $ } = require("webdriverio/build/commands/browser/$");

class signIn{

    get alreadyRegistered(){
        return $("//h3[contains(.,'Already registered?')]")
    }

    get clickOnSignIn_Btn(){
        return $('a.login')
    }
    get signInemail_Text(){
        return $('#email')
    }
    get signInpassword_Text(){
        return $('#passwd')
    }
    get SignIn_Btn(){
        return $('#SubmitLogin');
    }

}
module.exports=new signIn();
