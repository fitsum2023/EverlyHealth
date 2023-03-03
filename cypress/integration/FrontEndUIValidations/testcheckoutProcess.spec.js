import { homePage } from '../../pages/eHomePage';

const Everly_Health_FILE = 'everly_health.json'; 

describe('Test volume-based discounts feature for Everly Health web page', () => {
    it('Verify expected quantity displays when users add items to the cart', () => {
    cy.log('Step 1: User navigates to Everly Health home page');
    homePage.navigate();
    cy.fixture(`Everly_Health_testdata/${Everly_Health_FILE}`).then((testData)=> {
        cy.log('Step 2: User navigate to products page');
        homePage.navigateToProducts();
        cy.log('Step 3: User select Cart item');
        homePage.selectCartItems(testData.productname[0])
        cy.log('Step 4: User verify the correct cart item is selected');
        homePage.verifyCartItemIsSelected()
    });
    });

  });  



