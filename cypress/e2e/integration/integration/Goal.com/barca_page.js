/// <reference types="cypress" />

describe("Test Barca page through Goal", () => {

    it.only("Should be able to open Barca page via Goal", () => {
        cy.visit('https://www.goal.com/en-ng');
        //cy.get('[data-testid="top-navigation-items-list"] > :nth-child(5) > :nth-child(1)').click({force:true})
        cy.xpath( "//*[text()='La Liga']" ).trigger('mouseover', {force:true})
        cy.get('a[href="https://www.goal.com/en-ng/team/barcelona/agh9ifb2mw3ivjusgedj7c3fe"]').click({force:true})
        //cy.xpath("//a[text()='Barcelona'][1]").click(1, {force:true})
    });
    
})
