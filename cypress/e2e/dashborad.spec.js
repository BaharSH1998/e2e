describe('Dashboard Page', () => {
    beforeEach(() => {
      // شبیه‌سازی داده‌های درون localStorage قبل از بارگذاری صفحه
      const mockUser = {
        email: 'bahar@gmcil.com',
        firstname: 'bahar',
        lastname: 'shariatifar',
        birthdate: '1998-01-01',
        phone: '+989106411084',
        password: 'password123',
      };
  
      
      const users = [mockUser];
      localStorage.setItem('users', JSON.stringify(users)); 
      
      localStorage.setItem('loggedInUser', 'bahar@gmcil.com'); 
      
    });
  
    it('should display user information and sign out', () => {

      cy.visit('http://127.0.0.1:49735/dashboard.html'); 
      
  

      cy.contains('Hello bahar!').should('be.visible'); 
      
      cy.contains('Current Date and Time:').should('be.visible'); 
      
  

      cy.get('#sign-out-button').should('be.visible');
  

      cy.get('#sign-out-button').click();
  

      cy.url().should('include', 'login.html');
  

      cy.window().then((window) => {
        const loggedInUser = window.localStorage.getItem('loggedInUser');
        expect(loggedInUser).to.be.null; 
        
      });
    });
  });
  