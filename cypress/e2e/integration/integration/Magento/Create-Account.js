/// <reference types="cypress" />

describe("Test various elements via Magento", () => {
    
    it("Validate creating account successfully", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('a[href*="customer/account/create/"]').contains('Create an Account').click()
        cy.get('#firstname').type('Oluwafemi')
        cy.get('#lastname').type('Orungbeja')

        cy.get('#email_address').type('femi17@gmail.com')
        cy.get('#password').type('Femmysterio@2000')
        cy.get('[title="Confirm Password"]').type('Femmysterio@2000')
        cy.get('[title="Create an Account"]').click()
        
    });
    
})
