import { config } from "../../../../config/index";

class Weighed_Product_Order_Priceagreement_Percentage {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskupriceagreementpercentage).should('have.value', config.sku.weighedproductskupriceagreementpercentage);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Priceagreement_Percentage;