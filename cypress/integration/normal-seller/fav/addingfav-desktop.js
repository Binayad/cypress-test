import { config } from "../../../../config";
describe("NORMAL SELLER ADD TO FAV DESKTOP MODE", () => {
    before(() => {
        cy.login()       
    });

    beforeEach(() => {
        cy.viewport("macbook-15");
        cy.preserveCookie();
        cy.visit("URL");
        cy.url().should('contain', '/products/search');
        cy.wait(5000);
    })

    after(() => {
        cy.logout();
    })

    it("Normal Product Add To Fav", function(){
        cy.normalProductOrder();
        cy.get('.prod-sku').first().should('have.text', config.sku.normalproductsku);
        cy.verifyfaviconinactive();
        cy.addtofavexistingfav();
        cy.alertmessagewhileaddingfav();
        cy.verifyfaviconactive();
        cy.addtofavnew();
        cy.alertmessagewhileaddingfav();
        cy.selectfilterfav();
        cy.get('.prod-sku').first().should('have.text', config.sku.normalproductsku);
        cy.verifyfaviconactive();
        cy.removefromfavexistingfav();
        cy.alertmessagewhileremovingfav();
        cy.Gotofavpage();
        cy.get('.innerSortableList .favourite-name').should("be.visible")
        .first()
        .should('have.text', 'test 1 ')
        .next()
        .should('have.text', '1').click()
        cy.get('.col-sku > .f-13').should('have.text', config.sku.normalproductsku);
        cy.get('.m-l-20 > .d-block > use').click()
        cy.alertmessagewhileremovingfav();
        cy.wait(5000)
        cy.deleteexistingfav(); 
        cy.alertmessagewhiledeletingfav();
        cy.verifyfavlist();
        cy.GotoProductSearchPage();
        cy.normalProductOrder();      
        cy.get('.prod-sku').first().should('have.text', config.sku.normalproductsku);
        cy.verifyfaviconinactive();
        cy.get('.prod-sku').first().should('have.text', config.sku.normalproductsku)
        cy.get('.prod-info').click();
        cy.verifyfaviconinactiveinproductdetailpage();
        cy.addtofavexistingfavonproductdetailpage();
        cy.alertmessagewhileaddingfav();
        cy.verifyfaviconactiveinproductdetailpage();
        // cy.addtofavnewonproductdetailpage();
        // cy.alertmessagewhileaddingfav();
        cy.removefromfavexistingfavonproductdetailpage();
        cy.alertmessagewhileremovingfav();
        cy.verifyfaviconinactiveinproductdetailpage();
    })

})