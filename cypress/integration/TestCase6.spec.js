import { MainPage } from "../pages/MainPage"
import { CommonPage } from "../pages/CommonPage"
import { OurCoffeePage } from "../pages/OurCoffeePage"
import * as urls from '../testData/urls'

describe('TC 6', () => {
    const mainPage = new MainPage()
    const commonPage = new CommonPage()
    const ourCoffeePage = new OurCoffeePage()

    it('Search for a coffee', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Our coffee link')
        commonPage.clickButtonXpath(mainPage.ourCoffeeButton, '/coffee/')

        cy.log('Click on Browse our coffees link')
        commonPage.clickButtonXpath(ourCoffeePage.browseOurCoffeesButton, '/product-overview')

        cy.log('Select Dark Roast checkbox')
        cy.get(ourCoffeePage.productRoastTab).click()
        cy.xpath(ourCoffeePage.darkRoastProduct).click()
        cy.get(ourCoffeePage.darkRoastCheckbox).should('be.checked')
        cy.wait(1000) // In other case next checkbox won't be checked

        cy.log('Select Latin America checkbox')
        cy.get(ourCoffeePage.productOriginTab).click()
        cy.xpath(ourCoffeePage.latinAmericaProduct).click()
        cy.get(ourCoffeePage.latinAmericaCheckbox).should('be.checked')
        cy.wait(1000)

        cy.log('Select Whole Bean checkbox')
        cy.get(ourCoffeePage.productFormatTab).click()
        cy.xpath(ourCoffeePage.wholeBeanProduct).click()
        cy.get(ourCoffeePage.wholeBeanCheckbox).should('be.checked')

        cy.log('Click on Italian Roast product item')
        commonPage.clickButton(ourCoffeePage.italianRoastWholeBeanProduct, '/products/italian-roast-whole-bean')
        cy.get(ourCoffeePage.titleContainer).contains('Italian Roast Whole Bean')
    })

})
