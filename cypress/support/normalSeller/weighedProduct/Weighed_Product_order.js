import { config } from "../../../../config/index";

class Weighed_Product_order {

    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductsku).should('have.value', config.sku.weighedproductsku);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_order;