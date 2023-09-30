/// <reference types="Cypress" />

describe("Verify All Automation practice via CodenBox-Auto", () => {
    beforeEach(() => {
        cy.visit("https://codenboxautomationlab.com/");
        cy.get('[href="http://codenboxautomationlab.com/practice/"]').click();
    });

    it("Verify radio buttons", () => {
        // cy.visit("https://codenboxautomationlab.com/");
        // cy.get('[href="http://codenboxautomationlab.com/practice/"]').click();
        cy.get('[for="radio1"]').click()
        cy.get('[for="radio2"]').click()
    });

    it("Verify Dynamic dropdown", () => {
        // cy.visit("https://codenboxautomationlab.com/");
        // cy.get('[href="http://codenboxautomationlab.com/practice/"]').click();
        cy.get('#autocomplete').type('NIGERIA')
    });

    it("Verify Static dropdown", () => {
        //cy.get('#dropdown-class-example').select(3);
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
        //cy.get('#dropdown-class-example').select('API').contains('API')
    });

    it("Verify Checkbox", () => {
        cy.get('#checkBoxOption2').check()
    });

    it("Verify Switch Window", () => {
        cy.get('#openwindow').click()
    });

    it("Verify Switch Tab", () => {
        cy.get('#opentab').click()
    });

    it("Verify Alert box work correctly", () => {
        cy.get('#name').type('Oluwatosin')
        cy.get('#alertbtn').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello Oluwatosin, share this practice page who love to learn automation')
        })
    });

    it("Validate Confirm box work correctly", () => {
        cy.get('#name').type('Oluwatosin')
        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str) => {
            return true;//
        })
    });

    it("Validate the Hide box work correctly", () => {
        cy.get('#hide-textbox').click()
    });

    it("Validate the Show box work correctly", () => {
        cy.get('#show-textbox').click()
    });

    it("Mouse scroll and click Reload button", () => {
        //cy.get('#mousehover').scrollIntoView().invoke('removeAttr', 'target').click({force : true})
        //cy.get('#mousehover').trigger('mouseover', {button : 0}).click({force: true})
        cy.get('#mousehover').trigger('mouseover')
        cy.get('.mouse-hover-content').contains('Reload').click({force : true})     
    });

    it("Mouse scroll and click Top button", () => {
        //cy.get('#mousehover').scrollIntoView().invoke('removeAttr', 'target').click({force : true})
        //cy.get('#mousehover').trigger('mouseover', {button : 0}).click({force: true})
        cy.get('#mousehover').trigger('mouseover')
        cy.get('.mouse-hover-content').contains('Top').click({force : true})     
    });

    // it("Handling CodenBox-Auto Iframe & Modal", () => {
    //     cy.get('#courses-iframe').invoke('removeAttr', 'target').click({force : true})

    //     cy.get('#courses-iframe').then($iframe => {
    //         const body = $iframe.contents()
    //         cy.wrap(body).as('iframe')
    //     })
    //     cy.get('@iframe').find('.wp-block-table').contains('Contact Us').click()

    //     cy.get('#courses-iframe').its('0.contentDocument.body').find('[name="nf-field-1"]').type('OLUWAFEMI ORUNGBEJA')
    //     cy.get('#courses-iframe').its('0.contentDocument.body').find('#nf-field-2').type('femi17@gmail.com')
    //     cy.get('#courses-iframe').its('0.contentDocument.body').find('#nf-field-3').type('I am a Software Engineer, both Manual and Automation')
        
    // })

    it("Handling CodenBox-Auto Iframe & Modal", () => {
        cy.get('#courses-iframe').invoke('removeAttr', 'target').click({force : true})

        cy.get('#courses-iframe').then($iframe => {
            const body = $iframe.contents()
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('.wp-block-table').contains('Contact Us').click()

        //Using Alias command
        cy.get('#courses-iframe').its('0.contentDocument.body').as('iframe').find('[name="nf-field-1"]').type('OLUWAFEMI ORUNGBEJA')
        cy.get('@iframe').find('#nf-field-2').type('femi17@gmail.com')
        cy.get('@iframe').find('#nf-field-3').type('I am a Software Engineer, both Manual and Automation')
        cy.get('@iframe').find('#nf-field-4').click()
        cy.get('@iframe').find('.nf-response-msg').should('include.text', 'Form submitted successfully')
        
    })
})