import { config } from "../../../../config/index";

class Weighed_Product_Order_Salespromotion_Fixedprice {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskusalespromotionfixedprice).should('have.value', config.sku.weighedproductskusalespromotionfixedprice);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Salespromotion_Fixedprice;