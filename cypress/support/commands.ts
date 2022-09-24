Cypress.Commands.add("loginUI",()=>{
    cy.visit('/')
    cy.get('[name="userName"]').type('habibwebdev')
    cy.get('[name="password"]').type('1')
    cy.get('[aria-label="Sign in"]').click()
    cy.wait(5000)
    cy.get('[class="pull-right"]').should('be.visible')
})