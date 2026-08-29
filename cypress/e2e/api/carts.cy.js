describe('FakeStoreAPI - Creacion de carrito', () => {
    // Guardamos los objetos del carrito
    let initialProducts = [];
    
    it('Caso #1 - Crear carrito', () => {
        cy.getProductsApi().then((productsResponse) => {
            // Validaciones
            expect(productsResponse.status).to.eq(200);
            expect(productsResponse.body).to.be.an("array");
            expect(productsResponse.body.length).to.be.at.least(3);

            // Agarramos los 3 primeros productos.
            initialProducts = productsResponse.body.slice(0, 3).map((product) => ({
                productId: product.id,
                quantity: 1
            }));

            // Body de la creacion del carrito
            const cartPayload = {
                userId: 1,
                products: initialProducts
            }

            // Crear el carrito
            cy.createCartApi(cartPayload).then((cartResponse) => {
                // Validaciones
                expect(cartResponse.status).to.be.oneOf([200, 201]);
                expect(cartResponse.body).to.be.an("object");
                expect(cartResponse.body).to.have.property("id").that.is.a("number");
                expect(cartResponse.body).to.have.property("userId").that.is.a("number").and.to.eq(cartPayload.userId);
                expect(cartResponse.body).to.have.property("products").that.is.an("array");
                expect(cartResponse.body.products).to.have.lengthOf(3);

                // Validamos los ID de los productos dentro del response
                const returnedProductIds = cartResponse.body.products.map((p) => p.productId);
                const expectedProductIds = initialProducts.map((p) => p.productId);
                expect(returnedProductIds).to.deep.eq(expectedProductIds);

                // Me guardo el ID para el siguiente caso
                const createdId = cartResponse.body.id;
                Cypress.env("createdCartId", createdId);
            });
        })
    })

    it('Caso #2 - Actualizar el carrito', () => {
        // Agarro el ID del cart anterior
        const cartId = Cypress.env("createdCartId");

        // FAIL SAFE: Aseguramos que este el cartId
        expect(cartId).to.exist;

        cy.getProductsApi().then((productsResponse) => {
            // Validaciones
            expect(productsResponse.status).to.eq(200);
            expect(productsResponse.body.length).to.be.at.least(4);

            // Agarramos el ultimo producto
            const extraProduct = {
                productId: productsResponse.body[3].id,
                quantity: 1
            }

            // Payload nuevo
            const updatePayload = {
                userId: 1,
                products: [...initialProducts, extraProduct]
            }

            // Actualizamos
            cy.updateCartApi(cartId, updatePayload).then((updateResponse) => {
                // Validaciones
                expect(updateResponse.status).to.be.oneOf([200, 201]);
                expect(updateResponse.body).to.be.an("object");
                expect(updateResponse.body).to.have.property("id").that.is.eq(cartId);
                expect(updateResponse.body.products).to.have.lengthOf(4);

                // Nos aseguramos de que el producto este agregado
                const addedProduct = updateResponse.body.products.find(
                    (p) => p.productId === extraProduct.productId
                )
                expect(addedProduct).to.exist;
            })
        })
    })

    it('Caso #3 - Eliminar carrito', () => {
        // Agarro el ID del cart anterior
        const cartId = Cypress.env("createdCartId");

        // FAIL SAFE: Aseguramos que este el cartId
        expect(cartId).to.exist;

        // Borramos el carrito
        cy.deleteCartApi(cartId).then((response) => {
            // Validaciones
            expect(response.status).to.be.oneOf([200, 204]);
        })
    })
})