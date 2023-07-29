/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("found header text " + headerText)
            expect(headerText).is.eq("Makeup")
        })
    });

    it.only("Validate properties of the contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach

        //Embedded commands (Closure)
    });
})