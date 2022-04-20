import { config } from "../../../../config/index";

class Normal_Product_Order_Salespromotion_Percentage {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskusalespromotionpercentage).should('have.value', config.sku.normalproductskusalespromotionpercentage);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Salespromotion_Percentage;