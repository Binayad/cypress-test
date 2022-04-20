import { config } from "../../../../config/index";

class Configurable_Product_Order_Both_Discount_Type {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskubothdiscounttype).should('have.value', config.sku.configurableproductskubothdiscounttype);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Both_Discount_Type;