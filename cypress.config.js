const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    allowCypressEnv: true,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiBaseUrl: "https://fakestoreapi.com"
  }
});
