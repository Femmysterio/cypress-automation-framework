/// <reference types="cypress" />

describe("Test interactions with various elements via UltimateQA", () => {
    beforeEach(() => {
        cy.visit('https://ultimateqa.com/automation/');
        cy.get('[href="../simple-html-elements-for-automation/"]').click()
    })

    it("Validate clicking link ID via 'Interactions with simple elements' page ", () => {
       
        //click this button using "ID"
        cy.get('#idExample').click()
    });

    it("Validate clicking via link Text through 'Interactions with simple elements' page ", () => {
    
        //click this button using "Link Text"
        cy.get('.et_pb_blurb_description').contains('Click me using this link text!').click()
    });

    it("Validate clicking via className through 'Interactions with simple elements' page ", () => {
    
        //click this button using "Class Name"
        cy.get('.buttonClass').click()
    });

    it("Validate clicking via Name through 'Interactions with simple elements' page ", () => {
    
        //click this button using "Name"
        cy.get('[name="button1"]').click()
    });

    
    it("Validate 'Click me' button through 'Interactions with simple elements' page ", () => {
    
        //click on the 'click me' button
        cy.get('[href="/button-success"]').contains('Click Me').click()
        cy.get('.entry-title').should('have.text', 'Button success')
    });

    it("Validate 'Click link' link through 'Interactions with simple elements' page ", () => {
    
        //click on the 'click link' link
        cy.get('#simpleElementsLink').click()
        cy.get('.entry-title').should('have.text', 'Link success')
    });

    it("Validate 'email me' through 'Interactions with simple elements' page ", () => {
    
        //fill the 'email me' form
       cy.get('#et_pb_contact_name_0').type('Oluwafemi')
       cy.get('#et_pb_contact_email_0').type('femi17@gmail.com')
       cy.get('.et_pb_contact_submit').click()
       cy.get('.et-pb-contact-message').should('contain', 'Thanks for contacting us')
    });

    it("Validate 'Radio buttons' through 'Interactions with simple elements' page ", () => {
    
        //fill the 'Radio buttons' form
        cy.get('[value="male"]').check()
        cy.get('[value="female"]').check()
        cy.get('[value="other"]').check()    
    });

    it("Validate 'Check boxes' through 'Interactions with simple elements' page ", () => {
    
        //fill the 'Checkboxes' form
          cy.get('[value="Bike"]').check()
          cy.get('[value="Car"]').check()
    });

    it("Validate 'Drop down list' through 'Interactions with simple elements' page ", () => {
    
        //Select options from the 'Dropdown' list
        cy.get('select').select('Opel')
        cy.get('select').select('Audi')     
    });

    it("Validate 'Check boxes' through 'Interactions with simple elements' page ", () => {
    
        //Select options from the 'Dropdown' list
        cy.get('[href="#"]').contains('Tab 1').click()
        cy.get('.et_pb_tab_content').should('contain', 'tab 1 content')
        
    });

    it("Validate 'Tab' through 'Interactions with simple elements' page ", () => {
    
        //Select options from the 'Tab' list
        cy.get('tbody>tr>td').contains('Automation')
        cy.get('tbody>tr>td').contains('Quality Assurance Engineer')
    });

    it("Validate 'Common Scenarios' through 'Interactions with simple elements' page ", () => {
    
        //Click on the 'Go to login page' button
        cy.get('[href="https://courses.ultimateqa.com/users/sign_in"]').click()
    });

    it("Validate 'Common Scenarios' through 'Interactions with simple elements' page ", () => {
    
        //Click on the 'Go to login page' button
        cy.get('div>h4>span').contains('Highlight me').dblclick()
        //cy.get('.et_pb_module_header').contains('Highlight me').dblclick
    });
})