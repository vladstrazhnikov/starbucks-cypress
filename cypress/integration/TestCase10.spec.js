import { MainPage } from "../pages/MainPage"
import { CommonPage } from "../pages/CommonPage"
import { GiftCardsPage } from "../pages/giftCardsPage"
import * as urls from '../testData/urls'

describe('Test Case 10', () => {
    const mainPage = new MainPage()
    const commonPage = new CommonPage()
    const giftCardsPage = new GiftCardsPage()

    let firstGiftCard
    let secondGiftCard

    it('Gift cards verification', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Gift Cards button')
        commonPage.clickButtonXpath(mainPage.giftCardButton, '/gift')
        cy.get(giftCardsPage.carouselSlider).then(($el) => {
            firstGiftCard = $el.children()[0].textContent
        })

        commonPage.clickButtonXpath(giftCardsPage.seeAllButton, '/gift/category/featured')

        cy.xpath(giftCardsPage.firstGiftCard).then(($el) => {
            secondGiftCard = $el.text()
            expect(secondGiftCard).to.eq(firstGiftCard)
        })
    })
})