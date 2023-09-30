/// <reference types="cypress" />

describe("Test contact us form through Goal", () => {

    it.only("Should be able to make a successful submission via contact us form", () => {
        cy.visit('https://ultimateqa.com/automation/');
        // cy.get(':nth-child(1) > .formkit-input').type('Oluwafemi Orungbeja', {force:true})
        // cy.get(':nth-child(2) > .formkit-input').type('femi17@gmail.com', {force:true})
        // cy.get('.formkit-submit > span').click({force:true})

        cy.get('#menu-item-216842').click()
        cy.get('#et_pb_contact_first_0').type('Oluwafemi')
        cy.get('#et_pb_contact_last_0').type('Orungbeja')
        cy.get('#et_pb_contact_email_0').type('femi17@gmail.com')
        cy.get('#et_pb_contact_message_0').type('Manual & Automation testing using cypress, selenium, API, Postman')
        //cy.get('[name="et_builder_submit_button"]').click()
        cy.get('.et_pb_contact_submit').click()
        cy.get('.et-pb-contact-message').should('have.text', 'Thanks for contacting us')
    });
})
