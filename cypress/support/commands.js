// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///    <reference types="cypress" />

Cypress.Commands.add('Home_Page_Loading_Test',(obj)=>{
    cy.wait(1000)
    cy.get('#pagetype').should('have.text', obj.pageType)    
})

Cypress.Commands.add('Testing_First_Name_Block',(obj)=>{
    cy.wait(1000)
    cy.log('**checking field name**')
    cy.get('#fname').should('have.text', obj.firstName)
    cy.wait(1000)
    cy.log('**checking placeholder**')
    cy.get('#firstName').invoke('attr', 'placeholder').should('contain', obj.firstnameplaceholder)
    cy.wait(1000)
    cy.log('**checking no. of inputs**')
    cy.get('#firstName').should('have.length', 1)
    cy.wait(1000)
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=firstName]').invoke('val').should('be.empty')
    cy.wait(1000)
    cy.log('Enter the first name')
    cy.get('#firstName').type(obj.userfirstname, { delay: 100 })
    cy.wait(1500)   
})

Cypress.Commands.add('Testing_Last_Name_Block',(obj)=>{
    cy.wait(1000)
        cy.log('**checking field name**')
        cy.get('#lname').should('have.text', obj.LastName)
        cy.wait(1000)
        cy.log('**checking placeholder**')
        cy.get('#lastName').invoke('attr', 'placeholder').should('contain', obj.lastnameplaceholder)
        cy.wait(1000)
        cy.log('**checking no. of inputs**')
        cy.get('#lastName').should('have.length', 1)
        cy.wait(1000)
        cy.log('**checking if it is empty or not**')
        cy.get('input[id=lastName]').invoke('val').should('be.empty')
        cy.wait(1000)
        cy.log('Enter the last name')
        cy.get('#lastName').type(obj.userlastname, { delay: 100 })
        cy.wait(1500)

})

Cypress.Commands.add('Testing_Last_Name_Block',(obj)=>{

})