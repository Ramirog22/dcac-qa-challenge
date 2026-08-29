import loginPage from "../../pages/LoginPage";
import inventoryPage from "../../pages/InventoryPage";
import cartPage from "../../pages/CartPage";
import checkoutPage from "../../pages/CheckoutPage";
import checkoutData from "../../fixtures/checkoutUser.json";

describe("Sauce Demo - Flujo de Compra E2E Completo", () => {
    it("Debe completar el flujo de compra desde la selección hasta la confirmación (Pasos 1 al 8)", () => {
        const username = Cypress.env("sauceUser");
        const password = Cypress.env("saucePassword");

        // Inicio de sesión previo
        loginPage.login(username, password);
        cy.url().should("include", "/inventory.html");

        // Seleccionar al menos 3 productos y agregarlos al carrito
        inventoryPage.addProductsToCart(3).then((expectedProducts) => {
            inventoryPage.shoppingCartBadge.should("have.text", "3");

            // Acceder al carrito de compras
            inventoryPage.goToCart();
            cy.url().should("include", "/cart.html");

            // Validar datos
            cartPage.verifyCartContent(expectedProducts);

            // Checkout
            checkoutPage.startCheckout();
            cy.url().should("include", "/checkout-step-one.html");

            // Completar los datso para la compra
            checkoutPage.fillInformation(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode);
            cy.url().should("include", "/checkout-step-two.html");

            // Finalizar
            checkoutPage.finishCheckout();
            cy.url().should("include", "/checkout-complete.html");

            // Validar el mensaje final
            checkoutPage.completeHeader
            .should("be.visible")
            .and("have.text", "Thank you for your order!");
        })
    })
})