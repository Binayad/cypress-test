import { config } from "../../../../config/index";

class Normal_Product_Order_Priceagreement_Percentage {
    clickOnSearchBar(){
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskupriceagreementpercentage).should('have.value', config.sku.normalproductskupriceagreementpercentage);
        cy.get('#productSearchButton').should('be.visible').click()
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Priceagreement_Percentage;