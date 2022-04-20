import { config } from "../../../../config/index";

class Configurable_Product_Order_Priceagreement_Fixedprice_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskupriceagreementfixedprice)
        .should('have.value', config.sku.configurableproductskupriceagreementfixedprice).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Priceagreement_Fixedprice_Mobile;