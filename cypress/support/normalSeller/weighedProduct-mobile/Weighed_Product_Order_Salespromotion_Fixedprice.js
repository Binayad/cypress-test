import { config } from "../../../../config/index";

class Weighed_Product_Order_Salespromotion_Fixedprice_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.weighedproductskusalespromotionfixedprice)
        .should('have.value', config.sku.weighedproductskusalespromotionfixedprice).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Weighed_Product_Order_Salespromotion_Fixedprice_Mobile;