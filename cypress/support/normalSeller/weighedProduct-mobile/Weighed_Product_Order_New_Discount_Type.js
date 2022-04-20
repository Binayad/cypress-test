import { config } from "../../../../config/index";

class Weighed_Product_Order_New_Discount_Type_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskunewdiscounttype)
        .should('have.value', config.sku.weighedproductskunewdiscounttype).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_New_Discount_Type_Mobile;