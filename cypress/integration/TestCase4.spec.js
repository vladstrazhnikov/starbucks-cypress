import { CommonPage } from "../pages/CommonPage"
import { MainPage } from "../pages/MainPage"
import { StoreLocatorPage } from "../pages/StoreLocatorPage"
import * as urls from '../testData/urls'

describe('Test Case 4', () => {
    const mainPage = new MainPage()
    const storeLocatorPage = new StoreLocatorPage()
    const commonPage = new CommonPage()

    it('As a non-signed-in user I’m able to find 5 ‘Drive-Thru’ stores in Lockwood, MT, USA', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Find a store link')
        commonPage.clickButtonXpath(mainPage.findStoreButton, '/store-locator')

        cy.log('Filter Drive-thru option')
        storeLocatorPage.applySingleFilter(storeLocatorPage.driveThruItem)
        cy.get(storeLocatorPage.filterButton).contains('(1)')

        cy.log('Search for Lockwood, MT, USA')
        cy.get(storeLocatorPage.searchTermInput).type(`Lockwood, MT, USA{enter}`)
        cy.get(storeLocatorPage.locationList).its('length').should('eq', 5)
    })
})