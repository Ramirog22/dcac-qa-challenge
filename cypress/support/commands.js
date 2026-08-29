// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Command custom para el inicio de sesion 
Cypress.Commands.add("loginApi", (username, password) => {
    const baseUrl = Cypress.env("apiBaseUrl");

    return cy.request({
        method: "POST",
        url: `${baseUrl}/auth/login`,
        body: {
            username: username,
            password: password
        },
        failOnStatusCode: false // Esto es para poder testear casos con fallo y que cypress no bloquee todo al fallar la api
    })
});

// Command para obtener todos los productos
Cypress.Commands.add("getProductsApi", (options = {}) => {
    const baseUrl = Cypress.env("apiBaseUrl");

    return cy.request({
        method: "GET",
        url: `${baseUrl}/products`,
        failOnStatusCode: false,
        ...options
    })
})

// Command para crear un nuevo carrito
Cypress.Commands.add("createCartApi", (cartPayload, options = {}) => {
    const baseUrl = Cypress.env("apiBaseUrl");

    return cy.request({
        method: "POST",
        url: `${baseUrl}/carts`,
        body: cartPayload,
        failOnStatusCode: false,
        ...options
    })
})

// Command para actualizar un carrito existente
Cypress.Commands.add("updateCartApi", (cartId, cartPayload, options = {}) => {
    const baseUrl = Cypress.env("apiBaseUrl");

    return cy.request({
        method: "PUT",
        url: `${baseUrl}/carts/${cartId}`,
        body: cartPayload,
        failOnStatusCode: false,
        ...options
    })
})

// Command para eliminar un carrito
Cypress.Commands.add("deleteCartApi", (cartId, options = {}) => {
    const baseUrl = Cypress.env("apiBaseUrl");

    return cy.request({
        method: "DELETE",
        url: `${baseUrl}/carts/${cartId}`,
        failOnStatusCode: false,
        ...options
    })
})