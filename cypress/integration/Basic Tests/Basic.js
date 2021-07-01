///    <reference types="cypress" />

var culture 

describe('Basic Tests', () => {

    before(function(){
        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
        // var s ='culture'
        cy.fixture('culture').then((culture) => {
            for(var language in culture){
                var lang = cy.get('#country')
                if(lang.should('have.value', language)){
                    var s=culture[language].toString().toLowerCase()
                    cy.fixture(s).then((langg)=>{
                        this.langg=langg
                    })
                    cy.log(this.langg)
                    break
                }
            };
          })
    })

    beforeEach( () => {
        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
    });

    it('Fixture Load & Test', function() { 
        // cy.get('#country').select('German')
        // cy.wait(1000)
        // cy.get('#country').select('Hindi')
        // if(cy.get('#country').should('have.value', '02')){
        //     cy.log("Hindiiiiiii")
        // }
        // else if(cy.get('#country').should('have.value', '01')){
        //     cy.log("English")
        // }
        cy.log(culture)
        // cy.get('#pagetype').should('have.value',culture.pageType)
        // cy.get('#pagetype').should('not.have.value',culture.pageTitle)
        // expect(this.english, 'fixture in the test context').to.deep.equal(english)
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