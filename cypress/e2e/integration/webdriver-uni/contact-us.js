/// <reference types="Cypress" />

describe("Test contact us form via webdriverUni", () =>{
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us > .thumbnail > .section-title').click()
        cy.get('[name="first_name"]').type('Oluwafemi');
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type('Orungbeja');
        cy.get('[name="last_name"]').should('have.attr', 'name', 'last_name')
        cy.get('[name="email"]').type('oluwafemi17@gmail.com');
        cy.get('textarea.feedback-input').type('I love mummy and olamiposi');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        //cy.screenshot();
        //cy.screenshot('make a contact us form submission')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Oluwafemi');
        cy.get('[name="last_name"]').type('Orungbeja');
        cy.get('textarea.feedback-input').type('cypress is a good automation tool');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})