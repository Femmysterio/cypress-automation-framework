/// <reference types="cypress" />

describe("Test Adding items to cart elements via Magento", () => {

    it("Validate Adding items to Cart successfully", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('.button').click()
        //div > div > div > select[id="sorter"] //A good selector
        //cy.get(':nth-child(3) > .toolbar-sorter > #sorter').scrollTo('bottom', {ensureScrollable : false})
        cy.get('#sorter').contains('Product Name').click({force:true})
        cy.get('#sorter').select(1)
        cy.get('[alt="Cruise Dual Analog Watch"]').click({force:true})
        cy.get('#qty').clear().type(2)
        cy.get('#product-addtocart-button').click()
        //cy.go('back')
        cy.go(-1)
        cy.get('[alt="Dash Digital Watch"]').click({force:true})
        cy.get('#qty').clear().type(4)
        cy.get('#product-addtocart-button').click()
    })
})
