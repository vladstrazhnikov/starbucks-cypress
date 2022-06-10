import { CreateAccountPage } from "../pages/CreateAccountPage"
import { MainPage } from "../pages/MainPage"
import * as colours from "../testData/colours"
import * as validationMessages from '../testData/validationMessages'
import * as urls from '../testData/urls'

describe('Test Case 1', () => {
    const mainPage = new MainPage()
    const createAccountPage = new CreateAccountPage()

    it('Impossible to Sign up with empty fields', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click "Join now" button')
        cy.xpath(mainPage.joinButton).click()
        cy.url().should('include', '/account/create')

        cy.log('Submit with empty fields')
        cy.get(createAccountPage.createAccountButton).click()

        cy.log('First name field')
        //cy.get(createAccountPage.firstNameInput).parent().should('have.css', 'box-shadow', colours.borderColour)
        cy.get(createAccountPage.firstNameInput).should('be.focused')

        cy.log('Last name field')
        cy.get(createAccountPage.lastNameInput).parent().should('have.css', 'box-shadow', colours.borderColour)

        cy.log('Email field')
        cy.get(createAccountPage.emailAddressInput).parent().should('have.css', 'box-shadow', colours.borderColour)

        cy.log('Validation messages')
        cy.get(createAccountPage.firstNameValidationHint).contains(validationMessages.firstNameValidationHint).should('be.visible')
        cy.get(createAccountPage.lastNameValidationHint).contains(validationMessages.lastNameValidationHint).should('be.visible')
        cy.get(createAccountPage.emailAddressValidationHint).contains(validationMessages.emailAddressValidationHint).should('be.visible')
        for (let key in validationMessages.passwordValidationHints)
            cy.get(createAccountPage.passwordValidationHint).contains(validationMessages.passwordValidationHints[key]).should('be.visible')
        cy.get(createAccountPage.termsAndConditionsValidationHint).contains(validationMessages.agreementValidationHint).should('be.visible')

        cy.log('Password field')
        cy.get(createAccountPage.passwordInput).parent().should('have.css', 'box-shadow', colours.borderColour)

        cy.log('TERMS OF USE checkbox')
        cy.get(createAccountPage.termsAndConditionsCheckbox).should('not.be.checked')
    })
})