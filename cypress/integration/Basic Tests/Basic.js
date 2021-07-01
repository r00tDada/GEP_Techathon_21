///    <reference types="cypress" />

const english = require('../../fixtures/english.json') 

describe('Basic Tests', () => {

    before( () => {
        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
        cy.fixture('english.json').as('english')
    });

    it('Fixture Load & Test', function() {
        cy.get('[id="country"]').click().get('[value='001']').click()
        // cy.get('select').click()
        // expect(this.lang, 'fixture in the test context').to.deep.equal(selectlang)
    })

    // it('Title Test', function() {
    //     cy.title().should('contain',"Automate")
    //     cy.title().should('not.contain','Cypress')
    // });

    // it('Home Page Loading Test', function() {
    //     cy.get('#pageTitle').should('contain',this.english.pageTitle)
    //     cy.get('#pageType').should('contain',this.english.pageType)
    //     cy.get('.lead').should('contain','GEP')
    // });

  })