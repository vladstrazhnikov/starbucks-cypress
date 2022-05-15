export class MainPage {
    baseURL = 'https://www.starbucks.com/'
    title = 'Starbucks Coffee Company'
    
    navigate(baseURL){
        cy.visit(this.baseURL)
    }
}

//export default new Main()