import { config } from "../../../../config/index";

class Configurable_Product_Order_Priceagreement_Fixedprice {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskupriceagreementfixedprice).should('have.value', config.sku.configurableproductskupriceagreementfixedprice);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Priceagreement_Fixedprice;