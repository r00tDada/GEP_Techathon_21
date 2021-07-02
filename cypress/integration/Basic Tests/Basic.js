///    <reference types="cypress" />


const cul = require('../../fixtures/culture.json')

var lan = []
var lang = []

for (var index in cul) {
    lan.push(index)
    lang.push(cul[index])
}

lang.forEach((value) => {
    describe('Basic Tests for ' + value, () => {

        beforeEach(function () {
            cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")
            cy.get('#country').select(value)
            cy.fixture(value.toString().toLowerCase()).then((currentLanguage) => {
                this.cul = currentLanguage

            })

        })
        // it('Home Page Loading Test', function () {
        //     cy.Home_Page_Loading_Test(this.cul)
        // });

        // it('Testing First Name Block', function () {
        //     cy.Testing_First_Name_Block(this.cul)
        // });

        // it('Testing Last Name Block', function () {
        //     cy.Testing_Last_Name_Block(this.cul)
        // });

        // it('Testing Email Block', function () {
        //     cy.Testing_Email_Block(this.cul)
        // });

        // it('Testing Mobile Block', function () {
        //     cy.Testing_Mobile_Block(this.cul)

        // });
        // it('Testing Graduation Year', function () {
        //     cy.Testing_Graduation_Year(this.cul)
        // });

        // it('Testing Institute Block', function () {
        //     cy.Testing_Institute_Block(this.cul)
        // });
        // it('Testing Project Category and radio', function () {
        //     cy.Testing_Project_Category_and_radio(this.cul)
        // });
        // it('Testing Project Idea Block', function () {
        //     cy.Testing_Project_Idea_Block(this.cul)
        // });
        // it('Checking Save this information block', function () {
        //     cy.Checking_Save_this_information_block(this.cul)
        // });

        it('Checking Submit Button', function () {
            cy.Checking_Submit_Button(this.cul)
        });

    });
});