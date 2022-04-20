import { config } from "../../../../config/index";

class Weighed_Product_Order_Priceagreement_Fixedprice {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskupriceagreementfixedprice).should('have.value', config.sku.weighedproductskupriceagreementfixedprice);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Priceagreement_Fixedprice;