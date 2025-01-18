import credentials from './credentials';

describe('Site - Automation Exercise', () => {

  it("Login Invalido", () => {

    // Login invalido realizado com as credencias disponibilizadas para o desafio //
    cy.visit('https://www.automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type(credentials.validUsername);
    cy.get('[data-qa="login-password"]').type(credentials.invalidPassword);
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Your email or password is incorrect!').should('be.visible');

  })
  
  it('Login Valido, adicionando, verificando e finalizando compra', () => {

    // Login realizado com usuário disponibilizado para o exercício //
    cy.visit('https://www.automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type(credentials.validUsername);
    cy.get('[data-qa="login-password"]').type(credentials.validPassword);
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
    
    // Checkout e finalizando compra //
    cy.contains('Proceed To Checkout').click();
    cy.contains('Address Details').should('be.visible');
    cy.get('a[href="/payment"]').click();
    cy.location('pathname').should('equal', "/payment");
    cy.get('[data-qa="name-on-card"]') .type('Desafio Automação - Pedro M Rocha');
    cy.get('[data-qa="card-number"]') .type ('123456789');
    cy.get('[data-qa="cvc"]') .type ('123');
    cy.get('[data-qa="expiry-month"]') .type('12');
    cy.get('[data-qa="expiry-year"]') .type('2024');
    cy.contains('Pay and Confirm Order').should('be.visible');
    cy.get('[data-qa="pay-button"]') .click ();
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    cy.get('[data-qa="continue-button"]') .click();    

  })
})