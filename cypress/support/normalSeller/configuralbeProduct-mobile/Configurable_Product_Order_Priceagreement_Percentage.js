import { config } from "../../../../config/index";

class Configurable_Product_Order_Priceagreement_Percentage_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskupriceagreementpercentage)
        .should('have.value', config.sku.configurableproductskupriceagreementpercentage).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Priceagreement_Percentage_Mobile;