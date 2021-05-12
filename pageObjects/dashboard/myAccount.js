

class myAccount{

    get nameofuser(){

        return $('a.account')
    }

    get clickOnHome_Btn(){
        return $('i.icon-home')
    }

    get sample(){
        return $('.tagline')
    }

}
module.exports=new myAccount();