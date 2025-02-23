
/// <reference types = "cypress" />

it ('XYZ Banking Project', ()=> {

    
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    
    cy.get('button[ng-click="customer()"]').click();
    cy.get('#userSelect').select('Harry Potter');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome Harry Potter!!').should('be.visible');
    

    cy.get('button[ng-click="deposit()"]').click();
    cy.get('input[ng-model="amount"]').type('1000');
    cy.get('button[type="submit"]').click();
    cy.contains('Deposit Successful').should('be.visible');

        
    cy.get('button[ng-click="withdrawl()"]').click();
    cy.get('input[ng-model="amount"]').type('500');
    cy.get('button[type="submit"]').click();
    cy.contains('Transaction successful').should('be.visible');

        
    cy.get('button[ng-click="transactions()"]').click();

    cy.get('.logout').click()   

})
