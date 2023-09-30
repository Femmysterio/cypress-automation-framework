/// <reference types="cypress" />

describe("iterate over elements", () => {

    it("Calculate the total amount of products", () => {
        cy.visit('https://magento.softwaretestingboard.com/');   
        
        cy.get('.price-wrapper').find('.price').invoke('text').as('itemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkPrice => {

            var itemsPriceTotal = 0;
            var itemPrice = $linkPrice.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log("sale price items: " + itemsPriceTotal)
            expect(itemsTotal).to.equal(236)
        })    
    });

    it.only("Login information for all haircare products", () => {
        cy.visit('https://magento.softwaretestingboard.com/');

        cy.get(".product-item-name .product-item-link").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });

    });
})
