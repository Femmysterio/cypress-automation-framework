/// <reference types="cypress" />

describe("Test interactions 'automate an app that evolves'via UltimateQA", () => {
    let firstName = 'Olamiposi';
    let lastName = 'Orungbeja';


    it("Validate Sprint 1 via contact us form", () => {
        cy.visit('https://ultimateqa.com/automation/');
        cy.get('[href="https://ultimateqa.com/sample-application-lifecycle-sprint-1/"]').click()
        cy.get('[name="firstname"]').type(firstName)
        cy.get('#submitForm').click() 
    });

    it("Validate Sprint 2 via contact us form", () => {
        cy.visit('https://ultimateqa.com/automation/');
        cy.get('[href="https://ultimateqa.com/sample-application-lifecycle-sprint-1/"]').click()
        cy.get('[href="https://ultimateqa.com/sample-application-lifecycle-sprint-2/"]').click()
        cy.get('[name="firstname"]').type(firstName)
        cy.get('[name="lastname"]').type(lastName)
        cy.get('article>div>form').find('[type="submit"]').click()
    });

    it("Validate Sprint 3 via contact us form", () => {
        cy.visit('https://ultimateqa.com/automation/');
        cy.get('[href="https://ultimateqa.com/sample-application-lifecycle-sprint-1/"]').click()
        cy.get('[href="https://ultimateqa.com/sample-application-lifecycle-sprint-2/"]').click()
        cy.get('[href="https://ultimateqa.com/sample-application-lifecycle-sprint-3/"]').click()
        cy.get('[value="female"]').check()
        cy.get('[name="firstname"]').type(firstName)
        cy.get('[name="lastname"]').type(lastName)
        cy.get('article>div>form').find('[type="submit"]').click()
    });
})
