import { config } from "../../../../config/index";

class Weighed_Product_Order_Both_Discount_Type_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskubothdiscounttype)
        .should('have.value', config.sku.weighedproductskubothdiscounttype).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Both_Discount_Type_Mobile;