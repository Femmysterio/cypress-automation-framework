/// <reference types="cypress" />

describe("Ascertain various pages via Demoblaze", () => {

})

it("Validate Contact-us via Demoblaze", () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('.nav-link').contains('Contact').click();
    cy.get('#recipient-email').type('femi17@gmail.com');
    cy.get('#recipient-name').type('Orungbeja Oluwafemi');
    cy.get('#message-text').type('Im a Software QA engineer, Please i need a Job');
    cy.get('.btn').contains('Send message').click();
    
})