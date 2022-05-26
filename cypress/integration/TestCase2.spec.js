import { MainPage } from "../pages/MainPage"
import { SignInPage } from "../pages/SignInPage"
import * as validationMessages from '../testData/validationMessages'
import * as urls from '../testData/urls'

describe('Test Case 2', () => {
    const mainPage = new MainPage()
    const signInPage = new SignInPage()

    it('Impossible to sign in with invalid credentials', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Sign in button')
        cy.xpath(mainPage.signInButton).click()
        cy.url().should('include', '/account/signin')

        cy.log('Enter invalid credentials')
        cy.get(signInPage.usernameInput).type('test', { force: true }).should('have.value', 'test')
        cy.get(signInPage.passwordInput).type('pass').should('have.value', 'pass')
        cy.get(signInPage.signInButton).click()

        cy.log('Notification is appeared')
        cy.get(signInPage.signInUnsuccessfulNotification).contains(validationMessages.signInUnsuccessfulNotificationText)
    })
})