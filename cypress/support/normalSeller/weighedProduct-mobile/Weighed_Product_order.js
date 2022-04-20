import { config } from "../../../../config/index";

class Weighed_Product_order_Mobile {

    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductsku).should('have.value', config.sku.weighedproductsku).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_order_Mobile;