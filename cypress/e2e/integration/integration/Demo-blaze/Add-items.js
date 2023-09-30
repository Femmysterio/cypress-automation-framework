/// <reference types="cypress" />

describe("Ascertain various pages via Demoblaze", () => {

})

it("Validate Add items to Cart via Demoblaze", () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('.list-group-item').contains('Laptops').click();
    cy.get('.hrefch').contains('MacBook Pro').click();
    cy.get('.btn-lg').click();
    cy.go(-2);
    
    cy.get('.hrefch').contains('Sony vaio i7').click();
    cy.get('.btn-lg').click();
    cy.go(-2);

    cy.get('.list-group-item').contains('Monitors').click();
    cy.get('.hrefch').contains('Apple monitor 24').click();
    cy.get('.btn-lg').click();
    cy.get('#cartur').click();
    cy.get('[data-target="#orderModal"]').click();
    cy.get('#totalm').should('have.text', 'Total: 2290'); //Assertion
    cy.get('#name').type('Olamiposi Orungbeja');
    cy.get('#country').type('Nigeria');
    cy.get('#city').type('Akute');
    cy.get('#card').type('08140972006');
    cy.get('#month').type('March');
    cy.get('#year').type(2018);
    cy.get('.btn').contains('Purchase').click();
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!'); //Assertion
    cy.get('.confirm').click();
    cy.get('.btn-secondary').contains('Close').click({force:true});

})