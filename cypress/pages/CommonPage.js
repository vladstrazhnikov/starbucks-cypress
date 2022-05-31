export class CommonPage {
    clickButton(locator, url) {
        cy.get(locator).click()
        cy.url().should('include', url)
    }

    clickButtonXpath(locator, url) {
        cy.xpath(locator).click()
        cy.url().should('include', url)
    }
}