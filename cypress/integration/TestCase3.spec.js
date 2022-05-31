import { MainPage } from "../pages/MainPage"
import { StoreLocatorPage } from "../pages/StoreLocatorPage"
import * as urls from '../testData/urls'
import * as storeLocatorCards from '../testData/storeLocatorCards'

describe('Test Case 3', () => {
    const mainPage = new MainPage()
    const storeLocatorPage = new StoreLocatorPage()

    it('Search of address', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Find a store link')
        mainPage.clickButton(mainPage.findStoreButton, '/store-locator')

        cy.log('Enter Denver in search input and press Enter')
        cy.get(storeLocatorPage.searchTermInput).type(`Denver{enter}`).should('have.value', 'Denver')

        cy.log('Click on 1670 Broadway card')
        cy.get(storeLocatorPage.broadwayButton).should('be.visible').click().should('be.focused')
    })
})