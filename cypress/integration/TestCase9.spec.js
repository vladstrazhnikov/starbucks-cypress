import { MainPage } from "../pages/MainPage"
import { CommonPage } from "../pages/CommonPage"
import { OurCoffeePage } from "../pages/OurCoffeePage"
import { StoreLocatorPage } from "../pages/StoreLocatorPage"
import * as urls from '../testData/urls'

describe('Test Case 9', () => {
    const mainPage = new MainPage()
    const commonPage = new CommonPage()
    const ourCoffeePage = new OurCoffeePage()
    const storeLocatorPage = new StoreLocatorPage()

    it('Search of location where to buy', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Our coffee link')
        commonPage.clickButtonXpath(mainPage.ourCoffeeButton, '/coffee/')

        cy.log('Click on Browse our coffees link')
        commonPage.clickButtonXpath(ourCoffeePage.browseOurCoffeesButton, '/product-overview')

        cy.log('Click on "Where to buy" button')
        commonPage.clickButtonXpath(ourCoffeePage.whereToBuyButton, '/store-locator')

        cy.log('In "Select Product" dropdown list select Coffee option')
        cy.get(storeLocatorPage.productTypeButton).click()
        cy.get(storeLocatorPage.coffeeItem).click()
        cy.get(storeLocatorPage.productTypeButton).should('contain.text', 'Coffee')

        cy.log('In "Select Format" dropdown list select "Whole Bean" option')
        cy.get(storeLocatorPage.formatButton).click()
        cy.get(storeLocatorPage.wholeBeanItem).click()
        cy.get(storeLocatorPage.formatButton).should('contain.text', 'Whole Bean')

        cy.log('In "Select Roast" dropdown list select "Medium Roast" option')
        cy.get(storeLocatorPage.roastButton).click()
        cy.get(storeLocatorPage.mediumRoastItem).click()
        cy.get(storeLocatorPage.roastButton).should('contain.text', 'Medium Roast')

        cy.log('In "Select Variety" dropdown list select "House Blend" option')
        cy.get(storeLocatorPage.varietyButton).click()
        cy.get(storeLocatorPage.houseBlendItem).click()
        cy.get(storeLocatorPage.varietyButton).should('contain.text', 'House Blend')

        cy.log('Click on "Buy Now" button')
        cy.xpath(storeLocatorPage.buyNowButton).click()

        cy.log('In search input enter "Atlanta" location and click "enter"')
        cy.get(storeLocatorPage.locationTextbox).clear().type(`atlanta{enter}`)
        cy.wait(3000)
        cy.get(storeLocatorPage.listOfSellers).children().contains('Atlanta')        
    })
})