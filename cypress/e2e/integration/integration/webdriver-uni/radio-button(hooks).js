/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    beforeEach(function() {
            cy.visit('https://webdriveruniversity.com');
            cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force : true})
    })
    it("Check specific radio buttons", () => {

        // cy.get('#radio-buttons').find('[type="radio"]').as('radio-buttons').first().check()
        // cy.get('@radio-buttons').eq(3).check()

        cy.get('[type="radio"]').as('radio-buttons').first().check()
        cy.get('@radio-buttons').eq(3).check()
    })

    it("Validate the states of specific radio buttons", () => {
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')

        cy.get('[value="lettuce"]').check()
        cy.get('[value="lettuce"]').should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')

        cy.get('[value="cabbage"]').should('be.disabled')

    })
}) 