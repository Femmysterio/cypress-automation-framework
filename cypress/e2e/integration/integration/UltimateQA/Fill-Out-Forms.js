/// <reference types="cypress" />

describe("Test interactions 'automate an app that evolves'via UltimateQA", () => {
    const Name = 'Olamiposi Orungbeja';
    const Message = 'I am a good and brilliant child, i love my parents and grandpa';
   
    it("Validate Sprint 1 via contact us form", () => {
        cy.visit('https://ultimateqa.com/automation/')
        cy.get('[href="https://ultimateqa.com/filling-out-forms/"]').click()
        cy.get('#et_pb_contact_name_0').type(Name)
        cy.get('#et_pb_contact_message_0').type(Message)
        cy.get('[type="submit"]').contains('Submit').click()
    });

    it.only("Validate Sprint 1 via contact us form", () => {
        cy.visit('https://ultimateqa.com/automation/')
        cy.get('[href="https://ultimateqa.com/filling-out-forms/"]').click()
        cy.get('#et_pb_contact_name_0').type(Name)
        cy.get('#et_pb_contact_message_0').type(Message)
        cy.get('[name="et_pb_contact_captcha_1"]').type(7)
        cy.get('#_wpnonce-et-pb-contact-form-submitted-1').click({force:true})
    });
    
})
