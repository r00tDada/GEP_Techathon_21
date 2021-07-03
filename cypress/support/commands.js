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

Cypress.Commands.add('Home_Page_Loading_Test', (obj) => {
    
    cy.get('#pagetype').should('have.text', obj.pageType)
    
})

Cypress.Commands.add('Testing_First_Name_Block', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#fname').should('have.text', obj.firstName)
    
    cy.log('**checking placeholder**')
    cy.get('#firstName').invoke('attr', 'placeholder').should('contain', obj.firstnameplaceholder)
    
    cy.log('**checking no. of inputs**')
    cy.get('#firstName').should('have.length', 1)
    
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=firstName]').invoke('val').should('be.empty')
    
    cy.log('Enter the first name')
    cy.get('#firstName').type(obj.userfirstname, { delay: 100 })
    
})

Cypress.Commands.add('Testing_Last_Name_Block', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#lname').should('have.text', obj.LastName)
    
    cy.log('**checking placeholder**')
    cy.get('#lastName').invoke('attr', 'placeholder').should('contain', obj.lastnameplaceholder)
    
    cy.log('**checking no. of inputs**')
    cy.get('#lastName').should('have.length', 1)
    
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=lastName]').invoke('val').should('be.empty')
    
    cy.log('Enter the last name')
    cy.get('#lastName').type(obj.userlastname, { delay: 100 })
    
})

Cypress.Commands.add('Testing_Email_Block', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#email').should('have.text', obj.Email);
    
    cy.log('**checking placeholder**')
    cy.get('#emailid').invoke('attr', 'placeholder').should('contain', obj.emailplaceholder)
    
    cy.log('**checking no. of inputs**')
    cy.get('#emailid').should('have.length', 1)
    
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=emailid]').invoke('val').should('be.empty')
    
    cy.log('Enter the email')
    cy.get('#emailid').click().type(obj.emailid, { delay: 100 })
    
});

Cypress.Commands.add('Testing_Mobile_Block', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#mobile').should('have.text', obj.Mobile);
    
    cy.log('**checking placeholder**')
    cy.get('#mobileno').invoke('attr', 'placeholder').should('contain', obj.mobileplaceholder)
    
    cy.log('**checking no. of inputs**')
    cy.get('#mobileno').should('have.length', 1)
    
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=mobileno]').invoke('val').should('be.empty')
    
    cy.log('Enter the email')
    cy.get('#mobileno').type(obj.mobileno, { delay: 100 })
    
});

Cypress.Commands.add('Testing_Institute_Block', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#inst').should('have.text', obj.Institute);
    
    cy.log('**checking placeholder**')
    cy.get('#instname').invoke('attr', 'placeholder').should('contain', obj.instplaceholder)
    
    cy.log('**checking no. of inputs**')
    cy.get('#instname').should('have.length', 1)
    
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=instname]').invoke('val').should('be.empty')
    
    cy.log('Enter the email')
    cy.get('#instname').type(obj.instname, { delay: 100 })
    
});
Cypress.Commands.add('Testing_Graduation_Year', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#gradyr').should('have.text', obj.Gradyr)
    
    cy.log('**checking inputs year**')
    cy.get('#gradyear').find('option').then(options => {
        const yr = [...options].map(o => o.text)
        expect(yr).to.deep.eq([obj.selectyr1, obj.selectyr2, obj.selectyr3, obj.selectyr4])
    })
    
    cy.log("Selecting graduation yrs")
    cy.get('#gradyear').select(obj.selectyr2)
    
});
Cypress.Commands.add('Testing_Project_Category_and_radio', (obj) => {
    
    cy.log('**checking field name**')
    cy.get('#pcat').should('have.text', obj.Projectcat);
    
    cy.log('**checking category name**')
    cy.get('.pcattype').find('label').then(options => {
        const cat = [...options].map(o => o.innerHTML.replace(/&nbsp;/g,' '))
        expect(cat).to.deep.eq([obj.category1, obj.category2, obj.category3])
    })
    
    cy.log('**Initially checking radio button')
    cy.get('#inpcat1').should('be.visible').should('not.be.checked')
    cy.get('#inpcat2').should('be.visible').should('be.checked')
    cy.get('#inpcat3').should('be.visible').should('not.be.checked')
    
    cy.log('Checking radio button ' + obj.category3)
    cy.get('#inpcat3').click()
    cy.get('#inpcat1').should('be.visible').should('not.be.checked')
    cy.get('#inpcat2').should('be.visible').should('not.be.checked')
    cy.get('#inpcat3').should('be.visible').should('be.checked')
    
});
Cypress.Commands.add('Testing_Project_Idea_Block', (obj) => {
    
    cy.get('#idea').should('have.text', obj.idea);
    
    cy.log('**checking no. of inputs**')
    cy.get('#cc-number').should('have.length', 1)
    
    cy.log('**checking if it is empty or not**')
    cy.get('input[id=cc-number]').invoke('val').should('be.empty')
    
    cy.log('Enter the project idea')
    cy.get('#cc-number').type(obj.projectidea, { delay: 100 })
    
});

Cypress.Commands.add('Checking_Save_this_information_block', (obj) => {
    
    cy.get('#check').should('have.text', obj.check);
    
    cy.get('#save-info').click()
    
    cy.get('#save-info').uncheck()
    
});
Cypress.Commands.add('Checking_Submit_Button', (obj) => {
    
    cy.get('#sub').should('have.text', obj.submit);
    
    cy.get('#sub').click()
    
});

Cypress.Commands.add('Workflow_Check', (obj) => {
    cy.get('#pagetype').should('have.text',obj.pageType)
    cy.get('#firstName').type(obj.userfirstname)
    cy.get('#lastName').type(obj.userlastname)
    cy.get('#emailid').type(obj.emailid)
    cy.get('#mobileno').type(obj.mobileno)
    cy.get('#instname').type(obj.instname)
    cy.get('#gradyear').select(obj.selectyr2)
    cy.get('#cat2').click()
    cy.get('#cc-number').type(obj.projectidea)
    cy.get('#save-info').click()
    cy.get('#sub').click()
    cy.on('window:confirm',()=>{})
});


