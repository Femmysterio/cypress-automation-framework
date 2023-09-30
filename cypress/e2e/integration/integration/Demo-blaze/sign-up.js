/// <reference types="cypress" />

describe("Ascertain various pages via Demoblaze", () => {

})

it("Validate Sign Up via Demoblaze", () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#signin2').click();
    cy.get('#sign-username').type('Femmysterio1');
    cy.get('#sign-password').type('Femmysterio');
    cy.get('[onclick="register()"]').click();

    cy.on('Window:confirm', (str) => {
        expect(str).to.equal('Sign up successful.')
    })

})