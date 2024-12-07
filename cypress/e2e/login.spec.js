describe('Login Page', () => {
    beforeEach(() => {

      cy.window().then((window) => {
        const mockUser = {
          email: 'bahar@gmcil.com',
          firstname: 'bahar',
          lastname: 'shariatifar',
          birthdate: '1998-01-01',
          phone: '+989106411084',
          password: 'password123',
        };
  
        const users = [mockUser];
        window.localStorage.setItem('users', JSON.stringify(users));
      });
    });
  
    it('should log in with correct credentials', () => {

      cy.visit('http://127.0.0.1:49735/login.html');
  

      cy.get('#login-email').type('bahar@gmcil.com');
      cy.get('#login-password').type('password123');
  

      cy.get('#login-form').submit();
  

      cy.url().should('include', 'dashboard.html');
    });
  
    it('should show an error for invalid credentials', () => {

      cy.visit('http://127.0.0.1:49735/login.html');
  

      cy.get('#login-email').type('invalid@gmcil.com');
      cy.get('#login-password').type('wrongpassword');
  

      cy.get('#login-form').submit();
  

      cy.contains('Login failed').should('be.visible');
    });
  });
  