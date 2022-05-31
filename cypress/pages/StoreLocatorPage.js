export class StoreLocatorPage {
    searchTermInput = '[data-e2e=searchTermInput]'
    broadwayButton = 'button[aria-label="Select 1670 Broadway"]'
    filterButton = '[data-e2e=filterButton]'
    driveThruItem = '[data-e2e=locatorFilterItem--DT]'
    applyButton = '[data-e2e=applyButton]'
    locationList = '[data-e2e="locationList"]>article'

    applySingleFilter(option) {
        cy.get(this.filterButton).click()
        cy.get(option).click()
        cy.get(this.applyButton).click()
    }
} 
