import { MainPage } from "../pages/MainPage"
import { SignInPage } from "../pages/SignInPage"

describe('Test Case 2', () => {
    const mainPage = new MainPage()
    const signInPage = new SignInPage()

    it('Impossible to sign in with invalid credentials', () => {
        mainPage.navigate()
        cy.title()
            .should('contain', mainPage.title);

        // Click on Sign in button
        cy.get(mainPage.signInBtnElem)
            .should('be.visible')
            .click()
        cy.url().should('include', signInPage.signInPageUrl)
        cy.title()
            .should('contain', signInPage.title);

        // Enter invalid credentials
        cy.get(signInPage.usernameElem)
            .should('be.visible')
            .type('test', { force: true })
            .should('have.value', 'test')
        cy.get(signInPage.passwordElem)
            .should('be.visible')
            .type(`pass{enter}`)
            .should('have.value', 'pass')
        //cy.get(signInPage.signinBtnElem).click()

        // Notification is appeared
        cy.get(signInPage.signinUnsuccessfulNotification)
            .should('be.visible')
            .contains(signInPage.signinUnsuccessfulNotificationText)

    })
})