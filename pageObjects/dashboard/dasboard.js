

class dashboard{

    get clickOnSignIn_Btn(){
        return $('a.login')
    }

    get clickOnSignOut_Btn(){
        return $("//a[@title='Log me out']")
    }

  

    get addtoCartFirstProduct(){
        return $("//span[contains(.,'Add to cart')]")
    }

    get priceOfFirstValue(){
        return $("//span[@class='price product-price']")
    }

    get clickOnFirstProduct(){
        return $("//h5[@itemprop='name']/a")
    }

    get addtoCart(){
        return $("#add_to_cart button")
    }

}
module.exports=new dashboard();