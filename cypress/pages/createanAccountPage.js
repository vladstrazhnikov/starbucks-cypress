export class CreateanAccount {
    get joinBtnElem (){
        return cy.get('div[class = "ml6 flex items-center"] > a[class = "sb-button sb-button--positive sb-button--black"]')
    }

    get submitBtnElem (){
        return cy.get('.sb-frap')
    }

    firstNameElem = '#firstName'
    lastNameElem = '#lastName'
    emailAddressElem = '#emailAddress'
    passwordElem = '#password'
    termsAndConditionsElem = '#termsAndConditions'

    // Red border for fields
    boxShadow = 'rgb(214, 43, 31) 0px 0px 0px 2px'

    //Validation messages
    firstNameValidationMessage = 'Enter your first name'
    lastNameValidationMessage = 'Enter your last name'
    emailAddressValidationMessage = 'Please enter your email address.'
    passwordValidationMessages = [
        'From 8 to 25 characters',
        'At least one number',
        'At least one capital letter',
        'At least one lowercase letter',
        'At least one special character such as exclamation point or comma'
    ]
    termsOfUseValidationMessage = 'Please agree to the Terms of Use'

    join() {
        this.joinBtnElem.click()
    }

    submit() {
        this.submitBtnElem.click()
    }
}