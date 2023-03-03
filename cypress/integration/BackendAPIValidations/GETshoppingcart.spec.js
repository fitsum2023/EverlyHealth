/// <reference types="cypress" />

const Subtotal_Price_FILE = 'subtotalprice.json'; 

describe('Product API', () => {
    context('GET shopping cart', ()=>{
        it('should return a list of all shopping cart', ()=>{
            cy.request({
                method: 'GET',
                url: 'https://everlywell.com/v9/shoppingCart',
                failOnStatusCode: false,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJ0eXAAAAA1234567890'}
            }).then((response)=>{
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(404)

            });

        });

    });

})


describe('', () => {
    it('', () => {
    cy.fixture(`Everly_Health_testdata/${Subtotal_Price_FILE}`).then(testData=>{

        expect(testData.userId).to.eq(12345)
        expect(testData.sessionId).to.eq("7x78634")
        expect(testData['items']).to.have.length(2)
        expect(testData.discount).to.eq(15.00)
        expect(testData.subTotal).to.eq(85.00)
        expect(testData['items'][0]['name']).to.include('FIT Test')
        expect(testData['items'][1]['name']).to.include('Allergy Test')
        expect(testData['items'][0]['quantity']).to.eq(1)
        expect(testData['items'][1]['quantity']).to.eq(1)
        expect(testData['items'][0]['price']).to.eq(40.00)
        expect(testData['items'][1]['price']).to.eq(60.00)

    })
})
})

it('fetch test', () => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: 'Bearer eyJ0eXAAAAA1234567890'}
      };
      
      cy.request('https://everlywell.com/v9/promoCode/12345', options)
        .then(response => response.json())
        .then(response => console.log(response))
        //.catch(err => console.error(err));
    




})

