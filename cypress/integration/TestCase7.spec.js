import { MainPage } from "../pages/MainPage"
import { CommonPage } from "../pages/CommonPage"
import { MenuPage } from "../pages/MenuPage"
import * as urls from '../testData/urls'
import { StoreLocatorPage } from "../pages/StoreLocatorPage"

describe('Test Case 7', () => {
    const mainPage = new MainPage()
    const commonPage = new CommonPage()
    const storeLocatorPage = new StoreLocatorPage()
    const menuPage = new MenuPage()

    it('Cart is empty by default', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Menu button')
        commonPage.clickButton(mainPage.menuButton, '/menu')

        cy.log('Verify that cart is empty')
        cy.get(menuPage.cartButton).should('have.text', 'Open the cart. There are 0 items in cart.')

        cy.log('Click on Cart')
        cy.get(menuPage.cartButton).click()
        commonPage.clickButtonXpath(menuPage.selectStoreButton, '/menu/store-locator')

        cy.log('Search for 1670 Broadway Denver')
        cy.get(storeLocatorPage.searchTermInput).type(`1670 Broadway Denver{enter}`).should('have.value', '1670 Broadway Denver')
    })
})