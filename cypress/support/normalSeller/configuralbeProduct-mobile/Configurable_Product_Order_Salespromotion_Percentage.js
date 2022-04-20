import { config } from "../../../../config/index";

class Configurable_Product_Order_Salespromotion_Percentage_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.configurableproductskusalespromotionpercentage)
        .should('have.value', config.sku.configurableproductskusalespromotionpercentage).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Configurable_Product_Order_Salespromotion_Percentage_Mobile;