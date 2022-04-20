import { config } from "../../../../config/index";

class Normal_Product_Order_Salespromotion_Percentage_Mobile {
    clickOnSearchBarMobile(){
         cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskusalespromotionpercentage)
        .should('have.value', config.sku.normalproductskusalespromotionpercentage)
        .type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Salespromotion_Percentage_Mobile;