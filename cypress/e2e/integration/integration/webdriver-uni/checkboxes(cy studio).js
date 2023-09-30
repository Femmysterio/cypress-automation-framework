/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () =>{
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com');
    })
    it("Check and validate checkbox", () => {
       
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
 
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    })

    it("uncheck checkbox succesfully", () => {
       

        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
 
        //cy.get(':nth-child(5) > input').as('option-3')
        cy.get('input[value="option-3"]').as('option-3')
        cy.get('@option-3').uncheck()
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it("uncheck checkbox succesfully", () => {
      
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).as('check-all')
        cy.get('@check-all').check().should('be.checked')
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Click On All Radio Buttons', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="blue"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('[value="green"]').check();
        cy.get('[value="purple"]').check();
        cy.get('#radio-buttons > [value="orange"]').check();
        /* ==== End Cypress Studio ==== */
    });
}) 