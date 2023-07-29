/// <reference types="cypress" />

describe("Test items via Gentle Top Gifts", () => {
    it ("Navigating to specific product pages", () => {
        cy.visit('https://gentletopgifts.com/')
        cy.get("a[href*='https://gentletopgifts.com/product/custom-color-changing-cups/']").contains('Fancy Custom Color Changing Cups').click()
         });

         it.only("Navigating to specific product pages", () => {
            cy.visit('https://gentletopgifts.com/')
            //cy.get('.elementor-element-2c5b951 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
            cy.get("a[href*='contact']").contains('Contact US').invoke('removeAttr', '{"animation":"fadeInUp"}').click();
            //cy.get('section[data-id="7b61d82"]',).
            cy.get('#form-field-name').type("oluwafemi", {force : true})
            cy.get('#form-field-email').type("oluwafemi17@gmail.com", {force : true})
            cy.get('#form-field-b26ecb6').type("08140972006", {force : true})
            cy.get('#form-field-message').type("is there discount on bulk product?", {force : true})
            // cy.get("button[type*='submit']").click({force : true})
        });
})