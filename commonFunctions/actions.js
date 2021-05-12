BrowserActions= function(){

    this.clickOn=function(oelement){

        try {
            // message=message||'perform Click Operation on page Control';
            return oelement.click().then(function(){
                return true;
            });
            
        } catch (error) {
            console.log("the Element is can't clickable");
            // message=message||'perform Click Operation on page Control';
            return false;
            
        }
        
    };
    this.clickAndWait= async function(oelement,time){

        try {
            // message=message||'perform Click Operation on page Control';
            return oelement.click().then(function(){
                return true;
            });

            await browser.pause(time)
            
        } catch (error) {
            console.log("the Element is can't clickable");
            // message=message||'perform Click Operation on page Control';
            return false;
            
        }
        
    };

    this.enterText=function(oelement,value){
        try {

            return oelement.clearValue().then(function(isCleared){

                return oelement.setValue(value).then(function(status){

                    return status;
                })
            });   
        } catch (error) {
            console.log("There is issue in the Set value");
            return false;
            
        }
    };
    this.selectDrpByVisibleText=function(oelement,value){
        try {
                return oelement.selectByVisibleText(value).then(function(status){

                    return status;
                })  
        } catch (error) {
            console.log("There is issue in the Set value");
            return false;
            
        }
    }

    this.selectDrpByIndexValue=function(oelement,value){
        try {
                return oelement.selectByIndex(value).then(function(status){

                    return status;
                })  
        } catch (error) {
            console.log("There is issue in the Set value");
            return false;
            
        }
    }

}
module.exports=new BrowserActions();