describe('FakeStoreAPI - Creacion de carrito', () => {
    it('Caso #1 - Crear carrito', () => {
        cy.getProductsApi().then((productsResponse) => {
            // Validaciones
            expect(productsResponse.status).to.eq(200);
            expect(productsResponse.body).to.be.an("array");
            expect(productsResponse.body.length).to.be.at.least(3);

            // Agarramos los 3 primeros productos
            const selectedProducts = productsResponse.body.slice(0, 3).map((product) => ({
                productId: product.id,
                quantity: 1
            }));

            // Body de la creacion del carrito
            const cartPayload = {
                userId: 1,
                products: selectedProducts
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
                const expectedProductIds = selectedProducts.map((p) => p.productId);
                expect(returnedProductIds).to.deep.eq(expectedProductIds);
            });
        })
    })
})