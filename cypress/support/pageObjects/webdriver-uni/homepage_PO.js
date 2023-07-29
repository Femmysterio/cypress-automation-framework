class HomePage_PO {
    visitHomepage() {
        cy.visit(cypress.env("https://www.webdriveruniversity.com"))
    }

    clickOn_ContactUs_button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }
}
export default HomePage_PO