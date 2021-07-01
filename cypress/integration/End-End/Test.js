///    <reference types="cypress" />

describe('End to End Tests', () => {

    before(function(){

        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
        
        cy.fixture('culture').then((culture) => {

            for(var language in culture){

                var selectedLanguage = cy.get('#country')

                if(selectedLanguage.should('have.value', language)){

                    cy.fixture(culture[language].toString().toLowerCase()).then((currentLanguage)=>{
                        this.cul=currentLanguage
                    })

                    break
                }
            }
        })
    })

    beforeEach(function(){
        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
    });

    it('Entire Workflow Check for Selected Language', function() {
        cy.get('#pagetype').should('have.text',this.cul.pageType)
        cy.get('#firstName').type('Test User')
        cy.get('#lastName').type('@GEP')
        cy.get('.form-control#email').type('test_user@gep.com')
        cy.get('.form-control#mobile').type('+918780658153')
        cy.get('#address').type('Work From Home')
        cy.get('.form-select').select('2022')
        cy.get('#cat2').click()
        cy.get('#cc-number').type('Localization Automation Testing')
        cy.get('#save-info').click()
        cy.get('#sub').click()
        cy.on('window:confirm',()=>{
            done()
        })
    });

  })