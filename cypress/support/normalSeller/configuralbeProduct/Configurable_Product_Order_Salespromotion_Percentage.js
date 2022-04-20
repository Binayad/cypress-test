import { config } from "../../../../config/index";

class Configurable_Product_Order_Salespromotion_Percentage {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskusalespromotionpercentage).should('have.value', config.sku.configurableproductskusalespromotionpercentage);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Salespromotion_Percentage;