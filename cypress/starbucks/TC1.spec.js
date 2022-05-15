import { CreateanAccount } from "../pages/createanAccountPage"
import { Main } from "../pages/main"

describe('TC 1: Impossible to Sign up with empty fields', () => {
    const main = new Main()
    const createanAccount = new CreateanAccount()

    it('Open Starbucks site', () => {
        main.navigate()
    })

    it('Click on Join button', () => {
        cy.fixture('createanAccount').then(createanAccountPage => {
            createanAccount.join() // Click on "Join now" button
            cy.url().should('include', createanAccountPage.url)
        })
    })

    it('Submit with empty fields', () => {
        createanAccount.submit()

        //First name field
        cy.contains(createanAccount.firstNameValidationMessage)
            .should('be.visible')
            .should('contain.text', createanAccount.firstNameValidationMessage)
        // what is have.css?
        // how to check rgb without borders?
        // What is another way to get div?
        cy.get(createanAccount.firstNameElem).parent()
            .should('have.css', 'box-shadow', createanAccount.boxShadow)
        cy.get(createanAccount.firstNameElem)
            .should('be.focused')

        //Last name field
        cy.contains(createanAccount.lastNameValidationMessage)
            .should('be.visible')
            .should('contain.text', createanAccount.lastNameValidationMessage)
        cy.get(createanAccount.lastNameElem).parent()
            .should('have.css', 'box-shadow', createanAccount.boxShadow)

        //Email address field
        cy.contains(createanAccount.emailAddressValidationMessage)
            .should('be.visible')
            .should('contain.text', createanAccount.emailAddressValidationMessage)
        cy.get(createanAccount.emailAddressElem).parent()
            .should('have.css', 'box-shadow', createanAccount.boxShadow)

        //Password field
        for (let passwordValidationMessage of createanAccount.passwordValidationMessages) {
            cy.contains(passwordValidationMessage)
                .should('be.visible')
        }
        cy.get(createanAccount.passwordElem).parent()
            .should('have.css', 'box-shadow', createanAccount.boxShadow)

        //TERMS OF USE checkbox
        cy.get(createanAccount.termsAndConditionsElem)
            .should('not.be.checked')
        cy.contains(createanAccount.termsOfUseValidationMessage)
            .should('be.visible')
    })
})