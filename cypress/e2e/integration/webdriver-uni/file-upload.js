/// <reference types="Cypress" />

describe("Test file upload via webdriveruni ", () =>{
    it("Upload a file", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force : true})

       cy.get('#myFile').selectFile("cypress/fixtures/laptop.png")
        cy.get('#submit-button').click();
     })

     it.only("Upload No file", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force : true})
        cy.get('#submit-button').click()
     })
})