import { config } from "../../../../config/index";

class Weighed_Product_Order_Priceagreement_Fixedprice_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskupriceagreementfixedprice)
        .should('have.value', config.sku.weighedproductskupriceagreementfixedprice).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Priceagreement_Fixedprice_Mobile;