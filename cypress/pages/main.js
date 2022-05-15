export class Main {
    baseURL = 'https://www.starbucks.com/'
    
    navigate(baseURL){
        cy.visit(this.baseURL)
    }
}

//export default new Main()