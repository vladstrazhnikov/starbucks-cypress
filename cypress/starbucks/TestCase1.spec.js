import { CreateAccountPage } from "../pages/CreateAccountPage"
import { MainPage } from "../pages/MainPage"

describe('Test Case 1', () => {
    const mainPage = new MainPage()
    const createAccountPage = new CreateAccountPage()

    it('Impossible to Sign up with empty fields', () => {
        mainPage.navigate()
        cy.title()
            .should('contain', mainPage.title);

        // Click on "Join now" button
        cy.get(mainPage.joinBtnElem)
            .should('be.visible')
            .click()
        cy.url().should('include', createAccountPage.createAccountPageUrl)
        cy.title()
            .should('contain', createAccountPage.title);

        // Submit with empty fields
        cy.get(createAccountPage.submitBtnElem)
            .should('be.visible')
            .click()

        // First name field
        // how to check rgb without borders?
        // What is another way to get div?
        cy.get(createAccountPage.firstNameElem).parent()
            .should('have.css', 'box-shadow', createAccountPage.boxShadow)
        cy.get(createAccountPage.firstNameElem)
            .should('be.focused')

        // Last name field
        cy.get(createAccountPage.lastNameElem).parent()
            .should('have.css', 'box-shadow', createAccountPage.boxShadow)

        // Email field
        cy.get(createAccountPage.emailAddressElem).parent()
            .should('have.css', 'box-shadow', createAccountPage.boxShadow)

        // Validation messages
        for (let validationMessage of createAccountPage.validationMessages) {
            cy.get(createAccountPage.validationMessagesElem)
                .contains(validationMessage)
                .should('be.visible')
        }

        // Password field
        cy.get(createAccountPage.passwordElem).parent()
            .should('have.css', 'box-shadow', createAccountPage.boxShadow)

        // TERMS OF USE checkbox
        cy.get(createAccountPage.termsAndConditionsElem)
            .should('not.be.checked')
    })
})