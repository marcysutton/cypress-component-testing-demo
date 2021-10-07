describe('Accessibility Testing with Cypress-Axe', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:8080')
        cy.injectAxe()
    })

    // Basic usage
    it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
        cy.checkA11y()
    })
})