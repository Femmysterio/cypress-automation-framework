/// <reference types="cypress" />

describe("Test contact us form through Automation Test Store", () => {
    it ("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href$='contact']").click().then(function(linkText) {
        cy.log('Clicked on link using Text: ' + linkText.text())
        })
        //cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type('Olamiposi');
        cy.get('#ContactUsFrm_email').type('olamiposi07@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('oluwatosin is the best wife in the world')
        cy.get('button[title=Submit]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!' )
        cy.log('Test has completed!')
         });
})

