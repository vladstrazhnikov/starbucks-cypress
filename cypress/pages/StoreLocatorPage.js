export class StoreLocatorPage {
    searchTermInput = '[data-e2e=searchTermInput]'
    broadwayButton = 'button[aria-label="Select 1670 Broadway"]'
    filterButton = '[data-e2e=filterButton]'
    driveThruItem = '[data-e2e=locatorFilterItem--DT]'
    applyButton = '[data-e2e=applyButton]'
    locationList = '[data-e2e="locationList"]>article'
    productTypeButton = '[data-name="product_types"]'
    coffeeItem = '[data-value="187"]'
    formatButton = '[data-name="format"]'
    wholeBeanItem = '[data-value="63"]'
    roastButton = '[data-name="roast"]'
    mediumRoastItem = '[data-value="30"]'
    varietyButton = '[data-name="variety"]'
    houseBlendItem = '[data-value="390"]'
    buyNowButton = '//*[@ps-sku="00762111206046"]'
    locationTextbox = '.ps-map-location-textbox'
    listOfSellers = '#__ps-local-sellers_0'

    applySingleFilter(option) {
        cy.get(this.filterButton).click()
        cy.get(option).click()
        cy.get(this.applyButton).click()
    }
} 
