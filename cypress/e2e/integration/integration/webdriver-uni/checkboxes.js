/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () =>{
    it("Check and validate checkbox", () => {
        cy.visit('https://webdriveruniversity.com');
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force : true})

        cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
 
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    })

    it("uncheck checkbox succesfully", () => {
        cy.visit('https://webdriveruniversity.com');
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force : true})

        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
 
        //cy.get(':nth-child(5) > input').as('option-3')
        cy.get('input[value="option-3"]').as('option-3')
        cy.get('@option-3').uncheck()
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it("check checkbox succesfully", () => {
        cy.visit('https://webdriveruniversity.com');
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force : true})
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).as('check-all')
        cy.get('@check-all').check().should('be.checked')
    })
}) 