/// <reference types="cypress" />

const { beforeEach } = require("mocha");

describe("Test Manager Login via Globalsqa", () => {
    const firstName = 'Oluwafemi';
    const lastName = 'Orungbeja';
    const postalCode = 23401;

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.btn-primary').contains('Bank Manager Login').click();
    });

    it("Validate  Add customer successfully", () => {
        cy.get('[ng-class="btnClass1"]').click();
        cy.get('[placeholder="First Name"]').type(firstName);
        cy.get('[placeholder="Last Name"]').type(lastName);
        cy.get('[placeholder="Post Code"]').type(postalCode);
        cy.get('.btn-default').contains('Add Customer').click()

        cy.on('Window:confirm', (str) => {
            expect(str).to.equal('Customer added successfully with customer id :6')
        })
        cy.go(-1);
    });

    it("Validate  Open Account Successfully", () => {
        cy.get('.tab').contains('Open Account').click();
        cy.get('#userSelect').select(2);
        cy.get('#currency').select('Pound');
        cy.get('[type="submit"]').click();
        cy.go(-1);
    });

    it("Validate to Delete Account Successfully", () => {
       cy.get('[ng-class="btnClass3"]').click();
       cy.get('[ng-click="deleteCust(cust)"]').eq(0).click();
    });
})
