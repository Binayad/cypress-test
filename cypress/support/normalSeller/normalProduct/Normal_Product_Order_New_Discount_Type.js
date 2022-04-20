import { config } from "../../../../config/index";

class Normal_Product_Order_New_Discount_Type {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskunewdiscounttype).should('have.value', config.sku.normalproductskunewdiscounttype);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_New_Discount_Type;