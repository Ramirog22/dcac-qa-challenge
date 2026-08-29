class LoginPage {
    // Locators
    get usernameInput() {
        return cy.get('[data-test="username"]');
    }

    get passwordInput() {
        return cy.get('[data-test="password"]');
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    // Acciones
    visit() {
        cy.visit("/");
    }

    typeUsername(username) {
        this.usernameInput.clear().type(username);
    }

    typePassword(password) {
        this.passwordInput.clear().type(password);
    }

    clickLogin() {
        this.loginButton.click();
    }

    // Metodos
    login(username, password) {
        this.visit();
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();