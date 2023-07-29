/// <reference types="Cypress" />

describe("Test login page via nairaland", () =>{
    it("Should be able to login successfully via nairaland", () => {
        cy.visit('https://www.nairaland.com/');
        cy.get('[href="/login"]').click()

        //login with password
        cy.get('[name="login"]').type('Anonymous2000');
        cy.get('[name="password"]').type('selenze');
        cy.get(':nth-child(5) > tbody > :nth-child(2) > .w > form > [type="submit"]').click()
        //cy.get('input[value="Login"]').click()
        
     });

     it.only("Should not be able to login successfully via nairaland as all fields are required", () => {
        cy.visit('https://www.nairaland.com/');
        cy.get('[href="/login"]').click()

        //login with password
        cy.get('[name="login"]').type('Anonymous2000');
        //cy.get(':nth-child(5) > tbody > :nth-child(2) > .w > form > [type="submit"]').click()
        cy.get('input[value="Login"]').click()
        cy.get('h2').contains('Wrong Username or Password')
        
     });
})