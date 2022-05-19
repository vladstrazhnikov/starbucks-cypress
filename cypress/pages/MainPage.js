export class MainPage {
    baseURL = 'https://www.starbucks.com/'
    title = 'Starbucks Coffee Company'

    joinBtnElem = 'div[class = "ml6 flex items-center"] > a[class = "sb-button sb-button--positive sb-button--black"]'
    signInBtnElem = 'div[class = "ml6 flex items-center"] > a[class = "sb-button sb-button--default sb-button--black mr3"]'
    
    navigate(baseURL){
        cy.visit(this.baseURL)
    }
}

//export default new Main()