/// <reference types="cypress" />

describe("Ascertain various pages via Demoblaze", () => {

})



it("Validate Log In and Add items to Cart via Demoblaze", () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#login2').click();
    cy.get('#loginusername').type('Femmysterio1');
    cy.get('#loginpassword').type('Femmysterio');
    cy.get('[onclick="logIn()"]').click();

    //Add phones to Cart
    cy.get('#itemc').contains('Phones').click({force:true});
    cy.get('.hrefch').contains('Samsung galaxy s7').click({force:true});
    cy.get('.btn-success').click();
    cy.go(-2);

    cy.get('.hrefch').contains('Iphone 6 32gb').click({force:true});
    cy.get('.btn-success').click();

    //Go to Cart
    cy.get('#cartur').click();
    cy.get('.btn-success').click();
    cy.get('#totalm').should('have.text', 'Total: 1590'); //Assertion
    cy.get('#name').type('Oluwatosin Orungbeja');
    cy.get('#country').type('Nigeria');
    cy.get('#city').type('Lekki');
    cy.get('#card').type('08169257999');
    cy.get('#month').type('December');
    cy.get('#year').type(2023);
    cy.get('.btn').contains('Purchase').click();
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!'); //Assertion
    cy.get('.confirm').click();
    cy.get('.btn-secondary').contains('Close').click({force:true});
})