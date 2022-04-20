import { config } from "../../../../config/index";

class Normal_Product_Order_Salespromotion_Fixedprice_Mobile {
    clickOnSearchBarMobile(){
         cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskusalespromotionfixedprice)
        .should('have.value', config.sku.normalproductskusalespromotionfixedprice).type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Salespromotion_Fixedprice_Mobile;