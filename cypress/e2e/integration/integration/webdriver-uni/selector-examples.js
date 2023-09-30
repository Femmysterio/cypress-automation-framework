/// <reference types="Cypress" />
describe("Selector examples", () => {
    it("Examples of selectors via webdriverUni contact-us page", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');

        //By tag name
        cy.get('input')

        //By attributes name and value
        cy.get("input[name='first_name']")

        //By id
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //By Xpath
        cy.xpath("//input[@name='first_name']")
    })
})