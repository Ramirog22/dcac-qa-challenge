class CartPage {
    // Locators
    get cartItems() {
        return cy.get('[data-test="inventory-item"]');
    }

    get cartItemNames() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    get cartItemPrices() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get cartItemQuantities() {
        return cy.get('[data-test="item-quantity"]');
    }

    // Metodos
    verifyCartContent(expectedProducts) {
        this.cartItems.should("have.length", expectedProducts.length);

        expectedProducts.forEach((product, index) => {
            this.cartItemQuantities.eq(index).should("have.text", "1");
            this.cartItemNames.eq(index).should("have.text", product.name);
            this.cartItemPrices.eq(index).should("have.text", product.price);
        })
    }
}

export default new CartPage();