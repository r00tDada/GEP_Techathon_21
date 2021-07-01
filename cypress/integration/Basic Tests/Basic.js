///    <reference types="cypress" />

describe('Basic Tests', () => {

    beforeEach(function(){

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

    it('Home Page Loading Test', function() {
        cy.wait(1000)
        cy.get('#pagetype').should('have.text',this.cul.pageType)
        cy.wait(1000)
    });

    it('Testing First Name Block',function(){
        cy.wait(1000)
        cy.get('#fname').should('have.text',this.cul.firstName)

    });

    it('Testing Last Name Block',function(){
        cy.wait(1000)
        cy.get('#lname').should('have.text',this.cul.LastName)
    });

    it('Testing Email',function(){
        cy.wait(1000)
        cy.get('#email').should('have.text',this.cul.Email);
    });

    it('Testing Mobile',function(){
        cy.wait(1000)
        cy.get('#mobile').should('have.text',this.cul.Mobile);
    });

    it('Testing Institute',function(){
        cy.wait(1000)
        cy.get('#inst').should('have.text',this.cul.Institute);
    });
    // it('Testing Graduation Year',function(){
    //     cy.wait(1000)
    //     cy.get('#Gradyr').should('have.text',this.cul.Gradyr);
    // });
    // it('Testing Project Category',function(){
    //     cy.wait(1000)
    //     cy.get('#pcat').should('have.text',this.cul.Projectcat);
    // });
    // it('Testing Institute',function(){
    //     cy.wait(1000)
    //     cy.get('#inst').should('have.text',this.cul.Institute);
    // });
    // it('Testing Institute',function(){
    //     cy.wait(1000)
    //     cy.get('#inst').should('have.text',this.cul.Institute);
    // });
  })