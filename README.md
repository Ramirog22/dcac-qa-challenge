# QA Challenge - Ramiro Garbagna

Este repositorio tiene las respuestas a el desafio tecnico utilizando **Cypress** y **JavaScript**:
1. **Ejercicio 1 (API)** 
2. **Ejercicio 2 (UI)**

---

## Requisitos Previos

* **Node.js**: v18.0.0 o superior
* **npm**: v9.0.0 o superior

---

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Ramirog22/dcac-qa-challenge.git
   cd dcac-qa-challenge
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

---

## Configuración de Entorno

Crear el archivo `cypress.env.json` utilizando el .example de ejemplo y completar los campos

```json
{
  "validUsername": "Usuario-para-API",
  "validPassword": "Pass-para-API",
  "sauceUser": "Usuario-Para-Saucedemo",
  "saucePassword": "Pass-Para-Saucedemo"
}
```

---

## Ejecución de Pruebas via npm Scripts

Las pruebas se ejecutan a través de los scripts configurados en el `package.json`:

* **Ejecutar toda la suite (Ejercicio 1 + Ejercicio 2 en modo Headless):**
  ```bash
  npm run test
  ```

* **Ejecutar solo el Ejercicio 1 (API - FakeStoreAPI):**
  ```bash
  npm run test:api
  ```

* **Ejecutar solo el Ejercicio 2 (UI - SauceDemo E2E):**
  ```bash
  npm run test:ui
  ```

* **Abrir Cypress en Modo Interactivo (UI/Runner):**
  ```bash
  npm run cypress:open
  ```

---

## Estructura del Proyecto

```text
dcac-qa-challenge/
├── cypress/
│   ├── e2e/
│   │   ├── api/                  # Ejercicio 1: Tests de API
│   │   │   ├── auth.cy.js
│   │   │   └── carts.cy.js
│   │   └── ui/                   # Ejercicio 2: Test E2E de UI
│   │       └── saucedemo.cy.js
│   ├── fixtures/                 # Datos de prueba desacoplados
│   │   └── checkoutUser.json
│   ├── pages/                    # Ejercicio 2: Clases POM
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   └── support/                  # Custom Commands y Hooks
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js             # Configuración base (baseUrl, apiBaseUrl)
├── cypress.env.json              # Variables de entorno local (GitIgnored)
├── package.json                  # Scripts de npm y dependencias
└── README.md
```

---

* **Buenas Prácticas:** Implementación estricta de **Page Object Model (POM)**, uso de selectores robustos (`data-test`), aserciones explícitas y flujo unificado.
