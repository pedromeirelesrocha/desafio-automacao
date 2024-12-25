import credentials from './credentials';

describe('Automation Exercise', () => {

  it("invalido", () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type('teste2021@teste.com.br');
    cy.get('[data-qa="login-password"]').type('teste');
    cy.get('[data-qa="login-button"]').click();
  
  })
  
  it('login > search > validation', () => {

    // Login realizado com usuário disponibilizado para o exercício //
    cy.visit('https://www.automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type(credentials.username);
    cy.get('[data-qa="login-password"]').type(credentials.password);
    cy.get('[data-qa="login-button"]').click();

    // Realizando busca e incluindo produto no carrinho //
    cy.get("[href='/products']").click();
    cy.location('pathname').should('equal', "/products");
    cy.get('#search_product').type('Premium Polo T-Shirts');
    cy.get('#submit_search').click();
    cy.get('a.add-to-cart').contains('Add to cart').click();
    cy.get('body').contains("Your product has been added to cart.");
    cy.get('u').contains("View Cart").click();
    
    // Validando produto no carrinho //
    cy.location('pathname').should('equal', "/view_cart");
    cy.get('.disabled').should('contain', '1');
    cy.get('body').should('contain', 'Premium Polo T-Shirts');
    cy.contains('Premium Polo T-Shirts').should('be.visible');
    cy.contains('Rs. 1500').should('be.visible');
    cy.contains('Proceed To Checkout').click();

  })
})