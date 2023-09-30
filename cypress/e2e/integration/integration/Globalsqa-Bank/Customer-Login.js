/// <reference types="cypress" />

describe("Test Login via Globalsqa", () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[ng-click="customer()"]').click();
    })
    it("Validate Customer login successfully", () => {
        cy.get('#userSelect').select(2);
        //cy.get('#userSelect').scrollTo('bottom', {ensureScrollable : false});
        //cy.get('[value="2"]').click({force:true});
        cy.get('.btn').contains('Login').click();
        cy.get('[ng-click="deposit()"]').click();
        cy.get('[placeholder="amount"]').type('#10,000,000');
        cy.get('.btn-default').click();
        cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
        cy.get('.btn-lg').contains('Transactions').click();
        cy.get('tr>td[class="ng-binding"]').contains('10000000').should('include.text', '10000000');

        cy.go(-1);
        cy.get('select > option[label="1004"]').click({ force: true }).should('have.attr', 'label', '1004')
        //cy.get('#accountSelect').select(0).should('have.value', 'number:1004');
    });

    it("Validate Customer login successfully", () => {
        cy.get('#userSelect').select(4);
        cy.get('.btn').contains('Login').click({force:true});
        cy.get('.btn-lg').contains('Deposit').click({force:true});
        cy.get('.form-control').type(1000)
        cy.get('.btn-default').click()
        cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type(300);
        cy.get('.btn-default').click();
        cy.get('.logout').click()
    });
})
