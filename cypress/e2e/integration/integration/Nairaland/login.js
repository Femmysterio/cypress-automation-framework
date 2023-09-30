/// <reference types="Cypress" />

describe("Test login page via nairaland", () => {
   const username = 'Anonymous2000';
   const password = 'selenze';

   beforeEach(() => {
      cy.visit('https://www.nairaland.com/');
      cy.get('[href="/login"]').click();
   })

   it("Should be able to login successfully via nairaland", () => {


      //login with password
      cy.get('[name="login"]').type(username);
      cy.get('[name="password"]').type(password);
      //cy.get(':nth-child(5) > tbody > :nth-child(2) > .w > form > [type="submit"]').click()
      cy.get('input[value="Login"]').click()

   });

   it("Should not be able to login successfully via nairaland as all fields are required", () => {
      cy.visit('https://www.nairaland.com/');
      cy.get('[href="/login"]').click();

      //login with password
      cy.get('[name="login"]').type(username);
      //cy.get(':nth-child(5) > tbody > :nth-child(2) > .w > form > [type="submit"]').click()
      cy.get('input[value="Login"]').click();
      cy.get('h2').contains('Wrong Username or Password');

   });

   it.only("Validate profile edit successfully", () => {
      cy.get('.w').find('[name="login"]').type(username);
      cy.get('.w').find('[type="password"]').type(password);
      cy.get('[value="Login"]').click();

      cy.get('[href="/editprofile"]').click();

      cy.get('[name="birthday"]').select(17);
      //cy.get('[name="birthday"]').scrollTo('bottom', {ensureScrollable : false});
      //cy.get('[value="17"]').click({force:true});
      cy.get('[name="birthmonth"]').select('April');
      cy.get('[name="birthyear"]').select('1989');
   })
})