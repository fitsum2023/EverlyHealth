/// <reference types="cypress" />

const shopAllProduct = 'button.sc-hTtwUo.khTkOf.styles__DesktopShopCTAButton-sc-1rfo6c5-11.cBIpuA'


class eHomePage {

    navigate() {
        cy.visit(Cypress.config('baseUrl'));
    }
    navigateToProducts() {
        cy.visit("/products");
    }
    selectCartItems(name){
        cy.selectproduct(name)
    }
    verifyCartItemIsSelected(){
        cy.get('div.Cartstyles__TotalLabel-sc-51hxz1-18.dkNzWI', {timeout: 5000}).should('contain.text', 'Total (1 Item):')
        cy.get('[data-testid="close-cart"] > .sc-gsnTZi').eq(1).click()
    }


    clickOnShopAllProduct(button) {
       cy.get(shopAllProduct).contains(button).should('be.visible').click();
    }


}
export const homePage = new eHomePage();