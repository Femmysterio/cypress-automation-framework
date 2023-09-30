/// <reference types="Cypress" />

describe("Verify All Automation practice via CodenBox-Auto", () => {

    it("Calculate and assert the total price for the courses", () => {
        var userDetails = [];
        let numb = 0;

        cy.visit("https://codenboxautomationlab.com/");
        cy.get('[href="http://codenboxautomationlab.com/practice/"]').click();

        cy.get('#product td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++) {
                if(Number(userDetails)) {
                numb += Number(userDetails[i])
                }
                //cy.log(userDetails[i])
            }
            cy.log("Find total price to be: " + numb)
            cy.get(':nth-child(12) > :nth-child(3)').should("contain", 297)
        })
    })
})