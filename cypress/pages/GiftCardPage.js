export class GiftCardPage {
    recipientName = '[data-e2e="recipientName"]'
    recipientEmail = '[data-e2e="recipientEmail"]'
    senderName = '[data-e2e="senderName"]'
    senderEmail = '[data-e2e="senderEmail"]'
    giftCheckout = '[data-e2e="giftCheckout"]'
    signInButton = '[data-e2e="signInButton"]'
    continueAsGuestButton = '[data-e2e="continueAsGuestButton"]'
    giftAmount = '#amount'

    fillInRequiredFields(recipientName, recipientEmail, senderName, senderEmail) {
        cy.get(this.recipientName).parent().type(recipientName)
        cy.get(this.recipientEmail).parent().type(recipientEmail)
        cy.get(this.senderName).parent().type(senderName)
        cy.get(this.senderEmail).parent().type(senderEmail)
    }
}