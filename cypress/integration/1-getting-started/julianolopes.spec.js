describe('Accessibility on Juliano Lopes', () => {
    beforeEach(() => {
        cy.visit('https://julianolopes.com.br')
    })
    it('Verify if exists skiplinks section', () => {
        cy.get('#skiplinks').should('exist').children().should('contain', 'Ir para o conteúdo principal')
    })

    it('Verify if exists just one h1 on home page', () => {
        cy.get('h1').should('have.length', 1)
    })
    it('Verify home page h1 text', () => {
        cy.get('h1').should('have.text', 'Independentemente de qualquer coisa, continue desenvolvendo!')
    })
    it('Verify if exists courses link on main menu', () => {
        cy.get('nav ul li a').should('contain', 'Inscrição Curso Desenvolvendo')

    })
    it('Verify if exists a form to subscrition page', () => {
        cy.get('nav button').click()
        cy.contains('Inscrição Curso Desenvolvendo').click()
        cy.get('form').should('exist')
    })
})