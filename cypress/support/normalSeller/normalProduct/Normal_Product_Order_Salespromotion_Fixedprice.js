import { config } from "../../../../config/index";

class Normal_Product_Order_Salespromotion_Fixedprice {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskusalespromotionfixedprice).should('have.value', config.sku.normalproductskusalespromotionfixedprice);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Salespromotion_Fixedprice;