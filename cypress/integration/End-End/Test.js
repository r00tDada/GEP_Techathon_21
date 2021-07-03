///    <reference types="cypress" />
const cul = require('../../fixtures/culture.json')

var lan = []
var lang = []

for (var index in cul) {
    lan.push(index)
    lang.push(cul[index])
}

lang.forEach((value) => {
    describe('End to End Test for ' + value, () => {

        beforeEach(function () {
            cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
            cy.get('#country').select(value)
            cy.fixture(value.toString().toLowerCase()).then((currentLanguage) => {
                this.cul = currentLanguage

            })

        })

        it('Entire Workflow Check', function() {
            cy.Workflow_Check(this.cul)
        });

        
    });
});

    