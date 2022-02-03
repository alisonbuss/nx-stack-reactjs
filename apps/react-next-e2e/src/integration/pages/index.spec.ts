describe('react-next', () => {
  beforeEach(() => cy.visit('/'));

  it('Should return true when title component was correct', () => {
    cy.contains('h1', 'ReactJS Structure').should('to.have.length', 1);
  });

  it('Should return true when text component was correct', () => {
    cy.contains('p', 'A ReactJS + Next.js structure.').should(
      'to.have.length',
      1,
    );
  });
});
