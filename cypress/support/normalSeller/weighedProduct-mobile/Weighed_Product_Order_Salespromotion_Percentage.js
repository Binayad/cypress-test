import { config } from "../../../../config/index";

class Weighed_Product_Order_Salespromotion_Percentage_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskusalespromotionpercentage)
        .should('have.value', config.sku.weighedproductskusalespromotionpercentage).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Salespromotion_Percentage_Mobile;