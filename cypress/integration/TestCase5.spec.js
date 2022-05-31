import { MainPage } from "../pages/MainPage"
import { MenuPage } from "../pages/MenuPage"
import { CommonPage } from "../pages/CommonPage"
import * as urls from '../testData/urls'
import * as options from '../testData/options'

describe('Test Case 5', () => {
    const mainPage = new MainPage()
    const menuPage = new MenuPage()
    const commonPage = new CommonPage()

    it('Customize tea', () => {
        cy.visit(urls.baseUrl)

        cy.log('Click on Menu button')
        commonPage.clickButton(mainPage.menuButton, '/menu')

        cy.log('Click on Iced teas link')
        commonPage.clickButton(menuPage.icedTeasLink, '/menu/drinks/iced-teas')

        cy.log('Click on Iced Black Tea link')
        commonPage.clickButton(menuPage.icedBlackTeaLink, '/menu/product/457/iced')

        cy.log('Click on Trenta size tea radiobutton')
        cy.xpath(menuPage.sizeOption).click()
        cy.get(menuPage.trentaItem).should('be.checked')

        cy.log('Choose flavor')
        menuPage.chooseFlavor(menuPage.addBrownSugarSyropButton)
        cy.get(menuPage.flavorsButton).should('contain.text', '1 pump(s) Brown Sugar Syrup')

        cy.log('Choose juice')
        cy.get(menuPage.juiceOptionsButton).click();
        cy.get(menuPage.appleJuiceSelect).select(options.lightAppleJuice)
        cy.get(menuPage.appleJuiceSelect).should('contain.text', options.lightAppleJuice)
        cy.get(menuPage.peachJuiceBlendSelect).select(options.peachJuiceBlend)
        cy.get(menuPage.peachJuiceBlendSelect).should('contain.text', options.peachJuiceBlend)
        cy.get(menuPage.doneButton).click()
        cy.get(menuPage.juiceOptionsButton).should('contain.text', options.lightAppleJuice)
        cy.get(menuPage.juiceOptionsButton).should('contain.text', options.peachJuiceBlend)
    })
})