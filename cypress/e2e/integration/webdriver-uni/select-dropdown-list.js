/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () =>{
    it("select specific values via select dropdown lists", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force : true})

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('TestNG') //value='TestNG' via chrome selector
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')

        cy.get('#dropdowm-menu-3').select('JavaScript') //text='JavaScript' via chrome selector
        cy.get('#dropdowm-menu-3').select('JavaScript').contains('JavaScript')
    })

    it.only("select specific values via select dropdown lists", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force : true})

        cy.get('#dropdowm-menu-2').select('maven') //value='maven' via chrome selector
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')

        cy.get('#dropdowm-menu-2').select('TestNG') //text='TestNG' via chrome selector
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })
}) 