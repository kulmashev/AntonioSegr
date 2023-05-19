describe('goodtest', () => {
    it('google', () => {
        cy.visit('https://google.com');  
        cy.get('#APjFqb').input(love)  
    });
});