export class CreateAccountPage {
    createAccountPageUrl = '/account/create'
    title = 'Create a Starbucks Account: Starbucks Coffee Company'

    submitBtnElem = '.sb-frap'

    firstNameElem = '#firstName'
    lastNameElem = '#lastName'
    emailAddressElem = '#emailAddress'
    passwordElem = '#password'
    termsAndConditionsElem = '#termsAndConditions'
    validationMessagesElem = '.fieldStatus__text'

    // Red border for fields
    boxShadow = 'rgb(214, 43, 31) 0px 0px 0px 2px'

    //Validation messages
    validationMessages = [
        'Enter your first name',
        'Enter your last name',
        'Please enter your email address.',
        'From 8 to 25 characters',
        'At least one number',
        'At least one capital letter',
        'At least one lowercase letter',
        'At least one special character such as exclamation point or comma',
        'Please agree to the Terms of Use'
    ]
}