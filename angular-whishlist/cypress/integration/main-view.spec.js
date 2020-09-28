describe('ventana principal', () => {
    it('tiene encabezado correcto y en español por defecto', () =>{
        cy.visit('https://localhost:4200');
        cy.contains('angular-whishlist');
        cy.get('h1 b').should('contain', 'HOLAes');
    });
});