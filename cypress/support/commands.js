// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectproduct", (productname) => { 
    
    cy.get ('a[aria-label="Food Sensitivity Test"]').each(($el,index,$list) =>{
        if ($el.text().includes (productname)) {
            cy.wait(5000)
            cy.get('.sc-hTtwUo.dHSpuP.sc-GVOUr.jxtBuH').eq(index).click({force:true})
            cy.wait(5000)
            
        }
    })
})
