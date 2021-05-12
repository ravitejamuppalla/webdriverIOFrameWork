


class paymentDeatils{


  

    get proceedToCheckOut(){
        return $("//a[@title='Proceed to checkout']");
    }

    get summaryproceedToCheckOut(){
        return $("//a[@href='http://automationpractice.com/index.php?controller=order&step=1']");
    }
    get processAddress(){
        return $("//button[@name='processAddress']");
    }

    get processCarrier(){
        return $("//button[@name='processCarrier']");
    }
    get termsAndConditions(){
        return $('#cgv')
    }

    get paythroughBankWire(){
        return $('a.bankwire')
    }

    get iwillConfirmMyOrder(){
        return $("//span[contains(.,'I confirm my order')]")
    }

    get backToOrders(){
        return $("//a[@title='Back to orders']")
    }

    get produnctAddedSuccessfully(){
        return $("//h2[contains(.,'Product successfully added to your shopping cart')]")
    }

    get paymentDoneSuccess(){
        return $("//p[contains(.,'Your order on My Store is complete.')]");
    }

    get orderTable(){
        return $('tr.first_item');
    }

}
module.exports=new paymentDeatils();