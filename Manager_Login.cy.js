describe('Banking Project Manager', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
    });

    it('Add New Customer', () => {
        cy.get('button[ng-click="addCust()"]').click();
        cy.get('input[ng-model="fName"]').type('John');
        cy.get('input[ng-model="lName"]').type('Doe');
        cy.get('input[ng-model="postCd"]').type('12345');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Customer added successfully');
        });
    });

    it('Create Account', () => {
        cy.get('button[ng-click="openAccount()"]').click();
        cy.get('#userSelect').select('John Doe');
        cy.get('#currency').select('Dollar');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Account created successfully');
        });
    });

    it('Delete Account', () => {
        cy.get('button[ng-click="showCust()"]').click();
        cy.get('input[ng-model="searchCustomer"]').type('John');
        cy.get('button[ng-click="deleteCust(cust)"]').click();
        cy.get('input[ng-model="searchCustomer"]').should('not.have.value', 'John');
    });
});