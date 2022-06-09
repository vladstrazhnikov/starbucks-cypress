export class MenuPage {
    icedTeasLink = '[data-e2e="Iced Teas"]'
    icedBlackTeaLink = '[data-e2e="Iced Black Tea"]'
    sizeOption =  '//*[@data-e2e="size-selector"]//fieldset/div[4]'
    trentaItem = '#Trenta' 
    flavorsButton = '[data-e2e="option-Flavors"]'
    addBrownSugarSyropButton = '[aria-labelledby="BrownSugarSyrupVisibleLabel"]'
    doneButton = '[data-e2e="doneFrap"]'
    juiceOptionsButton = '[data-e2e="option-Juice Options"]'
    appleJuiceSelect = '#apple-juice-customization-option'
    peachJuiceBlendSelect = '#peach-juice-blend-customization-option'
    cartButton = '[data-e2e=open-cart-button]'
    selectStoreButton = '//*[@class="buttonContainer pt5 "]/button[2]'

    chooseFlavor(option) {
        cy.get(this.flavorsButton).click()
        cy.get(option).click()
        cy.get(this.doneButton).click()
    }
}
