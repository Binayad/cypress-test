import { config } from "../../../../config/index";

class Configurable_Product_order_Mobile {

    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductsku).should('have.value', config.sku.configurableproductsku).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_order_Mobile;