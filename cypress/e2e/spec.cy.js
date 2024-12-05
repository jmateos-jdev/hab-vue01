describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    //Test sin campos
    cy.get('button[id="login-button"]').click()
    cy.get('#error-message').should('be.visible').and('contain', 'Por favor, ingrese un correo electrónico y una contraseña')

    //test error desaparece luego de 3 segundos
    cy.wait(4000)
    cy.get('#error-message').should('not.exist')

    //test solo email
    cy.get('input[type="email"]').clear().type('joaquin.mateos@jdev.com.ar', {delay: 100})
    cy.get('button[id="login-button"]').click()
    cy.get('#error-message').should('be.visible').and('contain', 'Por favor, ingrese un correo electrónico y una contraseña')

    //test error desaparece luego de 3 segundos
    cy.wait(4000)
    cy.get('#error-message').should('not.exist')

    //test solo password
    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"]').clear().type('123123', {delay: 100})
    cy.get('button[id="login-button"]').click()
    cy.get('#error-message').should('be.visible').and('contain', 'Por favor, ingrese un correo electrónico y una contraseña')
    
    //test error desaparece luego de 3 segundos
    cy.wait(4000)
    cy.get('#error-message').should('not.exist')

    //test credenciales invalidas
    cy.get('input[type="email"]').clear().type('test@test.com', {delay: 100})
    cy.get('input[type="password"]').clear().type('123123', {delay: 100})
    cy.get('button[id="login-button"]').click()
    cy.get('#error-message').should('be.visible').and('contain', 'Credenciales inválidas')

    //test error desaparece luego de 3 segundos
    cy.wait(4000)
    cy.get('#error-message').should('not.exist')


    //test credenciales validas
    cy.get('input[type="email"]').clear().type('joaquin.mateos@jdev.com.ar', {delay: 100})
    cy.get('input[type="password"]').clear().type('123123', {delay: 100})
    cy.get('button[id="login-button"]').click()

    cy.get('[data-testid="dashboard-title"]').should('be.visible')
  })
})