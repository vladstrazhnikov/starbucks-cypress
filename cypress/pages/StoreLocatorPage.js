export class StoreLocatorPage {
    storeLocatorPageUrl = '/store-locator'
    title = 'Store Locator: Starbucks Coffee Company'

    findStoreBtnElem = '.sb-textLink.text-noUnderline.text-semibold.sb-findAStorePin.inline-block.mr6'
    searchTermInputElem = '[data-e2e=searchTermInput]'

    cardListElem = '[data-e2e=locationCardList]'
    cardTitleElem = '.sb-heading.text-xxs.text-bold'
    cardBtnElem = '[data-e2e=cardButton]'
    firstCardTitle = '16th & Tremont'
    lastCardTitle = 'Safeway Denver 1463'

    broadwayBtnElem = 'button[aria-label="Select 1670 Broadway"]'
    broadwayMarkElem = '[style="width: 48px; height: 59px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -24px; top: -45px; z-index: 11;"] > img'
}