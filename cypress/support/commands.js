Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Fabricio')        
    cy.get('#lastName').type('Michelato')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

})