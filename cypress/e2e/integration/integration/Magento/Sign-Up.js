/// <reference types="cypress" />

describe("Test various elements via Magento", () => {

    it("Validate Sign Up successfully", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('a[href*="/login/referer/"]').contains('Sign In').click()
        cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Customer Login')

        cy.get('#email').type('femi17@gmail.com')
        cy.get('#pass').type('Femmysterio@2000')
        cy.get('#send2').click()

        cy.get('#ui-id-5').scrollTo('bottom', { ensureScrollable: false })
        cy.get('#ui-id-17').scrollTo('right', { ensureScrollable: false })
        cy.get('#ui-id-19').click({ force: true })

        cy.get("a[href*='trainer.html']").contains('Jupiter All-Weather Trainer').click({ force: true })
        cy.get('[itemprop="name"]').should('have.text', 'Jupiter All-Weather Trainer ')

        cy.get('#option-label-size-143-item-170').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#qty').clear().type(7)
        cy.get('#product-addtocart-button').click()
        cy.get('.showcart').click()
        cy.get('#top-cart-btn-checkout').click({ force: true }) 
        cy.get('.counter-number').click()
        //cy.get('.product-item-details > .actions > .secondary > .action').click()
        cy.get('[title="Remove item"]').click({force:true})
        cy.get('.action-primary').click()
        cy.get('.subtitle').should('have.text', 'You have no items in your shopping cart.')
    })
})
