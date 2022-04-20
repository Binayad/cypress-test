import { config } from "../../../../config/index";

class Configurable_Product_Order_Priceagreement_Percentage {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskupriceagreementpercentage).should('have.value', config.sku.configurableproductskupriceagreementpercentage);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Priceagreement_Percentage;