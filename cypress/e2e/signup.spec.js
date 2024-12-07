describe('Sign Up Page', () => {
    it('should register a user and save to localStorage', () => {

      cy.visit('http://127.0.0.1:49735/signup.html');
  
      cy.get('#email').type('bahar@gmcil.com');
      cy.get('#firstname').type('bahar');
      cy.get('#lastname').type('shariatifar');
      cy.get('#birthdate').type('1998-01-01');
      cy.get('#phone').type('+989106411084');
      cy.get('#password').type('password123');
      cy.get('#password-confirm').type('password123');
  
      cy.get('#signup-form').submit();
  
      cy.window().then((window) => {
        const users = JSON.parse(window.localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === 'bahar@gmcil.com');
        expect(user).to.exist;
        expect(user.email).to.equal('bahar@gmcil.com');
        expect(user.firstname).to.equal('bahar');
      });
  
      cy.url().should('include', 'login.html');
    });
  });
  