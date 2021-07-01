///    <reference types="cypress" />
describe('Basic Tests', () => {
    beforeEach(()=>{
        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/Blunder's%20Pride.html")
    });

    it('Tab Title Test', () => {
        cy.title().should('contain',"Automate")
        cy.title().should('not.contain','Cypress')
    });

    it('Home Page Loading Test',()=>{
        cy.get('#pageType').should('equal','Registration')
    });

  })