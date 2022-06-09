import { MainPage } from "../pages/MainPage"
import { CommonPage } from "../pages/CommonPage"
import { GiftCardsPage } from "../pages/giftCardsPage"
import { GiftCardPage } from "../pages/giftCardPage"
import * as urls from '../testData/urls'

describe('Test Case 8', () => {
    const mainPage = new MainPage()
    const commonPage = new CommonPage()
    const giftCardsPage = new GiftCardsPage()
    const giftCardPage = new GiftCardPage()

    let recipientName = 'name1'
    let recipientEmail = 'email1@example.com'
    let senderName = 'name2'
    let senderEmail = 'email2@example.com'

    it('Possibile to send $100 Gift Card', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Gift Cards button')
        commonPage.clickButtonXpath(mainPage.giftCardButton, '/gift')
        commonPage.clickButtonXpath(giftCardsPage.giftCard, '/gift/873070557')

        cy.get(giftCardPage.giftAmount).select('$100').should('have.value', '100')
        giftCardPage.fillInRequiredFields(recipientName, recipientEmail, senderName, senderEmail)

        cy.get(giftCardPage.recipientName).should('have.value', recipientName)
        cy.get(giftCardPage.recipientEmail).should('have.value', recipientEmail)
        cy.get(giftCardPage.senderName).should('have.value', senderName)
        cy.get(giftCardPage.senderEmail).should('have.value', senderEmail)

        cy.get(giftCardPage.giftCheckout).click()
        cy.get(giftCardPage.signInButton).should('be.visible')
        cy.get(giftCardPage.continueAsGuestButton).should('be.visible')

    })
})