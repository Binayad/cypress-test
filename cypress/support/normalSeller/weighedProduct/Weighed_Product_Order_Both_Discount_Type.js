import { config } from "../../../../config/index";

class Weighed_Product_Order_Both_Discount_Type {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskubothdiscounttype).should('have.value', config.sku.weighedproductskubothdiscounttype);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Both_Discount_Type;