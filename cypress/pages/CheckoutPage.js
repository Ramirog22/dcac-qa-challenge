class CheckoutPage {
    // Locators 
    get checkoutButton() {
        return cy.get('[data-test="checkout"]');
    }

    get firstNameInput() {
        return cy.get('[data-test="firstName"]');
    }

    get lastNameInput() {
        return cy.get('[data-test="lastName"]');
    }

    get postalCodeInput() {
        return cy.get('[data-test="postalCode"]');
    }

    get continueButton() {
        return cy.get('[data-test="continue"]');
    }

    get finishButton() {
        return cy.get('[data-test="finish"]');
    }

    get completeHeader() {
        return cy.get('[data-test="complete-header"]');
    }

    // Acciones
    startCheckout() {
        this.checkoutButton.click();
    }

    // Metodos
    fillInformation(firstName, lastName, postalCode) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
        this.postalCodeInput.clear().type(postalCode);
        this.continueButton.click();
    }

    finishCheckout() {
        this.finishButton.click();
    }
}

export default new CheckoutPage();