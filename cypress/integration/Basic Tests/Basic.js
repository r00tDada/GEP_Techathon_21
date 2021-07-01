///    <reference types="cypress" />

describe('Basic Tests', () => {

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

    it('Home Page Loading Test', function() {
        cy.get('#pagetype').should('have.text',this.cul.pageType)
    });

  })