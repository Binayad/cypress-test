import { config } from "../../../../config/index";

class Configurable_Product_Order_New_Discount_Type_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskunewdiscounttype)
        .should('have.value', config.sku.configurableproductskunewdiscounttype).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_New_Discount_Type_Mobile;