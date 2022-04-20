import { config } from "../../../../config/index";

class Configurable_Product_Order_New_Discount_Type {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskunewdiscounttype).should('have.value', config.sku.configurableproductskunewdiscounttype);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_New_Discount_Type;