/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit ('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title ().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, testeTeste, teste, teste'
        cy.get('#firstName')
        .should('be.visible')
        .type('Fabricio')
        .should('have.value', 'Fabricio')
        cy.get('#lastName')
        .should('be.visible')
        .type('Michelato')
        .should('have.value', 'Michelato')
        cy.get('#email')
        .should('be.visible')
        .type('teste@teste.com')
        .should('have.value', 'teste@teste.com')
        cy.get('#open-text-area')
        .should('be.visible')
        .type(longText, { delay: 0 })
        .should('have.value', longText)     
      
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible') 
    })
   
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName')
        .should('be.visible')
        .type('Fabricio')
        .should('have.value', 'Fabricio')
        cy.get('#lastName')
        .should('be.visible')
        .type('Michelato')
        .should('have.value', 'Michelato')
        cy.get('#email')
        .should('be.visible')
        .type('testeteste.com')
        cy.get('#open-text-area')
        .should('be.visible')
        .type('Teste')
          
      
        cy.get('button[type="submit"]').click()

        cy.get('.error')
        .should('be.visible') 
        })

    it('campo de telefone continua vazio caso seja digitado valor não-numérico', function(){

        cy.get('#phone')
        .type('adcdef')
        .should('have.value', '')

    })

    it('campo telefone se torna obrigatório', function () {

        cy.get('#firstName').type('Fabricio')        
        cy.get('#lastName').type('Michelato')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone-checkbox').click ()
        cy.get('#open-text-area').type('Teste')        
        cy.get('button[type="submit"]').click()
        cy.get('.error')
        .should('be.visible')

    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('#firstName')
        .type('Fabricio')
        .should('have.value', 'Fabricio')
        .clear()  
        .should('have.value','')      
        cy.get('#lastName')
        .type('Michelato')
        .should('have.value', 'Michelato')
        .clear() 
        .should('have.value','')
        cy.get('#email')
        .type('teste@teste.com')
        .should('have.value', 'teste@teste.com')
        .clear() 
        .should('have.value','')
        cy.get('#phone')
        .type(11946832459)
        .should('have.value', '11946832459')
        .clear() 
        .should('have.value','')
        cy.get('#open-text-area')
        .type('Teste')        
        cy.get('button[type="submit"]').click()
        cy.get('.error')
        .should('be.visible')

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        
        cy.get('button[type="submit"]').click()

        cy.get('.error')
        .should('be.visible')
        
    })

    it.only('envia o formuário com sucesso usando um comando customizado', function () {

        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible') 

    }) 

    })
