describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/');

    const userNameInput = cy.contains('User name').parent().find('input');
    userNameInput.type('John Doe{enter}');

    userNameInput.clear().type('Jane Doe');
    cy.contains('Create').click();

    cy.get('li').should('have.length', 4);
  });
});
