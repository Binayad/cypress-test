import { config } from "../../../../config/index";

class Normal_Product_Order_Priceagreement_Fixedprice_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskupriceagreementfixedprice)
        .should('have.value', config.sku.normalproductskupriceagreementfixedprice)
        .type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Priceagreement_Fixedprice_Mobile;