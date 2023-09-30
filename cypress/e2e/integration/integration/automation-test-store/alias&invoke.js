/// <reference types="cypress" />

describe("Alias and invoke", () => {

    it("Vaidate a specific hair care product", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("Vaidate product Thumbnail", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it("Calculate total of normal and sales products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     //cy.log($el.text()) //to output the result
        //     $el.text()
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;

            //For all Non-sale items
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items: " + itemsPriceTotal)
        }) 

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            
            //For all Sale items
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("sale price items: " + saleItemsPrice)
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(660.5)
        })
    })
})