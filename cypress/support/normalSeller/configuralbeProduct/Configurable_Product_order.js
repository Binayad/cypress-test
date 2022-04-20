import { config } from "../../../../config/index";

class Configurable_Product_order {

    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductsku).should('have.value', config.sku.configurableproductsku);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_order;