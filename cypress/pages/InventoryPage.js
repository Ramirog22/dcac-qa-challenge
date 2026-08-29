class InventoryPage {
    // Locators
    get inventoryItems() {
        return cy.get('[data-test="inventory-item"]');
    }

    get shoppingCartLink() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get shoppingCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]');
    }

    // Locators internos de cada tarjeta de producto (para uso dentro de `.within()`)
    get itemNameSelector() {
        return '[data-test="inventory-item-name"]';
    }

    get itemPriceSelector() {
        return '[data-test="inventory-item-price"]';
    }

    get addToCartButtonSelector() {
        return '[data-test^="add-to-cart"]';
    }

  // Acciones
addProductsToCart(count = 3) {
    const selectedProducts = [];

    for (let i = 0; i < count; i++) {
        this.inventoryItems.eq(i).within(() => {
        cy.get(this.itemNameSelector).invoke("text").then((name) => {
            cy.get(this.itemPriceSelector).invoke("text").then((price) => {
                selectedProducts.push({ name: name.trim(), price: price.trim() });
            });
        });
        cy.get(this.addToCartButtonSelector).click();
        });
    }

    return cy.wrap(selectedProducts);
}

    goToCart() {
        this.shoppingCartLink.click();
    }
}

export default new InventoryPage();