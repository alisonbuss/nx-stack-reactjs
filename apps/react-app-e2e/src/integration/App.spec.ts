describe('react-app', () => {
  // beforeEach(() => cy.visit('/'));

  it('Should return true when title component was correct', () => {
    cy.visit('/home');

    cy.contains('Welcome to the ReactJS application!').should(
      'to.have.length',
      1,
    );
  });

  it('Should click on the contact menu item', () => {
    cy.visit('/home');

    cy.get('[data-cy=header-link-contact]').click();

    cy.contains('h2', 'Contact');
  });

  it('Should click on the about menu item', () => {
    cy.visit('/home');

    cy.get('[data-cy=header-link-about]').click();

    cy.contains('h2', 'About');
  });

  it('Should access page not found', () => {
    cy.visit('/');

    cy.contains('h2', 'Not Found!');
  });

  it('Should access page server error', () => {
    cy.visit('/error');

    cy.contains('h2', 'Server Error!');
  });
});
