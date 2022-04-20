import { config } from "../../../../config/index";

class Normal_Product_order_Mobile {

    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductsku).should('have.value', config.sku.normalproductsku)
        .type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_order_Mobile;