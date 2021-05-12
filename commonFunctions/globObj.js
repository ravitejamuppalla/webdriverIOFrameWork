globObj=function(){

   

     this.dashboard=require('../pageObjects/dashboard/dasboard');
     
     this.loc_signIn=require('../pageObjects/authentication/signIn');

     this.loc_myAccount=require('./../pageObjects/dashboard/myAccount');

     this.loc_paymentDeatils=require('./../pageObjects/dashboard/paymentDeatils.js');

     this.loc_createAnAccount=require('./../pageObjects/authentication/createAnAccount.js');
     
      
}

module.exports=new globObj();