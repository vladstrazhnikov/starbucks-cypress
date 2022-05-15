import { MainPage } from "../pages/MainPage"
import { StoreLocatorPage } from "../pages/StoreLocatorPage"

describe('Test Case 3', () => {
    const mainPage = new MainPage()
    const storeLocatorPage = new StoreLocatorPage()

    it('Search of address', () => {
        mainPage.navigate()
        cy.title()
            .should('contain', mainPage.title)

        // Click on Find a store link
        cy.get(storeLocatorPage.findStoreBtnElem)
            .should('be.visible')
            .click()
        cy.url()
            .should('include', storeLocatorPage.storeLocatorPageUrl)
        cy.title()
            .should('contain', storeLocatorPage.title);

        // Enter Denver in search imput and press Enter
        cy.get(storeLocatorPage.searchTermInputElem)
            .should('be.visible')
            .type(`Denver{enter}`)
            .should('have.value', 'Denver')
        // Verify list of cards
        cy.get(storeLocatorPage.cardBtnElem)
            .should('be.visible')
            .its('length')
            .should('eq', 50)
        cy.get(storeLocatorPage.cardTitleElem)
            .first()
            .should('be.visible')
            .and('have.text', storeLocatorPage.firstCardTitle)
        cy.get('[data-e2e=locationCardList]').scrollTo('bottom')
        cy.get(storeLocatorPage.cardTitleElem)
            .last()
            .should('be.visible')
            .and('have.text', storeLocatorPage.lastCardTitle)

        // Click on 1670 Broadway card
        cy.get(storeLocatorPage.cardListElem).scrollTo('top')
        cy.get(storeLocatorPage.broadwayBtnElem)
            .should('be.visible')
            .click()
            .should('be.focused')
        // Verify that mark is appeared on map
        cy.get(storeLocatorPage.broadwayMarkElem)
            .should('be.visible')
    })
})