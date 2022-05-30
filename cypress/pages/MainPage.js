export class MainPage {
    joinButton = '//a[3][contains(@href, "/account/create")]'
    signInButton = '//a[2][contains(@href, "/account/signin")]'
    findStoreButton = '//a[1][contains(@href, "/store-locator")]'

    clickButton (locator, url) {
        cy.xpath(locator).click()
        cy.url().should('include', url)
    }
}