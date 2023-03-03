/// <reference types="cypress" />

const desktopMenuShopButton = '[data-testid="desktop-menu-button-1"]'


class shopPage {

    navigate() {
        cy.visit(Cypress.config('baseUrl'));
    }
    
    clickShopButton(text){
        cy.get(desktopMenuShopButton).contains(text).dblclick()
    }


}
export const shop = new shopPage();