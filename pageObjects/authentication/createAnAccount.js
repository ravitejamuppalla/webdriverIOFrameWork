

class createAnAccount{


    get createAnAccountForm(){
        return $("//h3[contains(.,'Create an account')]")
    }

    get createanAccountHeading(){
        return $("//h1[contains(.,'Create an account')]");
    }
    

    get clickOnCreateAccount(){
        return $('#SubmitCreate')
    }

    get enterEmail(){
        return $('#email_create')
    }

    get checkBoxmr(){
        return $('#id_gender1')
    }


    get firstName(){
        return $('#customer_firstname')
    }


    get lastName(){
        return $('#customer_lastname')
    }

    get password(){
        return $('#passwd')
    }

    get day(){
        return $('#days')
    }

    get months(){
        return $('#months')
    }
    get years(){
        return $('#years')
    }

    get company(){
        return $('#company')
    }
    get address1(){
        return $('#address1')
    }
    get address2(){
        return $('#address2')
    }
    get city(){
        return $("//input[@name='city']")
    }
    get state(){
        return $('#id_state')
    }
    get postcode(){
        return $('#postcode')
    }
    get country(){
        return $('#id_country')
    }
    get additionalInfo(){
        return $('#other')
    }
    get phone(){
        return $('#phone')
    }
    get phoneMobile(){
        return $('#phone_mobile')
    }

    get register_Btn(){
        return $('#submitAccount')
    }





}
module.exports=new createAnAccount();
