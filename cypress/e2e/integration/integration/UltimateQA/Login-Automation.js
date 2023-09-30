/// <reference types="cypress" />

describe("Test various elements through UltimateQA", () => {
    var firstName = 'Oluwafemi';
    var lastName = 'Orungbeja';
    var email = 'femi17@gmail.com';
    var password = 'femmysterio'


    it("Should be able to Sign-up succesfully", () => {
        cy.visit('https://ultimateqa.com/automation/');
        cy.get('.et_pb_text_inner').contains('Login automation').click()
        cy.get('.sign-in__sign-up').contains('Create a new account').click()
        //cy.get('[name="user[first_name]"]').type('Oluwafemi')
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[name="user[last_name]"]').type(lastName)
        cy.get('[type="email"]').type(email)
        cy.get('[type="password"]').type(password)
        cy.get('[type="checkbox"]').check()
        cy.get('[data-callback="onSubmit"]').click()
    });

    it("Should be able to Sign-in succesfully", () => {
        cy.visit('https://ultimateqa.com/automation/');
        cy.get('.et_pb_text_inner').contains('Login automation').click()
        cy.get('[type="email"]').type(email)
        cy.get('[type="password"]').type(password)
        cy.get('[data-callback="onSubmit"]').click()

    });
})
