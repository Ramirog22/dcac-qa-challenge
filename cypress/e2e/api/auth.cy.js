describe('FakeStoreAPI - Inicio de sesion y manejo del Token', () => {
    it('Caso #1: Login exitoso', () => {
        // Variables
        const validUsername = Cypress.env("validUsername");
        const validPassword = Cypress.env("validPassword");

        cy.loginApi(validUsername, validPassword).then((response) => {
            
            // Validaciones
            expect(response.status).to.be.oneOf([200, 201]);
            expect(response.body).to.have.property("token");
            expect(response.body.token).to.be.a("string").and.not.be.empty;

            // Guardamos el token
            Cypress.env("authToken", response.body.token);
        })
    })

    it('Caso #2: Login fallido', () => {
        // Varaibles
        const invalidUsername = Cypress.env("invalidUsername");
        const invalidPassword = Cypress.env("invalidPassword");

        cy.loginApi(invalidUsername, invalidPassword).then((response) => {
            // Validaciones
            expect(response.status).to.be.oneOf([400, 401]);
        })
    })
})