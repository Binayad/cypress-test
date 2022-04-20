import { config } from "../../../../config/index";

class Configurable_Product_Order_Both_Discount_Type_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskubothdiscounttype)
        .should('have.value', config.sku.configurableproductskubothdiscounttype).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Both_Discount_Type_Mobile;