/// <reference types="cypress" />

describe("Test various elements via Globalsqa", () => {
})

it("Validate flight booking via blazedemo", () => {
    cy.visit('https://blazedemo.com/');
    cy.get('[name="fromPort"]').select('Portland');
    cy.get('[name="toPort"]').select(4);
    cy.get('.btn-primary').click();
    cy.get('.btn-small').eq(3).click();
    cy.get('#inputName').type('Oluwafemi Orungbeja');
    cy.get('#address').type('No.3, Aluko str');
    cy.get('#city').type('Akute');
    cy.get('#state').type('Ogun State');
    cy.get('#zipCode').type(23401);
    cy.get('#cardType').select('American Express');
    cy.get('#creditCardNumber').type('0987654321');
    cy.get('#creditCardMonth').type(11);
    cy.get('#creditCardYear').type(2027)
    cy.get('#nameOnCard').type('Oluwafemi Orungbeja');
    cy.get('.btn-primary').click()
    cy.get('.container').contains('Thank you for your purchase today!').should('have.text', 'Thank you for your purchase today!')
    
})