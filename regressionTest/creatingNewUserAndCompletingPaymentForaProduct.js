
const testData=require('../testData/creatingNewUserAndCompletingPaymentForaProduct.json');
const browserActions=require('../commonFunctions/actions.js');
const gloObj=require('../commonFunctions/globObj.js');
var faker = require('faker');


const firstName=faker.name.firstName();
const lastName=faker.name.lastName();
const emailID = faker.internet.email();
const companyName = faker.company.companyName();
const address1=faker.address.streetAddress();
const address2=faker.address.secondaryAddress();
const city=faker.address.city();
const postalCode=faker.address.zipCode();
const phone=faker.phone.phoneNumber();
const mobilephone=faker.phone.phoneNumber();
console.log("The Email is"+emailID);

describe('Creating a new user ,Adding the product the card and completing the payment for product', () => {

  it('Navigating to SignIn Page and creating a New Account ', async () => {

    //Loading the URL which was sent from the config.js file
    browser.url('/');

    //maxmizing the window of browser
    browser.maximizeWindow();

    //validating the Sign In button and clicking on it
    const signIn=await gloObj.dashboard.clickOnSignIn_Btn;
    await expect(signIn).toHaveTextContaining(testData.signInName);
    await expect(browser).toHaveUrl(testData.websiteURLValidation);
    await browserActions.clickOn(signIn);

    //validating the createNewAccount and alreadyRegistered headings are dispalyed or not
    const createnewaccountHeading=await gloObj.loc_createAnAccount.createAnAccountForm;
    await expect(createnewaccountHeading).toHaveTextContaining(testData.createNewAccount);

    
    const alreadyRegisteredHeading=await gloObj.loc_signIn.alreadyRegistered;
    await expect(alreadyRegisteredHeading).toHaveTextContaining(testData.alreadyRegistered);

    //Generating random Email and seding the emailID to create New Account
    await browserActions.enterText(await gloObj.loc_createAnAccount.enterEmail,emailID);
    await browserActions.clickOn(await gloObj.loc_createAnAccount.clickOnCreateAccount);

    //waiting for sometime to load the page
    await browser.pause(5000);

    //Selecting the checkboxes of Gender
    await browserActions.clickOn(await gloObj.loc_createAnAccount.checkBoxmr);

    //Entering the FirstName, LastName and password as the input Text
    await browserActions.enterText(await gloObj.loc_createAnAccount.firstName,firstName);
    await browserActions.enterText(await gloObj.loc_createAnAccount.lastName,lastName);
    await browserActions.enterText(await gloObj.loc_createAnAccount.password,testData.password);

    //Selecting the Date of birth by using select by index function in dropdown
    await browserActions.selectDrpByIndexValue(await gloObj.loc_createAnAccount.day,3);
    await browserActions.selectDrpByIndexValue(await gloObj.loc_createAnAccount.months,6);
    await browserActions.selectDrpByIndexValue(await gloObj.loc_createAnAccount.years, 7);

    //Entering the CompanyName,Address1,Address2,City
    await browserActions.enterText(await gloObj.loc_createAnAccount.company,companyName);
    await browserActions.enterText(await gloObj.loc_createAnAccount.address1,address1);
    await browserActions.enterText(await gloObj.loc_createAnAccount.address2,address2);
    await browserActions.enterText(await gloObj.loc_createAnAccount.city,city);

    //Selecting the State by using select by index value
    await browserActions.selectDrpByIndexValue(await gloObj.loc_createAnAccount.state,1);

    //Enter the postal Code
    await browserActions.enterText(await gloObj.loc_createAnAccount.postcode,testData.postalCode);

    //Selecting the Country Name
    await browserActions.selectDrpByIndexValue(await gloObj.loc_createAnAccount.country,1);

    //Adding some Additiona Iformation with is sending from the TestData.json file
    await browserActions.enterText(await gloObj.loc_createAnAccount.additionalInfo,testData.additionalInfo);

    //Enterning the Phone And mobile Numbers 
    await browserActions.enterText(await gloObj.loc_createAnAccount.phone,testData.phoneNumber);
    await browserActions.enterText(await gloObj.loc_createAnAccount.phoneMobile,testData.phoneMobile);

    //Click on Regisration
    await browserActions.clickOn(await gloObj.loc_createAnAccount.register_Btn);
    await browser.pause(5000);

  });
  it('Navigating to My Account Section and logging out of the application ', async () => {


    //It will Navigate to MyAccount section there we are validating the name and sureName
    const sometextdata=await gloObj.loc_myAccount.nameofuser;
    await expect(sometextdata).toHaveTextContaining(firstName);
    await expect(sometextdata).toHaveTextContaining(lastName);

    //Clicking on Sign Out button
    await browserActions.clickOn(await gloObj.dashboard.clickOnSignOut_Btn);
    await browser.pause(3000);
    
  });
  it('Login Again Back to application and click on Home Button ', async () => {

    //Validaiting the Sign In Button Is visible on header part and clicking on it
    const signInagain=await gloObj.dashboard.clickOnSignIn_Btn;
    await expect(signInagain).toHaveTextContaining(testData.signInName);
    await browserActions.clickOn(signInagain);

    //validating the createNewAccount and alreadyRegistered headings are dispalyed or not

    const createnewaccountHeadingAgain=await gloObj.loc_createAnAccount.createAnAccountForm;
    await expect(createnewaccountHeadingAgain).toHaveTextContaining(testData.createNewAccount);

    const alreadyRegisteredHeadingAgain=await gloObj.loc_signIn.alreadyRegistered;
    await expect(alreadyRegisteredHeadingAgain).toHaveTextContaining(testData.alreadyRegistered);

    //Entering yor EmailId And Password And click on Sign In Part
    await browserActions.enterText(await gloObj.loc_signIn.signInemail_Text,emailID);
    await browserActions.enterText(await gloObj.loc_signIn.signInpassword_Text,testData.password);
    await browserActions.clickOn(await gloObj.loc_signIn.SignIn_Btn);

    //Take some rest 
    await browser.pause(5000);

    //It will Navigate to MyAccount section there we are validating the name and sureName
    const firstAndLastName=await gloObj.loc_myAccount.nameofuser;
    await expect(firstAndLastName).toHaveTextContaining(firstName);
    await expect(firstAndLastName).toHaveTextContaining(lastName);

    //Clicking on Home Page button
    await browserActions.clickOn(await gloObj.loc_myAccount.clickOnHome_Btn);
    await browser.pause(3000);

  });
    it('Navigating to first Product in the and click on Add to cart', async () => {

    //Need to Add one product to cart so for that we are selecting what ever is there we are selecting the First product 
    await browserActions.clickOn(await gloObj.dashboard.clickOnFirstProduct);

    //Take break for while
    await browser.pause(3000);

    //Add the product to the cart 
    await browserActions.clickOn(await gloObj.dashboard.addtoCart);
    await browser.pause(3000);

    });
    it('Validating the product deatils and adding the product to cart', async () => {
    
      //Valdidate wheather the product has added successfully or not and click on proceed further
    const productsuccess=await gloObj.loc_paymentDeatils.produnctAddedSuccessfully;
    await expect(productsuccess).toHaveTextContaining(testData.productAddedSuccess);
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.proceedToCheckOut);
    await browser.pause(3000);

    });
    it('Navigating to Different tabs to complete the buying the product', async () => {

      //Check for the Total Summary for the checkout of the product
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.summaryproceedToCheckOut);
    await browser.pause(3000);

    //Check for you Address for delever your product
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.processAddress);
    await browser.pause(3000);

    //clicking on terms and conditions
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.termsAndConditions);
    await browser.pause(3000);

    //Carrier will processing
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.processCarrier);
    await browser.pause(3000);
    //Complete the Payment of product through bank wire
    
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.paythroughBankWire);
    await browser.pause(3000);

    //Click on confiramation of the order 
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.iwillConfirmMyOrder);
    await browser.pause(3000);

    });
    it('validating product has been added successfully message and navigate to order deatils', async () => {

      //Validating the product has successfully completed and click on backOrders
    const productCompletedHeading=await gloObj.loc_paymentDeatils.paymentDoneSuccess;
    await expect(productCompletedHeading).toHaveTextContaining(testData.productCompleted);
    await browserActions.clickOn(await gloObj.loc_paymentDeatils.backToOrders);
    await browser.pause(3000);

    });
    it('validate the product deatils in the order history', async () => {

      //validating the present today's date with order deatils 
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const presentDate = mm + '/' + dd + '/' + yyyy;

    const orderDetails=await gloObj.loc_paymentDeatils.orderTable;
    await expect(orderDetails).toHaveTextContaining(presentDate);
    

    });

  });