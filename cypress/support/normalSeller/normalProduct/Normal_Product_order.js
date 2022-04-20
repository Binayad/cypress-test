import { config } from "../../../../config/index";

class Normal_Product_order {

    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductsku).should('have.value', config.sku.normalproductsku);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_order;