describe('Automation Exercise', () => {
  it('login ae', () => {

    //login realizdo com usuario disponibilizado para o exercicio//
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="login-email"]') .type('teste2021@teste.com.br')
    cy.get('[data-qa="login-password"]') .type('teste')
    cy.get('[data-qa="login-button"]') .click()

    //realizando busca e incluindo produto no carrinhho
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.location ('pathname') .should('equal',"/products")
    cy.get('#search_product') .type('Premium Polo T-Shirts')
    cy.get('#submit_search') .click()
    cy.get('.productinfo > .btn') .click ()
    cy.get('body') .should('contain',"Your product has been added to cart.")
    cy.get('u') .click()
    
    //validando produto no carrinho
    cy.location ('pathname') .should('equal',"/view_cart")
    cy.get('body') .should('contain','Premium Polo T-Shirts')

  })
})