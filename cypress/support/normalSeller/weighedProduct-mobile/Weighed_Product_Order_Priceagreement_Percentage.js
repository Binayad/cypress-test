import { config } from "../../../../config/index";

class Weighed_Product_Order_Priceagreement_Percentage_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskupriceagreementpercentage)
        .should('have.value', config.sku.weighedproductskupriceagreementpercentage).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Priceagreement_Percentage_Mobile;