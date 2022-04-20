import { config } from "../../../../config/index";

class Normal_Product_Order_Both_Discount_Type_Mobile {
    clickOnSearchBarMobile(){
        cy.get('.search-trigger').click()
        cy.get('#searchTerm').should('be.enabled').clear()
        .type(config.sku.normalproductskubothdiscounttype).should('have.value', config.sku.normalproductskubothdiscounttype)
        .type('{enter}');
        cy.wait(5000)
        return this;
    }
}

export default Normal_Product_Order_Both_Discount_Type_Mobile;