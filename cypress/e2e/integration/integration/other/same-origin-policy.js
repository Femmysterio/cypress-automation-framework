/// <reference types="Cypress" />

describe("Validate visiting two different domains via user actions", () =>{
    it("Validate visiting two different domains via user actions", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.visit('https://google.com');
    })

    it("Origin command", () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })
        
    })

    it("Origin command", () => {
        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })
        
    })
})